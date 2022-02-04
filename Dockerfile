FROM python:3.8-slim

COPY requirements.txt /tmp/requirements.txt

RUN pip install -r --no-cache-dir /tmp/requirements.txt

WORKDIR /doc