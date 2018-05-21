# dockerswarm
Final project for Cloud-Computing. Microservice architecture using docker machine, compose and swarm.

## sb-login (Spring Boot)
Spring Boot microservice to authenticate users.
Endpoints: 
- /login
- /register
User = {
    long id
    String user
    String password
    String rol
}
It connects to the MySQL service.

## sb-counter (Spring Boot)
Spring Boot microservice to register likes in pictures.
Endpoints (see in sb-counter/api-swagger.yaml):
- /increment/{var}
- /decrement/{var}
It connects to the Redis service.

## MySQL service (Dockerized)
MySQL service running on port 3306.

## Redis service (Dockerized)
Redis service running on port 6379.
`docker run --name redis -p 6379:6379 -d redis`

