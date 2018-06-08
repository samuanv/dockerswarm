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
Includes the response from /login endpoint in 'Authorization' header with this format: 'Bearer :tokenGivenFromLogin';
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

PhotoDTO: 
## MongoDB
MongoDB service

## MySQL service (Dockerized) 3306
MySQL service running on port 3306.

## Redis service (Dockerized) 6379
Redis service running on port 6379.
`docker run --name redis -p 6379:6379 -d redis`

## Swift service (Dockerized) 8083
Swift service running on port 8083
`docker run -d -p 8083:8080 -v swift:/srv/node twcammaster.uv.es/swift`

Env variables:
process.env.SWIFT_URL = http://localhost:8083
process.env.DB_URL= 'mongodb://localhost/photos';
Ocata Cli:
`docker run -it --name openstack-cli --add-host controller:147.156.84.206 --net=swift -v C:\openstack:/tmp/tempdir twcammaster.uv.es/ocata-cli /bin/bash`


## Photo service (Dockerized) 8082

`docker build -t sbphoto .`
`docker run --name photocont -p 8082:8080  sbphoto`


## Counter service (Dockerized) 8081

`docker build -t sbcounter .`
`docker run --name countercont -p 8081:8080  sbcounter`


## Login service (Dockerized) 8080

`docker build -t sblogin .`
`docker run --name logincont -p 8080:8080  sblogin`