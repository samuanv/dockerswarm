
#jdk extra ligero oficial
FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8080
ADD /target/login-v1.jar app.jar
## Add the wait script to the image
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
CMD /wait && java -jar app.jar
#ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
