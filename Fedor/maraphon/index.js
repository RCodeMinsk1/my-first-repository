// let button = document.getElementById("myButton");

// document.addEventListener("click", function() {
//     alert("click");
// });

// document.addEventListener("mousemove", function() {
//    // alert("mousemove");
// });

// function getRandomColor() { const letters = '0123456789ABCDEF'; let color = '#'; for (let i = 0; i < 6; i++) { color += letters[Math.floor(Math.random() * 16)]; } return color; }
// function getRandomSize() { return `${Math.floor(Math.random() * 50) + 10}px ${Math.floor(Math.random() * 100) + 20}px`; }
// let button = document.getElementById("myButton1");

// document.addEventListener('click', function() {
//     button.style.padding = getRandomSize(); button.style.backgroundColor = getRandomColor();
// });

// let increaseButton = document.getElementById('increaseButton');
// let decreaseButton = document.getElementById('decreaseButton');
// let counter = document.getElementById('counter');
// let count = 0;
// increaseButton.addEventListener('click', function() {
//     count++;
//     counter.textContent = count;
// });

// decreaseButton.addEventListener('click', function() {
//     count--;
//     counter.textContent = count;
// });

// function showAlert() {
//     let value1 = document.getElementById('input1').value; 
//     let value2 = document.getElementById('input2').value; 
//     let value3 = document.getElementById('input3').value; 
//     let value4 = document.getElementById('input4').value;
//     alert('Input Values:\n' + value1 + '\n' + value2 + '\n' + value3 + '\n' + value4);
// }

// let buttons = document.querySelectorAll('.selfDeleteButton');

// buttons.forEach(function(button) { 
// button.addEventListener('click', function() {    
//     button.parentNode.removeChild(button);
// });
// });

// function validateForm() { var name = document.getElementById('name').value; 
// let namePattern = /^[A-Z][a-z]*$/; 
// if (!namePattern.test(name)) { 
//     alert("Please enter a valid name starting with a capital letter."); 
//     return; } 
//     alert("Validation successful!"); 
// }