
#jdk extra ligero oficial
FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8080
ADD /target/login-v1.jar app.jar
ADD wait-for-it.sh wait-for-it.sh
#ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
