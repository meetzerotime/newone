
let name = prompt("what is your surname", "last name")

let confirmation = confirm("are you sure?")

function showAlert() {

    alert("submitted successfully")
}


let a = 10
let b = 20
a = 5;
console.log(a);


let myArray = [1, 2, 3, 4, 5];

delete myArray[3]



if (myArray.includes(3)) {
    console.log('Element found!');
} else {
    console.log('Element not found!');
}
myArray.fill(5);
console.log(myArray)

function findMostFrequentItem(arr) {
    const frequencyMap = {};

    arr.forEach(item => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });

    let mostFrequentItem;
    let maxFrequency = 0;

    for (const item in frequencyMap) {
        if (frequencyMap[item] > maxFrequency) {
            mostFrequentItem = item;
            maxFrequency = frequencyMap[item];
        }
    }

    return mostFrequentItem;
}

const myArray2 = [1, 2, 3, 4, 2, 2, 3, 4, 4, 4, 5];
const mostFrequent = findMostFrequentItem(myArray2);

console.log('Most frequent item:', mostFrequent);



let last = 1;

for (let i = 1; i <= 10; i++) {
    let result = last * (i + 1)
    console.log(result)
    last = result
}

let og = prompt('enter the value')
function reverseString(str) {
    return str.split("").reverse().join("");
}

let result = reverseString(`${og}`)
console.log(result)

if (og === result) {
    console.log(true)
}
else {
    console.log(false)
}



let n = prompt('enter the number')
let sum = 0;
function isArmstrong(number) {
    const digits = number.toString().split('');
    const order = number.length;
    digits.forEach(element => {
        let z = Math.pow(element, number.length)
        sum = sum + z
        console.log(sum)
    });
    return sum
}
let result = isArmstrong(`${n}`)
console.log(result)

if (Number(n) === result) {
    console.log(true)
}
else {
    console.log(false)
}




let n = prompt('enter the number')
for (i = 1; i <= n; i++) {
    let str = ' *'
    console.log(str.repeat(i))

}

let n2 = 5;
// External loop
for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(' ')
    }
    // printing stars
    for (let k = 0; k < 2 * i - 1; k++) {
        process.stdout.write('*')
    }
    console.log(k);
}


function printStarPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let rowString = '';
        for (let j = 1; j <= rows - i; j++) {
            rowString += ' ';
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            rowString += '*';
        }
        console.log(rowString);
    }
}
const numberOfRows = prompt('enter number');
printStarPyramid(numberOfRows);


function isLeapYear(year) {
    if (year % 4 === 0) {
        return true
    } else {
        return false;
    }
}
const yearToCheck = prompt('enter year');
const result = isLeapYear(yearToCheck);

if (result) {
    console.log(`${yearToCheck} is a leap year.`);
} else {
    console.log(`${yearToCheck} is not a leap year.`);
}


function numberwords(number) {
    let singlenumbers = ["zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    if (number === 0) {
        return singlenumbers[0];
    }
    let digitArray = Array.from(String(number), Number);
    let wordArray = digitArray.map(digit => singlenumbers[digit]);
    return wordArray.join(', ');

}
let userInput = prompt("Enter number:");
let userNumber = parseInt(userInput);

if (!isNaN(userNumber)) {
    console.log(`${numberwords(userNumber)}`);
}

document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskTable = document.getElementById('taskTable');
    const tbody = taskTable.querySelector('tbody');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const task = document.getElementById('task').value;
        const taskFor = document.getElementById('taskfor').value;
        const date = document.getElementById('date').value;
        const description = document.getElementById('Description').value;

        const editingRow = taskForm.getAttribute('data-edit-row');
        if (editingRow !== null) {

            const row = tbody.rows[editingRow];
            row.cells[0].textContent = name;
            row.cells[1].textContent = task;
            row.cells[2].textContent = taskFor;
            row.cells[3].textContent = date;

            const hiddenInput = row.querySelector('.hidden-description');
            hiddenInput.value = description;

            taskForm.reset();
            taskForm.removeAttribute('data-edit-row');
        } else {

            const newRow = tbody.insertRow();
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${task}</td>
                <td>${taskFor}</td>
                <td>${date}</td>
                <td>
                    <input type="hidden" class="hidden-description" value="${description}">
                    <button onclick="editTask(this)">Edit</button>
                    <button onclick="deleteTask(this)">Delete</button>
                </td>
            `;

            taskForm.reset();
        }

        taskTable.classList.remove('hidden');
    });
});

function editTask(button) {
    const row = button.closest('tr');
    const cells = row.cells;


    document.getElementById('name').value = cells[0].textContent;
    document.getElementById('task').value = cells[1].textContent;
    document.getElementById('taskfor').value = cells[2].textContent;
    document.getElementById('date').value = cells[3].textContent;

    const taskForm = document.getElementById('taskForm');
    taskForm.setAttribute('data-edit-row', row.rowIndex);

    const hiddenInput = row.querySelector('.hidden-description');
    document.getElementById('Description').value = hiddenInput.value;
}


function deleteTask(button) {
    const row = button.closest('tr');
    const rowIndex = row.rowIndex;

    row.remove();

    const taskTable = document.getElementById('taskTable');
    if (taskTable.querySelector('tbody').rows.length === 0) {
        taskTable.classList.add('hidden');
    }
    const taskForm = document.getElementById('taskForm');
    const editingRow = taskForm.getAttribute('data-edit-row');
    if (editingRow && editingRow == rowIndex) {
        taskForm.reset();
        taskForm.removeAttribute('data-edit-row');
    }
}
