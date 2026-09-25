ARG JENA_HOME_DIR=/opt/app

FROM eclipse-temurin:21 AS ontology-formats

ARG APACHE_JENA_VERSION=5.6.0
ARG APACHE_JENA_NAME=apache-jena-${APACHE_JENA_VERSION}
ARG APACHE_JENA_URL=https://archive.apache.org/dist/jena/binaries/${APACHE_JENA_NAME}.tar.gz
ARG JENA_HOME_DIR

WORKDIR ${JENA_HOME_DIR}

RUN wget ${APACHE_JENA_URL} -O ${APACHE_JENA_NAME}.tar.gz
RUN tar -xvzf ${APACHE_JENA_NAME}.tar.gz

ENV JENA_HOME=${JENA_HOME_DIR}/${APACHE_JENA_NAME}
ENV PATH=$PATH:${JENA_HOME}/bin

COPY ./core-schema.ttl core-schema.ttl
COPY ./core-abilities.ttl core-abilities.ttl
COPY ./core-areas-math.ttl core-areas-math.ttl
COPY ./core-scopes-math.ttl core-scopes-math.ttl

RUN riot --output=RDF/XML ${JENA_HOME_DIR}/core-schema.ttl ${JENA_HOME_DIR}/core-abilities.ttl ${JENA_HOME_DIR}/core-areas-math.ttl ${JENA_HOME_DIR}/core-scopes-math.ttl > core-ontology-math.rdf

CMD [ "tail", "-f", "/dev/null" ]

FROM ghcr.io/astral-sh/uv:python3.13-alpine AS python-code-gen

ARG JENA_HOME_DIR

COPY --from=ontology-formats ${JENA_HOME_DIR}/core-schema.ttl core-schema.ttl
COPY --from=ontology-formats ${JENA_HOME_DIR}/core-abilities.ttl core-abilities.ttl
COPY --from=ontology-formats ${JENA_HOME_DIR}/core-areas-math.ttl core-areas-math.ttl
COPY --from=ontology-formats ${JENA_HOME_DIR}/core-scopes-math.ttl core-scopes-math.ttl
COPY --from=ontology-formats ${JENA_HOME_DIR}/core-ontology-math.rdf core-ontology-math.rdf
COPY pyproject.toml uv.lock ./
COPY ./.venv* ./.venv
COPY ./src ./src

RUN uv sync
RUN uv run src/ontology/generate-ts.py

FROM node:20-alpine AS typescript-compiler

WORKDIR /app/typescript

