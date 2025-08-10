ARG JENA_HOME_DIR=/opt/app

FROM eclipse-temurin:21 AS ontology-formats

ARG APACHE_JENA_VERSION=5.5.0
ARG APACHE_JENA_NAME=apache-jena-${APACHE_JENA_VERSION}
ARG APACHE_JENA_URL=https://dlcdn.apache.org/jena/binaries/${APACHE_JENA_NAME}.tar.gz
ARG JENA_HOME_DIR

WORKDIR ${JENA_HOME_DIR}

RUN wget ${APACHE_JENA_URL} -O ${APACHE_JENA_NAME}.tar.gz
RUN tar -xvzf ${APACHE_JENA_NAME}.tar.gz

ENV JENA_HOME=${JENA_HOME_DIR}/${APACHE_JENA_NAME}
ENV PATH=$PATH:${JENA_HOME}/bin

COPY ./core-ontology.ttl core-ontology.ttl

RUN riot --output=RDF/XML ${JENA_HOME_DIR}/core-ontology.ttl > core-ontology.rdf

CMD [ "tail", "-f", "/dev/null" ]

FROM ghcr.io/astral-sh/uv:python3.13-alpine AS code-libraries

ARG JENA_HOME_DIR

COPY --from=ontology-formats ${JENA_HOME_DIR}/core-ontology.ttl core-ontology.ttl
COPY --from=ontology-formats ${JENA_HOME_DIR}/core-ontology.rdf core-ontology.rdf
COPY pyproject.toml uv.lock ./
COPY ./.venv* ./.venv
COPY ./src ./src

RUN uv sync
RUN uv run src/ontology/generate-ts.py

FROM scratch AS export

COPY ./libraries/typescript ./typescript
COPY --from=code-libraries core-ontology.ttl core-ontology.ttl
COPY --from=code-libraries core-ontology.rdf core-ontology.rdf
COPY --from=code-libraries dist/ ./