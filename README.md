Library Management

The project is a n-tier application using flask based REST micro services to share the business logic to consumers. 

The repo has 2 components identified by 2 folders - `backend` and `frontend`

`backend` - contains the flask application and the REST endpoints for managing the entities of the project. 

`frontend` - contains the Vite based React TypeScript application which consumes the REST services.

Both these services should be independently run in separate command / terminals to be interconnected. 

Project set up

The project uses docker containers to run the MySQL Server and phpMyAdmin web client. This is due to the installation issues faced while installing MySQL directly on a Mac. 

The instructions for setting up these docker images are given below. Both these docker images will be installed on `docker desktop`. Ensure that docker desktop is available and the docker engine is running on the local machine to which the docker images are pulled. 

Installing phpMyAdmin

phpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web. phpMyAdmin supports a wide range of operations on MySQL and MariaDB. Frequently used operations (managing databases, tables, columns, relations, indexes, users, permissions, etc) can be performed via the user interface, while you still have the ability to directly execute any SQL statement.

The docker image is available at  `https://hub.docker.com/_/phpmyadmin` and can be pulled into the docker desktop by running the following command from any terminal.

`docker pull phpmyadmin`

View a summary of image vulnerabilities and recommendations → docker scout quickview phpmyadmin

Installing MySQL

MySQL is the RDBMS used in this project. A CE of MySQL is available as a docker image at
`https://hub.docker.com/_/mysql`.  The image should be pulled into the docker desktop using the below command

`docker pull mysql`

Verification of the installations

Once phpMyAdmin and MySQL Server CE edition docker images are downloaded, they will be visible in the `Images` tab of the docker desktop under the same names. 

Configuring MySQL

Running MySQL

root user - root
MYSQL_ROOT_PASSWORD=hello123$ 
MYSQL_DATABASE=library
MYSQL_USER=test, 
MYSQL_PASSWORD=hello123$

Setting it from docker desktop or running from the command line. 
Running the image from the docker desktop 

Docker shell..
docker exec -it mysql_db_server bash

Running phpMySQL

docker run --name phpmyadmin -d --link mysql-db-server:db -p 8080:80 phpmyadmin