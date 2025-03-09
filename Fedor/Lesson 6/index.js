import { wait } from "./loading.js";
import { drawElem } from "./drawTask.js";
import { updateArr, arr, updateLenghtArr } from "./data.js";
window.addEventListener("load", () => {
  wait();
  let addTask = document.querySelector(".addTask");
  let add = document.getElementById("add");
  add.addEventListener("click", () => {
    let task_text = document.getElementById("task_text");
    let data = {
      text: task_text.value,
    };

    arr.push(data);
    updateArr(arr);
    updateLenghtArr();
    addTask.textContent = `Tasks: ${arr.length}`;
    drawElem(arr);
  });
});

export { arr };
