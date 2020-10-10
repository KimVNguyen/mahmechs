FROM node:latest
ARG USR=node

#Does all the things we need to do as root
RUN apt-get update && \
  apt-get install sudo && \
  usermod -aG sudo $USR && \
  echo "$USR ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

RUN mkdir /code && \
  chown -R $USR:$USR /code/

# RUN npm install -g \
#   nodemon  

USER $USR:$USR 
WORKDIR /code
ADD . /code/