const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


// Register

app.post("/register",(req,res)=>{

    const {name,email,password} = req.body;

    db.query(
        "INSERT INTO users(name,email,password) VALUES(?,?,?)",
        [name,email,password],
        (err,result)=>{
            if(err){
                return res.status(500).send(err);
            }
            res.send("User Registered");
        }
    );
});


// Login

app.post("/login",(req,res)=>{

    const {email,password} = req.body;

    db.query(
        "SELECT * FROM users WHERE email=? AND password=?",
        [email,password],
        (err,result)=>{

            if(err){
                return res.status(500).send(err);
            }

            if(result.length > 0){
                res.json(result[0]);
            }
            else{
                res.status(401).send("Invalid Credentials");
            }
        }
    );
});


// Get Tasks

app.get("/tasks",(req,res)=>{

    db.query(
        "SELECT * FROM tasks",
        (err,result)=>{
            if(err){
                return res.status(500).send(err);
            }

            res.json(result);
        }
    );
});


// Add Task

app.post("/tasks",(req,res)=>{

    const {
        title,
        description,
        status,
        due_date,
        user_id
    } = req.body;

    db.query(
        "INSERT INTO tasks(title,description,status,due_date,user_id) VALUES(?,?,?,?,?)",
        [
            title,
            description,
            status,
            due_date,
            user_id
        ],
        (err,result)=>{

            if(err){
                return res.status(500).send(err);
            }

            res.send("Task Added");
        }
    );
});


// Delete Task

app.delete("/tasks/:id",(req,res)=>{

    db.query(
        "DELETE FROM tasks WHERE id=?",
        [req.params.id],
        (err,result)=>{

            if(err){
                return res.status(500).send(err);
            }

            res.send("Task Deleted");
        }
    );
});

app.listen(5000,()=>{
    console.log("Server Running On Port 5000");
});
