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
Build imager:
docker build -t sb-login .
Run Container:
docker run --name sb-logincontainer -p 8080:8080  -e SECRET_TOKEN=secretlogin sb-login

## sb-counter (Java - Spring Boot) 8081
Spring Boot microservice to register likes in pictures.
Endpoints (see in sb-counter/api-swagger.yaml):
- POST /increment/{var}
- POST /decrement/{var}
It connects to the Redis service.
Build imager:
docker build -t sb-counter .

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
docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7

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
`docker run -it --name openstack-cli --add-host controller:147.156.84.206 --net=swift -v C:\ocata-cli:/tmp/tempdir twcammaster.uv.es/ocata-cli /bin/bash`


## Docker machine
docker-machine --debug --native-ssh create --openstack-username peanvi --openstack-password 20c8bc58 --openstack-tenant-name proyecto4 --openstack-auth-url http://controller:5000/v3 --openstack-flavor-name m1.large --openstack-image-name ubuntu-16-aufs --openstack-net-name red-practica3 --openstack-ssh-user ubuntu --openstack-domain-name Default --openstack-floatingip-pool external-network --driver openstack docker-swarm-manager-g4

docker-machine --debug --native-ssh provision g4

docker-machine --debug --native-ssh ssh g4

]0;ubuntu@g4: ~ubuntu@g4:~$ sudo docker swarm init
Swarm initialized: current node (0lyi01f7rsfisb0qaucohnd32) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-3kz3wmw5u9y6preb8ykwm7yxdo1aje0xjzxuc3m3371t9xhwf4-50i4luh9nk8kwq4q87x1dnzui 10.2.0.3:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.


docker stack deploy --compose-file docker-compose.yml g4