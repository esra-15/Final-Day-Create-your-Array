// Create a empty array to store the names here 
let names =[];

// create a function that can add names to the array and print it in the list here 

function addName(){

let name = document.getElementById("name").value;
names.push(name);

allNames();
console.log(names);
}

// create a function that can remove the last name from the array and print it in the list here 

function removeName(){
    
names.pop();

allNames();
console.log(names);
}

function allNames() {
const namesList = document.getElementById("namesList");
 namesList.innerHTML = "";

names.forEach(function(name) {
const li = document.createElement("li");
li.textContent = name;
namesList.appendChild(li);
    });
  }

  function removeLastElement() {
    const parent = document.getElementById("namesList");
    if (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}



