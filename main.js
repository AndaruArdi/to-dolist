function addTask() {
    const taskInput = document.getElementById("task");
    const dateInput = document.getElementById("date");
    const priorityInput = document.getElementById("priority");
    const taskList = document.getElementById("task-list");
    
    const taskText = taskInput.value;
    const taskDate = dateInput.value;
    const taskPriority = priorityInput.value;

    if (taskText === "" || taskDate === "") {
        alert("Please fill the task and date.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.classList.add(taskPriority.toLowerCase());

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            moveToDone(listItem, checkbox, taskContent, deleteButton);
        }
    });

    const taskContent = document.createElement("span");
    taskContent.textContent = `${taskText} - ${taskDate} (${taskPriority})`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    taskList.appendChild(listItem);
    listItem.appendChild(checkbox);
    listItem.appendChild(taskContent);
    listItem.appendChild(deleteButton);

    taskInput.value = "";
    dateInput.value = "";
}

function moveToDone(listItem, checkbox, taskContent, deleteButton) {
    const doneList = document.getElementById("done-list");
    taskContent.style.textDecoration = "line-through";
    checkbox.disabled = true;
    doneList.appendChild(listItem);
}

function clearAllTasks() {
    document.getElementById("task-list").innerHTML = "";
    document.getElementById("done-list").innerHTML = "";
}