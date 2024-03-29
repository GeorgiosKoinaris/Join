function addToAllTasks() {
    let title = document.getElementById('add-task-title');
    let dueDate = document.getElementById('add-task-dueDate');
    let categoryA = document.getElementById("add-task-category");
    let category = categoryA.options[categoryA.selectedIndex].text;
    let urgencyA = document.getElementById("add-task-urgency");
    let urgency = urgencyA.options[urgencyA.selectedIndex].text;
    let description = document.getElementById('add-task-description');
    let profileA = document.getElementById('add-task-profile');
    let profile = profileA.options[profileA.selectedIndex].text;

    let tasks = {
        "title": title.value,
        "dueDate": dueDate.value,
        "board": "backlog",
        "category": category,
        "urgency": urgency,
        "description": description.value,
        "assignedTo": profile
    };

    data.push(tasks);
    saveAtBackend();
    deleteInputValue();
    postedAddTask();
}

function deleteInputValue() {
    document.getElementById('add-task-title').value = '';
    document.getElementById('add-task-dueDate').value = '';
    document.getElementById("add-task-category").selectedIndex = 0;
    document.getElementById("add-task-urgency").selectedIndex = 0;
    document.getElementById('add-task-description').value = '';
}

function postedAddTask() {
    document.getElementById('add-task-content').classList.add('none');
    document.getElementById('add-task-posted').classList.remove('none');
}

function openNewTaskWindow() {
    document.getElementById('add-task-content').classList.remove('none');
    document.getElementById('add-task-posted').classList.add('none');
}

function enableDateInput() {
    var dateInput = document.getElementById("add-task-dueDate");
    dateInput.addEventListener("keydown", handleDateInput);
    dateInput.focus();
}

function handleDateInput(event) {
    // Erlauben nur Zahlen und einige Steuerzeichen
    var allowedKeys = ["Backspace", "Tab", "ArrowLeft", "ArrowRight", "Delete", "Home", "End"];
    if (!allowedKeys.includes(event.key) && isNaN(parseInt(event.key))) {
        event.preventDefault();
    }
}

function checkDate() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementById("add-task-dueDate").setAttribute('min', today);
}