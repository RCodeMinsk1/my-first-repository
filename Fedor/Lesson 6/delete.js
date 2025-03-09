import { arr, updateArr, updateLenghtArr } from "./data.js";
import { drawElem } from "./drawTask.js";

function deleteElem() {
  let btnDelete = document.getElementsByClassName("btnDelete");
  Array.from(btnDelete).forEach((element, index) => {
    element.addEventListener("click", () => {
      arr.splice(index, 1);
      updateArr(arr);
      updateLenghtArr();
      drawElem(arr);
    });
  });
  let leftArea = document.getElementById("tasks");
  let rightArea = document.getElementById("taskMain");
  let task_li = document.getElementsByClassName("task_li");
  for (const liTask of task_li) {
    liTask.addEventListener("dragstart", (e)=>{
      let targetElem = e.currentTarget;
      rightArea.addEventListener("dragover", (e)=>{
        e.preventDefault();
        console.log("dragover")
      });
      rightArea.addEventListener("drop", (e)=>{
        rightArea.appendChild(targetElem);
        targetElem = null;
      })
    });
  }
}
export { deleteElem };

function validateForm() { var name = document.getElementById('name').value; 
let namePattern = /^[A-Z][a-z]*$/; 
if (!namePattern.test(name)) { 
    alert("Please enter a valid name starting with a capital letter."); 
    return; } 
    alert("Validation successful!"); 
}

<label for="name">Name:</label> <input type="text" id="name" name="name" placeholder="Enter your name"><br> <button type="button" onclick="validateForm()">Submit</button>