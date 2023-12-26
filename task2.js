function validateForm() {
    let name = document.getElementById("name").value;
    let task = document.getElementById("task").value;
    let taskfor = document.getElementById("taskfor").value;
    let date = document.getElementById("date").value;
    let TaskDescription = document.getElementById("Description").value;

    if (name.trim() === "" || task.trim() === "" || taskfor.trim() === "" || date.trim() === "" || TaskDescription.trim() === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}

function showData() {
    let dataList;
    if (localStorage.getItem("datalist") == null) {
        dataList = [];
    } else {
        dataList = JSON.parse(localStorage.getItem("datalist"));
    }

    let tableBody = document.getElementById("taskTableBody");
    tableBody.innerHTML = ""; // Clear existing data

    dataList.forEach(function (element, index) {
        let row = tableBody.insertRow();

        row.insertCell(0).innerHTML = element.name;
        row.insertCell(1).innerHTML = element.task;
        row.insertCell(2).innerHTML = element.taskfor;
        row.insertCell(3).innerHTML = element.date;

        let actionsCell = row.insertCell(4);

        // Add Edit and Delete buttons to each row
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "btn btn-success";
        editButton.onclick = function () {
            editData(index);
        };

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "btn btn-danger";
        deleteButton.onclick = function () {
            deleteData(index);
        };

        actionsCell.appendChild(editButton);
        actionsCell.appendChild(deleteButton);
    });
}

function AddData() {
    if (validateForm()) {
        let name = document.getElementById("name").value;
        let task = document.getElementById("task").value;
        let taskfor = document.getElementById("taskfor").value;
        let date = document.getElementById("date").value;
        let TaskDescription = document.getElementById("Description").value;

        let dataList;
        if (localStorage.getItem("datalist") == null) {
            dataList = [];
        } else {
            dataList = JSON.parse(localStorage.getItem("datalist"));
        }
        dataList.push({
            name: name,
            task: task,
            taskfor: taskfor,
            date: date,
            TaskDescription: TaskDescription
        });
        localStorage.setItem("datalist", JSON.stringify(dataList));
        showData();

        // Clear input fields after adding data
        document.getElementById("name").value = "";
        document.getElementById("task").value = "";
        document.getElementById("taskfor").value = "";
        document.getElementById("date").value = "";
        document.getElementById("Description").value = "";
    }
}



function editData(index) {
    let dataList = JSON.parse(localStorage.getItem("datalist"));
    let element = dataList[index];

    // Fill the form fields with the data from the selected row
    document.getElementById("name").value = element.name;
    document.getElementById("task").value = element.task;
    document.getElementById("taskfor").value = element.taskfor;
    document.getElementById("date").value = element.date;
    document.getElementById("Description").value = element.TaskDescription;

    // Show the Update button and hide the Add Data button
    document.getElementById("submit").style.display = "none";
    document.getElementById("Update").style.display = "inline-block";

    // Store the index of the row being edited for later use in the updateData function
    document.getElementById("Update").dataset.index = index;
}


function deleteData(index) {
    let dataList = JSON.parse(localStorage.getItem("datalist"));

    // Remove the row from the table
    let table = document.getElementById("taskTable");
    table.deleteRow(index + 1); // +1 to account for the header row

    dataList.splice(index, 1);

    localStorage.setItem("datalist", JSON.stringify(dataList));
}


function updateData() {
    let index = document.getElementById("Update").dataset.index;
    let dataList = JSON.parse(localStorage.getItem("datalist"));

    // Update the data in the list
    dataList[index].name = document.getElementById("name").value;
    dataList[index].task = document.getElementById("task").value;
    dataList[index].taskfor = document.getElementById("taskfor").value;
    dataList[index].date = document.getElementById("date").value;
    dataList[index].TaskDescription = document.getElementById("Description").value;

    // Save the updated list to local storage
    localStorage.setItem("datalist", JSON.stringify(dataList));

    // Clear the form fields and show the Add Data button
    clearForm();
    showData();
}

function clearForm() {
    //TO Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("task").value = "";
    document.getElementById("taskfor").value = "";
    document.getElementById("date").value = "";
    document.getElementById("Description").value = "";

    //TO Hide the Update button and show the Add Data button
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("Update").style.display = "none";
}

// Initialize table on page load
showData();
