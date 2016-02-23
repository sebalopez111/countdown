FROM 10.116.81.31:5000/ndvr_stable/alpine-node-3.2:latest

### Mount points
VOLUME /var

### Application Runner
COPY ./* /opt/countdown/

WORKDIR /opt/countdown

### Expose ports used by the application
EXPOSE 8080

### Set Entry Point
ENTRYPOINT ["node app.js"]