COPY --from=python-code-gen /dist/typescript ./
COPY --from=ontology-formats /opt/app/core-schema.ttl /ontology/core-schema.ttl
COPY --from=ontology-formats /opt/app/core-abilities.ttl /ontology/core-abilities.ttl
COPY --from=ontology-formats /opt/app/core-areas-math.ttl /ontology/core-areas-math.ttl
COPY --from=ontology-formats /opt/app/core-scopes-math.ttl /ontology/core-scopes-math.ttl
COPY ./libraries/typescript/package.json ./package.json
COPY ./libraries/typescript/tsconfig*.json ./
COPY ./libraries/typescript/*.ts ./
COPY ./libraries/typescript/README.md ./README.md
COPY ./libraries/shared/relation-contracts.json ./relation-contracts.json
COPY ./libraries/shared/query-fixtures.json ./query-fixtures.json
COPY ./libraries/shared/statement-fixtures.json ./statement-fixtures.json

RUN npm install
RUN npm run build:core
RUN npm run build:snapshot
RUN node bootstrap/generate-snapshot.js BundledSnapshot.ts /ontology/core-schema.ttl /ontology/core-abilities.ttl /ontology/core-areas-math.ttl /ontology/core-scopes-math.ttl
RUN npm run build
RUN npm test
RUN npm run validate:ontology -- /ontology/core-schema.ttl /ontology/core-abilities.ttl /ontology/core-areas-math.ttl /ontology/core-scopes-math.ttl
COPY ./README.md ./DOCS.md ./DESIGN.md ./AGENTS.md ./DOCS_ONTOLOGY.md ./LICENSE ./catalog-v001.xml ./Dockerfile ./pyproject.toml ./uv.lock /repository/
COPY ./.github /repository/.github
COPY ./docs /repository/docs
COPY ./src /repository/src
COPY ./libraries /repository/libraries
COPY ./core-schema.ttl ./core-abilities.ttl ./core-areas-math.ttl ./core-scopes-math.ttl /repository/
RUN npm run validate:docs -- /repository /ontology/core-schema.ttl /ontology/core-abilities.ttl /ontology/core-areas-math.ttl /ontology/core-scopes-math.ttl

RUN node dist/package-docs.js /repository .
RUN npm pack --pack-destination /tmp && node dist/package.test.js /tmp/edugraph-ts-0.0.0.tgz

FROM ghcr.io/astral-sh/uv:python3.13-bookworm-slim AS python-builder

WORKDIR /app/python
COPY --from=typescript-compiler /repository/libraries/python /repository/libraries/python
COPY --from=typescript-compiler /repository/LICENSE /repository/LICENSE
COPY --from=typescript-compiler /app/typescript/snapshot.json /shared/snapshot.json
COPY --from=typescript-compiler /app/typescript/references /shared/references
COPY --from=typescript-compiler /app/typescript/RULES.md /shared/RULES.md
COPY ./libraries/shared /shared
COPY ./src/ontology/generate-py.py /repository/src/ontology/generate-py.py
RUN python /repository/src/ontology/generate-py.py --output /app/python --snapshot /shared/snapshot.json --contracts /shared/relation-contracts.json --references /shared/references --rules /shared/RULES.md
ARG PACKAGE_VERSION=0.0.0
RUN python /repository/libraries/python/set_version.py pyproject.toml "$PACKAGE_VERSION"
RUN uv venv && uv pip install -r /repository/libraries/python/requirements-dev.lock && uv pip install --no-deps -e .
RUN uv run --no-sync ruff check /repository/libraries/python/src && uv run --no-sync ruff format --check /repository/libraries/python/src
RUN uv run --no-sync mypy src/edugraph /repository/libraries/python/tests/typed_consumer.py /repository/src/ontology/generate-py.py /repository/libraries/python/verify_package.py /repository/libraries/python/set_version.py
RUN uv run --no-sync mypy /repository/libraries/python/src/edugraph/__init__.py
ENV EDUGRAPH_FIXTURES=/shared
RUN uv run --no-sync pytest /repository/libraries/python/tests /repository/libraries/python/test_relations.py -q
RUN uv build
RUN uv run --no-sync python /repository/libraries/python/verify_package.py dist

FROM scratch AS export

ARG JENA_HOME_DIR

COPY --from=ontology-formats ${JENA_HOME_DIR}/core-schema.ttl core-schema.ttl
COPY --from=ontology-formats ${JENA_HOME_DIR}/core-abilities.ttl core-abilities.ttl
COPY --from=ontology-formats ${JENA_HOME_DIR}/core-areas-math.ttl core-areas-math.ttl
COPY --from=ontology-formats ${JENA_HOME_DIR}/core-scopes-math.ttl core-scopes-math.ttl
COPY --from=ontology-formats ${JENA_HOME_DIR}/core-ontology-math.rdf core-ontology-math.rdf

COPY --from=typescript-compiler /app/typescript/dist ./typescript/dist
COPY --from=typescript-compiler /app/typescript/package.json ./typescript/package.json
COPY --from=typescript-compiler /app/typescript/README.md ./typescript/README.md
COPY --from=typescript-compiler /app/typescript/references ./typescript/references
COPY --from=typescript-compiler /app/typescript/RULES.md ./typescript/RULES.md

COPY --from=python-builder /app/python/dist ./python/dist

# The shared authored snapshot also supports independent Python-version CI consumers.
COPY --from=typescript-compiler /app/typescript/snapshot.json ./typescript/snapshot.json
