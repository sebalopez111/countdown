FROM 10.116.81.31:5000/ndvr_stable/alpine-node-3.2:latest

### Mount points
VOLUME /var

### Application Runner
COPY build /opt/countdown/build
COPY src /opt/countdown/src
COPY app.js /opt/countdown
COPY package.json /opt/countdown

WORKDIR /opt/countdown

### Expose ports used by the application
EXPOSE 5100

### ENV variables
ENV PATH /opt/node/bin:$PATH
RUN PATH="/opt/node/bin:$PATH"
RUN npm install

### Set Entry Point
CMD node app.js
