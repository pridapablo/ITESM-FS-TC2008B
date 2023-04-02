// Exercise 1 (Chat GPT3.5)
const mousePosition = document.getElementById("mousePosition");
document.addEventListener("mousemove", function (e) {
  mousePosition.innerHTML =
    "Posición del mouse: " + e.clientX + ", " + e.clientY;
});

// Exercise 1 (Copilot)
const mousePosition2 = document.querySelector("#mouse-position");
document.addEventListener("mousemove", (event) => {
  mousePosition2.innerHTML = `Posición del mouse: ${event.clientX}, ${event.clientY}`;
});

// Exercise 2 (Chat GPT3.5)
const form = document.getElementById("form1");
const firstName = document.getElementById("form-fname");
const lastName = document.getElementById("form-lname");
const formButton = document.getElementById("form1-submit");

formButton.addEventListener("click", function (e) {
  e.preventDefault();
  const fullName = document.createElement("p");
  fullName.textContent = firstName.value + " " + lastName.value;
  form.appendChild(fullName);
});

// Exercise 2 (Copilot)
const form1 = document.querySelector("#form2cp");
const submitButton1 = document.querySelector("#form-submitcp");
const firstName1 = document.querySelector("#form-fname1");
const lastName1 = document.querySelector("#form-lnamecp");
const fullName1 = document.querySelector("#form-fullnamecp");

submitButton1.addEventListener("click", (event) => {
  event.preventDefault();
  const fullName1 = document.createElement("p");
  fullName1.textContent = `${firstName1.value} ${lastName1.value}`;
  form1.appendChild(fullName1);
});

// Exercise 3 (Chat GPT3.5)
// Primer respuesta (incorrecta):
// document.getElementById("btn-insert-r").addEventListener("click", () => {
//   const table = document.getElementById("sampleTable");
//   const row = table.insertRow(-1);
//   const cell1 = row.insertCell(0);
//   const cell2 = row.insertCell(1);
//   cell1.innerHTML = "New row column 1";
//   cell2.innerHTML = "New row column 2";
// });

// Para resolverlo pedí una explicación de la solución a ChatGPT3.5
// why do rows add only 2 cells?
// y agregué table.rows[0].cells.length
// al loop para que agregue tantas celdas como se tengan columnnas:

document.getElementById("btn-insert-r").addEventListener("click", () => {
  const table = document.getElementById("sampleTable");
  const row = table.insertRow(-1);
  const colCount = table.rows[0].cells.length; // get the number of columns in the first row
  for (let i = 0; i < colCount; i++) {
    const cell = row.insertCell(i);
    cell.innerHTML = "New row column " + (i + 1); // set the content of the cell
  }
});

document.getElementById("btn-insert-c").addEventListener("click", () => {
  const table = document.getElementById("sampleTable");
  const rowCount = table.rows.length;
  for (let i = 0; i < rowCount; i++) {
    const cell = table.rows[i].insertCell(-1);
    cell.innerHTML = "New column";
  }
});

// Exercise 3 (Copilot)
const btnInsertRow1 = document.getElementById("btn-insert-rcp");
const btnInsertColumn1 = document.getElementById("btn-insert-ccp");
const table1 = document.getElementById("sampleTablecp");

// copilot tuvo el mismo problema que ChatGPT3.5

// btnInsertRow1.addEventListener("click", () => {
//   const newRow1 = table1.insertRow();
//   const newCell12 = newRow1.insertCell();
//   const newCell22 = newRow1.insertCell();
//   newCell12.innerHTML = "Row 3 column 1";
//   newCell22.innerHTML = "Row 3 column 2";
// });

// se soluciona igual que en el ejercicio anterior

btnInsertRow1.addEventListener("click", () => {
  const newRow1 = table1.insertRow();
  const colCount = table1.rows[0].cells.length; // get the number of columns in the first row
  for (let i = 0; i < colCount; i++) {
    const newCell1 = newRow1.insertCell(i);
    newCell1.innerHTML = "Row 3 column " + (i + 1); // set the content of the cell
  }
});

