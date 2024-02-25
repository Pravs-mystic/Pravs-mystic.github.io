---
title: 7 Everyday Docker Hacks - Making Life a Byte Easier!
description: This is a post on Curious Cappuccino Blog about everyday docker hacks.
date: 2023-10-16
tags:
  - docker, docker hacks, docker container, containerization, what is docker, docker explained, docker simplified
cover: /img/dockerart.png
---

```
This is code
```

🚢 Today, we’re diving deep into the ocean of Docker, exploring some everyday hacks that can make our developer lives a smidge easier. But fear not, we won’t be swimming with the technical sharks today, we’re keeping it light, floaty, and fun!

So what is docker? Docker, in the simplest terms, is a platform designed to make it easier for developers to create, deploy, and run applications by using containers. Imagine a container as a box (not the boring, square kind, but a cool, virtual one! 📦). This box holds everything needed to run an application - the code, runtime, libraries, and system tools. Essentially, Docker ensures that the app will run the same, regardless of where the container is deployed.

For those who do not understand the technicalities, let me help you understand it better with a Food Truck Festival Analogy 🚚🍔


## Relating Food Truck to Docker Container

*Picture this:*
You’re at a bustling food truck festival, where each food truck offers a unique culinary delight, operating independently of the others. Each truck comes equipped with its own ingredients, chefs, utilities, and recipes, ensuring it can whip up its specialties without relying on external resources.

Now, let’s relate this to Docker:

![Diagram illustrating Docker and food trucks analogy](/img/docker_foodtruck.png "Diagram illustrating Docker and food trucks analogy")

*Food Trucks = Docker Containers*: Just like how each food truck is self-sufficient, Docker containers encapsulate all the necessary ingredients (code, runtime, libraries) required to run an application.

*Festival Ground = Your Computer*: The festival ground that hosts all the food trucks is akin to your computer providing a platform for Docker containers.

*Diverse Cuisines = Different Applications*: The variety of dishes offered by the trucks symbolizes different applications in Docker, each with its unique prerequisites and environments, yet coexisting harmoniously.

Both provide a platform where independent entities (be it food trucks or applications) can operate smoothly without interfering with each other, despite having varied requirements and environments.

Let's explore how Docker simplifies the execution of complex tasks that would otherwise require extensive setup.

## 7 Docker Hacks for Your Daily Tech Life

### 1. Run Temporary Databases for Testing

#### Steps:
1. **Open Terminal**: Open your terminal or command prompt.
2. **Run MySQL Container**: Execute the following command.
    ```bash
    docker run --name temp-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 -d mysql:latest 
    ```
    Your container for mysql is created. Now, you can connect to the MySQL server by executing a bash shell inside the container and then using the MySQL client from there:

    ```bash
    docker exec -it temp-mysql bash 
    ```

💡 After running the command, you can connect to MySQL using the root password `my-secret-pw`.

---

### 2. Quick Web Server for File Sharing

#### Steps:
1. **Open Terminal**: Open your terminal or command prompt and go to the directory where your website is located.For testing purpose, you can create a simple index.html file in your directory and serve it using the following command.
2. **Run Nginx Container**: Execute the following command.
    ```bash
    docker run -v $(pwd):/usr/share/nginx/html:ro -p 8080:80 nginx
    ```
This command starts a new container using the nginx image where `-v $(pwd):/usr/share/nginx/html:ro` mounts the current directory to the /usr/share/nginx/html directory inside the container, and it is mounted as read-only.
💡 Your current directory will be accessible at `http://localhost:8080`.

---

### 3. Run Multiple Versions of Software

#### Steps:
1. **Open Terminal**: Open your terminal or command prompt.
2. **Run Python Containers**: Execute the following commands.
    ```bash
    docker run -it python:2.7 python
    docker run -it python:3.8 python
    ```

💡 You'll have two separate Python shells, one for version 2.7 and another for 3.8.

---

### 4. Isolate Development Environments

#### Steps:
1. **Open Terminal**: Open your terminal or command prompt.
2. **Run Python Environment**: Execute the following command.
    ```bash
    docker run -it --name my_project_env python:3.8 bash
    ```

💡 You'll be inside a Python 3.8 environment isolated from your local system. This is particularly useful when you need to work with different versions of languages, libraries, or databases for different projects.

---





### 5. Test REST APIs

#### Steps:
1. **Open Terminal**: Open your terminal or command prompt.
2. **Run Postman**: Execute the following command.
    ```bash
    docker run -p 4545:4545 postman/newman_ubuntu1404 run "https://www.getpostman.com/collections/8a0c9bc08f062d12dcda"
    ```

💡 This will run a Postman collection and display the results.

---

### 6. Run Code Snippets

#### Steps:
1. **Open Terminal**: Open your terminal or command prompt.
2. **Run NodeJS Code**: Execute the following command.
    ```bash
    docker run -it --rm node node -e "console.log('Hello, World!')"
    ```

💡 This will display "Hello, World!" in the terminal.

---

### 7. Generate Passwords

#### Steps:
1. **Open Terminal**: Open your terminal or command prompt.
2. **Generate Password**: Execute the following command.
    ```bash
    docker run --rm frapsoft/openssl rand -base64 32
    ```

💡 This will generate a secure, random password.

But wait, the Docker journey doesn’t end here! Imagine creating your own custom environments, tinkering with different technologies, or even building and sharing your Docker images with a community of like-minded developers. The possibilities are as vast and endless as the ocean itself!

---

© 2023 by Curious Cappuccino blog.
