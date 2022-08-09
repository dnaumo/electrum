FROM python:3.7-alpine

WORKDIR /root

COPY checksum.sha256 .

ARG ELECTRUM_VERSION
ARG ELECTRUM_USER
ARG ELECTRUM_HOME

RUN set -x && apk --update-cache add --virtual build-dependencies gcc musl-dev && \
	adduser -D $ELECTRUM_USER && \
	wget -q https://download.electrum.org/${ELECTRUM_VERSION}/Electrum-${ELECTRUM_VERSION}.tar.gz && \
	sha256sum -c checksum.sha256 && \
	pip3 install Electrum-${ELECTRUM_VERSION}.tar.gz && \
	apk del build-dependencies

RUN mkdir -p ${ELECTRUM_HOME}/.electrum/ /data && \
	ln -sf ${ELECTRUM_HOME}/.electrum/ /data && \
	chown ${ELECTRUM_USER} ${ELECTRUM_HOME}/.electrum /data

# Install Kaigara
ARG KAIGARA_VERSION=0.1.24
RUN wget -O /usr/bin/kaigara https://github.com/openware/kaigara/releases/download/${KAIGARA_VERSION}/kaigara \
	&& chmod +x /usr/bin/kaigara

USER $ELECTRUM_USER
WORKDIR $ELECTRUM_HOME
VOLUME /data
EXPOSE 7000

COPY start-electrum.py /usr/local/bin/
CMD ["python", "/usr/local/bin/start-electrum.py"]
