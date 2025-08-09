FROM eclipse-temurin:21

ARG APACHE_JENA_VERSION=5.5.0
ARG APACHE_JENA_NAME=apache-jena-${APACHE_JENA_VERSION}
ARG APACHE_JENA_URL=https://dlcdn.apache.org/jena/binaries/${APACHE_JENA_NAME}.tar.gz
ARG HOME_DIR=/opt/app

WORKDIR ${HOME_DIR}

RUN wget ${APACHE_JENA_URL} -O ${APACHE_JENA_NAME}.tar.gz
RUN tar -xvzf ${APACHE_JENA_NAME}.tar.gz

ENV JENA_HOME=${HOME_DIR}/${APACHE_JENA_NAME}
ENV PATH=$PATH:${JENA_HOME}/bin

COPY ./core-ontology.ttl core-ontology.ttl

RUN riot --output=RDF/XML core-ontology.ttl > core-ontology.rdf

CMD [ "tail", "-f", "/dev/null" ]