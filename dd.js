// Data Recording Section
const dataForm = document.getElementById('dataForm');
const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

let dataRecords = [];

function addData() {
    const formData = new FormData(dataForm);
    const record = {};
    formData.forEach((value, key) => record[key] = value);
    dataRecords.push(record);
    displayData();
}

function displayData() {
    dataTable.innerHTML = '';
    dataRecords.forEach((record, index) => {
        const row = dataTable.insertRow();
        Object.values(record).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
        const actionsCell = row.insertCell();
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            dataRecords.splice(index,