btnInsertColumn1.addEventListener("click", () => {
  const rows = table1.rows;
  for (let i = 0; i < rows.length; i++) {
    const newCell1 = rows[i].insertCell();
    newCell1.innerHTML = "Row " + (i + 1) + " column 3";
  }
});

// Exercise 4 (Chat GPT3.5)
const myTable = document.getElementById("myTable");
const rowIndex = document.getElementById("rowIndex");
const colIndex = document.getElementById("colIndex");
const newValue = document.getElementById("newValue");
const changeButton = document.getElementById("btn-change");

changeButton.addEventListener("click", function () {
  const row = parseInt(rowIndex.value);
  const col = parseInt(colIndex.value);
  if (
    row >= 1 &&
    row <= myTable.rows.length &&
    col >= 1 &&
    col <= myTable.rows[0].cells.length
  ) {
    myTable.rows[row - 1].cells[col - 1].innerHTML = newValue.value;
  }
});

// Exercise 4 (Copilot)
document.getElementById("btn-change7cp").addEventListener("click", function () {
  var rowIndex = document.getElementById("rowIndex7cp").value;
  var colIndex = document.getElementById("colIndex7cp").value;
  var newValue = document.getElementById("newValue7cp").value;
  var table = document.getElementById("myTable7cp");
  table.rows[rowIndex].cells[colIndex].innerHTML = newValue;
});

// Exercise 5 (Chat GPT3.5)
const colorSelect = document.getElementById("colorSelect");
const addColorButton = document.getElementById("btn-add-color");
const removeColorButton = document.getElementById("btn-rmv-color");

addColorButton.addEventListener("click", function () {
  const colorOptions = ["Blue", "Yellow", "Orange", "Purple"];
  const randomColor =
    colorOptions[Math.floor(Math.random() * colorOptions.length)];
  const newOption = document.createElement("option");
  newOption.textContent = randomColor;
  colorSelect.appendChild(newOption);
});

removeColorButton.addEventListener("click", function () {
  if (colorSelect.options.length > 0) {
    colorSelect.remove(colorSelect.selectedIndex);
  }
});

// Exercise 5 (Copilot)
// Copilot arrojó lo siguiente:
// document
//   .getElementById("btn-add-colorcp")
//   .addEventListener("click", function () {
//     var color = ["Red", "Green", "White", "Black"];
//     var randomColor = color[Math.floor(Math.random() * color.length)];
//     var select = document.getElementById("colorSelectcp");
//     var option = document.createElement("option");
//     option.text = randomColor;
//     select.add(option);
//   });

// document
//   .getElementById("btn-rmv-colorcp")
//   .addEventListener("click", function () {
//     var select = document.getElementById("colorSelectcp");
//     select.remove(select.selectedIndex);
//   });

// lo cual es incorrecto, ya que se está usando "var" en lugar de "const" o "let".
// Solución:

document
  .getElementById("btn-add-colorcp")
  .addEventListener("click", function () {
    const color = ["Red", "Green", "White", "Black"];
    const randomColor = color[Math.floor(Math.random() * color.length)];
    const select = document.getElementById("colorSelectcp");
    const option = document.createElement("option");
    option.text = randomColor;
    select.add(option);
  });

document
  .getElementById("btn-rmv-colorcp")
  .addEventListener("click", function () {
    const select = document.getElementById("colorSelectcp");
    select.remove(select.selectedIndex);
  });

// Exercise 6 (Chat GPT3.5)
const gatoImagen = document.getElementById("imagenGato");
gatoImagen.addEventListener("mouseenter", function () {
  const newWidth = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  const newHeight = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  gatoImagen.src = "http://placekitten.com/" + newWidth + "/" + newHeight;
});

// Exercise 6 (Copilot)

const imagenGatocp = document.getElementById("imagenGatocp");
imagenGatocp.addEventListener("mouseenter", () => {
  const width = Math.floor(Math.random() * 300) + 300;
  const height = Math.floor(Math.random() * 300) + 300;
  imagenGatocp.src = `http://placekitten.com/${width}/${height}`;
});
