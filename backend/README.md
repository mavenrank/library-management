Library management - backend set up

Pre-requisites

Python 3.x
pip

Virtual Environment set up

Launch a new terminal in VS Code 
Change to the `backend` folder
Create a new virtual environment using the command `python3 -m venv env`. This will create an `env` folder in the project root.
Activate the virtual environment using the command, `source env/bin/activate`
This will show the `(env)` in the prompt.

Installing the dependencies needeed for the project

After activating the virtual environment, run the following commands to install the dependencies needed for the project. 

`pip install --upgrade pip`
`pip install -r requirements.txt`

The above command creates a `node_modules` folder in the project root. This folder contains all the modules needed for the application to run.

Configuration

The flask REST service use SQLAlchemy OR/M to connect to the MySQL database, which is set to run on a docker container. 

The REST service uses the following details defined in config.py to connect to the MySQL server. If there is any change in the configuration, the details should be updated. 

`mysql+pymysql://root:hello123$@localhost/library`

It essentially means, using `mysql` as the database, `pymysql` MySQL Driver, `root` user and `hello123$` as the password, MySQL Server running on `localhost` on port 3306 and `library` database. 

So above details are pre-requisites. 

Running the application

Type `python3 app.py` in the terminal to start the application. The application automatically creates the tables in the `library` database if not already available. If any changes are made to the `model.py` the change will be reflected the next time the application is run. This can be verified from `phpMyAdmin`

If you have already set up the table using the insert scripts, no changes will be made. 

The application will run on `http://127.0.0.1:5000`.

Verifying application 

To check if the application is running or not, open a command window and type the following command 



Project structure

Details to come

Docker

Details to come..

Micro services

REST services expose the business logic for clients to consume. 
Organizing the 

Object relational mapping tool (OR/M)

Details

phpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web. phpMyAdmin supports a wide range of operations on MySQL and MariaDB. Frequently used operations (managing databases, tables, columns, relations, indexes, users, permissions, etc) can be performed via the user interface, while you still have the ability to directly execute any SQL statement.

https://hub.docker.com/_/phpmyadmin

docker pull phpmyadmin
View a summary of image vulnerabilities and recommendations → docker scout quickview phpmyadmin

https://hub.docker.com/_/mysql

docker pull mysql

$ docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag

root user - root
MYSQL_ROOT_PASSWORD=hello123$ 
MYSQL_DATABASE=library
MYSQL_USER=test, 
MYSQL_PASSWORD=hello123$

Setting it from docker desktop or running from the command line. 
Running the image from the docker desktop 

Docker shell..
docker exec -it mysql_db_server bash

docker run --name phpmyadmin -d --link mysql-db-server:db -p 8080:80 phpmyadmin

ER Diagram

Entities and their relationships:

Author:

Attributes: AuthorID, Name, Bio, DateOfBirth
Relationships: Writes multiple Books
Books:

Attributes: BookID, Title, ISBN, PublicationYear, Genre, AuthorID (foreign key)
Relationships: Written by one Author, available in one or more Library
Library:

Attributes: LibraryID, Name, Location
Relationships: Contains multiple Books, hires out books to multiple Users
Users:

Attributes: UserID, Name, Email, MembershipDate
Relationships: Can hire multiple Books from the Library
Hiring (Association Entity between Users and Books):

Attributes: HireID, UserID (foreign key), BookID (foreign key), HireDate, ReturnDate
ER Diagram
Here is a textual representation of the ER diagram:

Author (1) --- (writes) --- (M) Books
Books (M) --- (available in) --- (M) Library
Library (1) --- (contains) --- (M) Books
Users (1) --- (hires) --- (M) Books (through Hiring)
ER Diagram (Textual Description)
scss
Copy code
authors (author_id, name, bio, date_of_birth)
  1   | 
  |   M
books (book_id, title, isbn, publication_year, genre, author_id)
  M   |
  |   M
library (library_id, name, location)
  1   |
  |   M
users (user_id, name, email, membership_date)
  1   |
  |   M
hiring (hire_id, user_id, book_id, hire_date, return_date)
Entity Definitions

authors

author_id: Unique identifier for the author.
name: Name of the author.
bio: Short biography of the author.
date_of_birth: Author's date of birth.

books

book_id: Unique identifier for the book.
title: Title of the book.
isbn: International Standard Book Number.
publication_year: Year the book was published.
genre: Genre of the book.
author_id: Foreign key referencing AuthorID in the Author entity.

library

library_id: Unique identifier for the library.
name: Name of the library.
location: Physical location of the library.

users

user_id: Unique identifier for the user.
name: Name of the user.
email: Email address of the user.
membership_date: Date the user became a member of the library.

hiring

