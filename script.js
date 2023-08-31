let container = document.createElement("div");
let tables = document.createElement("table");
let tHead = document.createElement("thead");
let tBody = document.createElement("tbody");
let tCaption = document.createElement("caption");
let insert = document.createElement("button");
let sort = document.createElement("button");
let divs = document.createElement("div");

tCaption.innerText = "Student Table";

tHead.innerHTML = "<tr><th>Name</th><th>Class</th><th>City</th></tr>";

container.setAttribute("id", "containers");

insert.setAttribute("id", "insert");
insert.innerText = "Insert";

sort.setAttribute("id", "sort");
sort.innerText = "Sort";

tables.append(tCaption, tHead, tBody);
container.append(tables);
divs.append(container, insert, sort);
document.body.appendChild(divs);

const dummyData = [
    { name: "John Doe", class: "Math 101", city: "New York" },
    { name: "Jane Smith", class: "History 201", city: "Los Angeles" },
    { name: "Michael Johnson", class: "English 301", city: "Chicago" },
    { name: "Emily Wilson", class: "Science 101", city: "Houston" },
    { name: "David Lee", class: "Art 202", city: "San Francisco" },
    { name: "Sarah Brown", class: "Music 101", city: "Miami" },
    { name: "James Davis", class: "Physical Education", city: "Boston" },
    { name: "Olivia Taylor", class: "Computer Science", city: "Seattle" },
    { name: "William Martin", class: "Business 301", city: "Dallas" },
    { name: "Ava Clark", class: "Psychology 101", city: "Phoenix" }
  ];

  dummyData.forEach(data => {
    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    let classCell = document.createElement("td");
    let cityCell = document.createElement("td");
  
    nameCell.innerText = data.name;
    classCell.innerText = data.class;
    cityCell.innerText = data.city;
  
    row.append(nameCell, classCell, cityCell);
    tBody.appendChild(row);
  });

insert.addEventListener("click", (e) => {
  e.preventDefault();
  let name = prompt("Enter name", "Deafult");
  let clas = prompt("Enter class", "Default");
  let city = prompt("Enter city", "Default");

  if (name && clas && city) {
    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    let classCell = document.createElement("td");
    let cityCell = document.createElement("td");

    nameCell.innerText = name;
    classCell.innerText = clas;
    cityCell.innerText = city;

    row.append(nameCell, classCell, cityCell);
    tBody.appendChild(row);
  }
});

sort.addEventListener("click", (e) => {
  e.preventDefault();
  let sortedRows = Array.from(tables.tBodies[0].rows).sort((row1, row2) =>
    row1.cells[0].innerText.localeCompare(row2.cells[0].innerText)
  );
  tables.tBodies[0].append(...sortedRows);
});
