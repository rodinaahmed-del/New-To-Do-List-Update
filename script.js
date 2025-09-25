let btnSave = document.getElementById("btnSave")
let ul = document.querySelector(".listOfTasks")


function saveTask() {
    let inputTask = document.getElementById("inputTask")
    let inputTaskValue = inputTask.value
    if (inputTaskValue === "") {
        alert("Please Enter A Task")
    }
    else {
        let li = document.createElement("li")
        let img = document.createElement("img")
        let span = document.createElement("span")
        let p = document.createElement("p")
        // img.src = "http://127.0.0.1:5500/images/dry-clean.png"
        img.src = "https://img.icons8.com/ios/50/circled.png"
        p.innerHTML = inputTaskValue
        span.innerHTML = '&times;'
        ul.appendChild(li)
        li.appendChild(img)
        li.appendChild(p)
        li.appendChild(span)
    }
    inputTask.value = ""
    saveDate()
}

btnSave.addEventListener("click", saveTask)

inputTask.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        saveTask()
        saveDate()
    }
})

ul.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG") {
        let srcImg = e.target.src
        // console.log(srcImg)
        if(srcImg === "https://img.icons8.com/ios/50/circled.png") {
            e.target.src = "https://img.icons8.com/windows/32/ok.png"
            saveDate()
        }
        else  if(srcImg === "https://img.icons8.com/windows/32/ok.png"){
            e.target.src = "https://img.icons8.com/ios/50/circled.png"
            saveDate()
        }
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveDate()
    }
    else if(e.target.tagName === "P") {
        let taskText = e.target.innerText
        inputTask.value = taskText
        e.target.parentElement.remove()
        saveDate()
    }
})

let h1 = document.getElementById("h1")
h1.addEventListener("click", function() {
    const newWindow = window.open("index2.html", "_blank");
})

// localStorage.clear()

function saveDate() {
    localStorage.setItem("tasks", ul.innerHTML)
}

function load() {
    ul.innerHTML = localStorage.getItem("tasks")
}

load()




