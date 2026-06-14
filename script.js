const API = "http://localhost:5000";


// Register

function registerUser(){

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    fetch(`${API}/register`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            email,
            password
        })
    })
    .then(res=>res.text())
    .then(data=>{
        alert(data);
        window.location.href="login.html";
    })
    .catch(err=>console.log(err));
}


// Login

function loginUser(){

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    fetch(`${API}/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,
            password
        })
    })
    .then(res=>{

        if(!res.ok){
            throw new Error("Invalid Login");
        }

        return res.json();
    })
    .then(user=>{

        localStorage.setItem(
            "userId",
            user.id
        );

        window.location.href =
            "dashboard.html";
    })
    .catch(()=>{
        alert("Invalid Credentials");
    });
}



// Add Task

function addTask(){

    const title =
        document.getElementById("title").value;

    const description =
        document.getElementById("description").value;

    const due_date =
        document.getElementById("dueDate").value;

    const status =
        document.getElementById("status").value;

    const user_id =
        localStorage.getItem("userId");

    fetch(`${API}/tasks`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title,
            description,
            due_date,
            status,
            user_id
        })
    })
    .then(res=>res.text())
    .then(data=>{

        alert(data);

        loadTasks();
    });
}



// Load Tasks

function loadTasks(){

    const taskList =
        document.getElementById("taskList");

    if(!taskList) return;

    fetch(`${API}/tasks`)
    .then(res=>res.json())
    .then(tasks=>{

        taskList.innerHTML = "";

        tasks.forEach(task=>{

            taskList.innerHTML += `
            <div class="task">
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Status: ${task.status}</p>
                <p>Due: ${task.due_date}</p>

                <button onclick="deleteTask(${task.id})">
                    Delete
                </button>
            </div>
            `;
        });

    });
}



// Delete Task

function deleteTask(id){

    fetch(`${API}/tasks/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.text())
    .then(data=>{

        alert(data);

        loadTasks();
    });
}



window.onload = ()=>{
    loadTasks();
};
