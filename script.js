// Selecting ul

let ul = document.getElementById("list-container")
let para = document.getElementById("para")
let taskbox = document.getElementById("taskbox")
function add() {
    if (taskbox.value === "") {
        para.textContent = "I Think You Forget To Write The Task"
    }
    else {
        para.textContent=""
        let listitem = document.createElement("li")
        listitem.innerHTML = taskbox.value + ' <button onclick="Deleteitem(event)">Delete</button>' +' <button onclick="complete(event)">Complete</button>'
        ul.append(listitem)
    }
    taskbox.value = ""
    savedata1();
   

}

function Deleteitem(event) {
    event.target.parentElement.remove()
    savedata1();
}
function complete(event) {
    event.target.parentElement.style.textDecoration = "line-through"
    savedata1();
}

function savedata1(){
    localStorage.setItem("data01",ul.innerHTML);
}
function showtask1(){
    ul.innerHTML = localStorage.getItem("data01")
}
showtask1();



