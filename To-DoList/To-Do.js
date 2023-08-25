const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list');
const Btn = document.getElementById('clickBtn');
Btn.addEventListener('click', addTask)
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click',cheCked,false);
function cheCked(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
}
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function displayData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displayData();