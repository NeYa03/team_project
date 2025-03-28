function addTask() {
    let taskText = document.getElementById("taskInput").value;
    let taskTime = document.getElementById("timeInput").value;
    if (taskText === "" || taskTime === "") {
        alert("Будь ласка, введіть завдання і час!");
        return;
    }
    let li = document.createElement("li");
    li.className = "task";
    li.innerHTML = ${taskText} - ${taskTime} <button onclick="removeTask(this)">Видалити</button>;
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
    document.getElementById("timeInput").value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}