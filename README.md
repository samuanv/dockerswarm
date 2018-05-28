# dockerswarm
Final project for Cloud-Computing. Microservice architecture using docker machine, compose and swarm.

## sb-login (Java - Spring Boot) 8080
Spring Boot microservice to authenticate users.
Endpoints: 
- POST /login
- POST /register
User = {
    long id
    String user
    String password
    String rol
}
It connects to the MySQL service.

## sb-counter (Java - Spring Boot) 8081
Spring Boot microservice to register likes in pictures.
Endpoints (see in sb-counter/api-swagger.yaml):
- POST /increment/{var}
- POST /decrement/{var}
It connects to the Redis service.

## sb-photos (Node - NestJS) 8082
Microservice developed with NestJS (TypeScript) and MongoDB that connects to the MongoDB service and Swift service.
Endpoints: 
- POST /photo (multipart)
- GET /photo

## MySQL service (Dockerized) 3306
MySQL service running on port 3306.

## Redis service (Dockerized) 6379
Redis service running on port 6379.
`docker run --name redis -p 6379:6379 -d redis`

## Swift service (Dockerized) 8083
Swift service running on port 8083
`docker pull twcammaster.uv.es/swift:latest`
`docker network create swift`
`docker -d run -p 8083:8080 -v swift:/srv/node --net=swift twcammaster.uv.es/swift`
`docker run -it --name openstack-cli --add-host controller:147.156.84.206 --net=swift -v C:\openstack:/tmp/tempdir twcammaster.uv.es/ocata-cli /bin/bash`
Inside ocata-cli container:
`export ST_USER=test:tester export ST_KEY=testing export ST_AUTH=http://<ip-swift-containter>:8080/auth/v1.0`