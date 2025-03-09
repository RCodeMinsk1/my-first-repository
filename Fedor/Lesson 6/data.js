let arr = [];
// для хранения всех элементов
function updateArr(arrNew) {
  arr = arrNew;
}
// для обновления нашего массива
function updateLenghtArr() {
  let addTask = document.querySelector(".addTask");
  addTask.textContent = `Tasks: ${arr.lenght}`;
}

export { arr, updateArr, updateLenghtArr };
