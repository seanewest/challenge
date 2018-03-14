FROM buildpack-deps:jessie
RUN apt-get update
RUN mkdir /challenge
COPY answers/pass.c /challenge
RUN gcc /challenge/pass.c -o /challenge/pass && rm /challenge/pass.c
WORKDIR /challenge
