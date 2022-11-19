# Todo-API [![Template Project](https://img.shields.io/badge/API-node.js-red)](http://www.gnu.org/licenses/agpl-3.0) [![Template Project](https://img.shields.io/badge/Technologies%20-express%2Fnode%2Fmongoose-brightgreen)](http://www.gnu.org/licenses/agpl-3.0)

Greeting fellow coders i have created a REST API where you can accomplish the following tasks:-
         1. Create Todo
         2. Delete Todo
         3. Get All Todo By User
         4. Create Tasks inside Todo
         5. Delete Tasks inside Todo
         
## 🛠 Technologies Used
  - Node.js - Run Time engine for js
  - NPM - Node Package Manager
  - JS - Java Script
  - mongoose - (ODM) Object Data Modeling
  - MongoDB Atlas - Cloud Data Base (noSQL)
  
## 📂 Folder Structure (used MVC Arcitecture)
  1. Models - Contains DB Models
  2. Controllers - Contains code for all routes
  3. Config - Contains code to connect to DB
  4. index.js - Listens for sever
  5. package.json - contains all packages used
  
## Run Locally

Clone the project

```bash
  git clone https://github.com/Srinivasan-Akash/Todo-API.git
```

Go to the project directory

```bash
  cd Todo-API
```

Delete package-lock.json and node-modules later run  the following command to install all libraries
```bash
  npm install
```

Run The Application
```bash
  npm startDev
```

## ✍️ Author and 📞 Contact
- [Akash Srinivasan](https://www.github.com/octokatherine)
    - [Coder Community](https://web.codercommunity.io/user/62d568cb998d86c8883a2766?tab=posts)
    - [![facebook](https://img.shields.io/badge/Facebook-0A66C2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/profile.php?id=100083429257499)
    - [![instagram](https://img.shields.io/badge/Instagram-0A66C2?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/akash_prashanthi/)
    - [![youtube](https://img.shields.io/badge/YouTube-ff0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCAv1QdzDgV6MjA60CRtfkIg)

## 📝 Features

- Contains Comments
- Clean, readable and optimized Code
- Can Create/Read/Delete todo's
- Can Add/Read/Delete task's
- Can get All the todo's created by user
- Returns Data in the form of json
- Connected with DB (mongoDB atlas)

## 📃 Documentation

### Create a Todo
##### Route: `http://localhost:4000/create/createTodo`
##### Method: `POST`
##### INPUT: 
```
{
  "title": "Shopping",
  "tasks": "Buy a Puppy",
  "user": "Akash"
}
```
##### OUTPUT: 
```
{
    "_id": "63788cf33ecbc53bfe16d7f4",
    "title": "Shopping",
    "tasks": [
        "Buy Clothes"
    ],
    "user": "Akash",
    "createdAt": "2022-11-19T07:59:47.341Z",
    "updatedAt": "2022-11-19T07:59:47.341Z",
    "__v": 0
}
```

### Delete a Todo
##### Route: `http://localhost:4000/delete/deleteTodo`
##### Method: `DELETE`
##### INPUT: 
```
{
  "title": "Shopping",
  "user": "Akash"
}
```
##### OUTPUT: 
```
{
    "msg": "Sucessfully deleted"
}
```

### Get All Todo's by user
##### Route: `http://localhost:4000/getTodos/getAllTodosByUser`
##### Method: `GET`
##### INPUT: 
```
{
  "user": "Akash"
}
```
##### OUTPUT: 
```
{
    "results": [
        {
            "_id": "63789a945e15cb6d435435ee",
            "title": "Shopping",
            "tasks": [
                "Buys Ketchup",
                "Bring a puppy home"
            ],
            "user": "Akash",
            "createdAt": "2022-11-19T08:57:56.791Z",
            "updatedAt": "2022-11-19T08:57:56.791Z",
            "__v": 0
        }
    ]
}
```


### Add Tasks
##### Route: `http://localhost:4000/tasks/addTasks`
##### Method: `POST`
##### INPUT: 
```
{
  "user": "Akash",
  "title": "Shopping",
  "tasks": "Get Pet Food"
}
```
##### OUTPUT: 
```
{
    "_id": "63789a945e15cb6d435435ee",
    "title": "Shopping",
    "tasks": [
        "Buys Ketchup",
        "Bring a puppy home",
        "Get Pet Food"
    ],
    "user": "Akash",
    "createdAt": "2022-11-19T08:57:56.791Z",
    "updatedAt": "2022-11-19T08:57:56.791Z",
    "__v": 0
}
```

### Delete Tasks
##### Route: `http://localhost:4000/tasks/addTasks`
##### Method: `POST`
##### INPUT: 
```
{
  "user": "Akash",
  "title": "Shopping",
  "task": "Get Pet Food"
}
```
##### OUTPUT: 
```
{
    "_id": "63789a945e15cb6d435435ee",
    "title": "Shopping",
    "tasks": [
        "Buys Ketchup",
        "Bring a puppy home"
    ],
    "user": "Akash",
    "createdAt": "2022-11-19T08:57:56.791Z",
    "updatedAt": "2022-11-19T08:57:56.791Z",
    "__v": 0
}
```


## 😌 Honest Time to finish the project

I had took about 1hrs 3min. I faced a bug which took more than 20 min to solve and the bug was caused beacuse the ip adress i entered in the mongoDB atlas was incorrect later to solve it i entered the global ip address which is `0.0.0.0/0`
## 👀 Feedback
If you have any feedback, please reach out to us at qa.sixsigma@gmail.com