hire_id: Unique identifier for the hiring record.
user_id: Foreign key referencing UserID in the Users entity.
book_id: Foreign key referencing BookID in the Books entity.
hire_date: Date the book was hired.
return_date: Date the book was returned.

Accessing dockerized MySQL from Flask (non-dockerized) application 

When trying to connect to the dockerized MySQL from Flask application, got an error saying the client could not connect.

sqlalchemy.exc.OperationalError: (pymysql.err.OperationalError) (2003, "Can't connect to MySQL server on 'localhost' ([Errno 61] Connection refused)")
(Background on this error at: https://sqlalche.me/e/20/e3q8)

Debugging

Checked if the MySQL container was working. 

docker ps

Logged into docker container (bash) and connected with MySQL .. was able to connect. 

docker exec -it mysql bash

Tried to locate the my.cnf (UNIX) in /etc/mysql/conf.d/ but could not locate the my.cnf file. 

Checked the log files MySQL Started alright. Could not create a new my.cnf file within the docker. No VIM or Nano was installed in the container. Tried installing using apt-get. No apt-get. Not sure why this docker container is so bare. 

Then decided to use the host my.cnf file..created a .cnf file in ~/Documents with the following entries.

[mysqld]
user=mysql
pid-file=/var/run/mysqld/mysqld.pid
socket=/var/run/mysqld/mysqld.sock
port=3306
datadir=/var/lib/mysql

# Bind to all IP addresses
bind-address = 0.0.0.0

# Custom configurations
max_connections = 200

Finally started the docker container using the custom configuration with the .cnf file in the host system. (Mount the Configuration File into the Container)

 docker run --name mysql-db-server -v ~/documents/mysql/my.cnf:/etc/mysql/my.cnf -e MYSQL_ROOT_PASSWORD=hello123$ -e MYSQL_DATABASE=library -p 3306:3306 -d mysql:latest

There is another interesting option ..
Using a Dockerfile to Copy Configuration File
Create a Custom my.cnf File on Your Host Machine.
Create a Dockerfile in the same directory as your my.cnf file:
FROM mysql:latest
COPY my.cnf /etc/mysql/my.cnf
Build the Docker image with the custom configuration file:
docker build -t custom-mysql .
Run a container from the custom image:
docker run --name mysql_db_server -e MYSQL_ROOT_PASSWORD=rootpassword -e MYSQL_DATABASE=mydatabase -p 3306:3306 -d custom-mysql

ChatGPT help me big time to explain and suggest alternatives. Very useful tips and learnt a lot from it. Kudos. 

Sample Data

To insert sample data into the tables created above, sign in to phpMyAdmin and verify if all the tables were successfully created. 

Then run the script sample_data.sql which contains the sample INSERT statements from the phyMyAdmin console.

Unit testing 

Tested the APIs using Postman tool (the test suite file tests.json is available in github). To run the tests, follow all the installation steps to start the docker containers for phpadmin and MySQL and set up and run the flask application locally

Alternatively one could use the cURL command line utility to test the APIs. Run the following samples from the command line ensuring that the web server is running

Console Locked</h3>
        <p>
          The console is locked and needs to be unlocked by entering the PIN.
          You can find the PIN printed out on the standard output of your
          shell that runs the server.

Hiring a book

curl -X POST http://localhost:5000/api/hirings \
-H "Content-Type: application/json" \
-d '{
  "UserID": 1,
  "BookID": 1,
  "HireDate": "2024-09-14",
  "ReturnDate": null
}'

Hiring a book with a return date

curl -X POST http://localhost:5000/api/hirings \
-H "Content-Type: application/json" \
-d '{
  "UserID": 2,
  "BookID": 2,
  "HireDate": "2024-09-14",
  "ReturnDate": "2024-09-21"
}'

Hiring a book with default hire date (today's date)

curl -X POST http://localhost:5000/api/hirings \
-H "Content-Type: application/json" \
-d '{
  "UserID": 3,
  "BookID": 3
}'

Hiring a book with a past hire date

curl -X POST http://localhost:5000/api/hirings \
-H "Content-Type: application/json" \
-d '{
  "UserID": 3,
  "BookID": 4,
  "HireDate": "2024-08-01",
  "ReturnDate": "2024-08-10"
}'

Hiring a book with future return date


curl -X POST http://localhost:5000/api/hirings \
-H "Content-Type: application/json" \
-d '{
  "UserID": 3,
  "BookID": 5,
  "HireDate": "2024-09-14",
  "ReturnDate": "2024-09-30"
}'


Advantages

Automatically detecting changes..
automatic sync of the database schema
Use of OR/M, definition of relationship (primary and foreign key) in the schema
Isolation, modularity of code
