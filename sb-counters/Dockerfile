
#jdk extra ligero oficial
FROM openjdk:8-jdk-alpine
VOLUME /tmp
EXPOSE 8080
<<<<<<< HEAD
ADD target/counters-v1.jar app.jar
=======
ADD /target/counters-v1.jar app.jar
>>>>>>> 8fb5d911f487f22a8ae718adb0d7c9424edd4cf2
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
