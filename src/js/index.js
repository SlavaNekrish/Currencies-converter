import getPayoutCurrencies from "./wsConnection.js";
let inputValue = document.querySelector("#enterValue");
console.log(inputValue);

const functionloader = () => {
  getPayoutCurrencies();
}

document.addEventListener("DOMContentLoaded", functionloader);


const set_base_currency = () => {
  
  console.log("Привет" + inputValue.value)
}

export default set_base_currency;

// //Chart 

// let ctx = document.querySelector('#myChart').getContext('2d');
// ctx.canvas.parentNode.style.height = "150px";
// ctx.canvas.parentNode.style.width = "300px";
// let myChart = new Chart (ctx, {
//   type: 'line',
//   data: {
//     labels: [1, 2, 3, 4, 5],
//     datasets: [{
//       label: 'Deriv',
//       data: [50, 40, 25, 30, 15],
//       backgroundColor: [
//         'white'
//       ],
//       borderColor: [
//         'green', 
//         'green', 
//         'green', 
//         'green', 
//         'green'],
//       borderWidth: 4,
//     }]
//   },
//   oprions: {
//     maintainAspectRatio: false,
//   },
// })