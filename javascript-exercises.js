// Days till Christmas

// const today = new Date();
// let xmas = new Date(today.getFullYear(), 11, 25);
// if (today.getMonth() == 11 && today.getDate() > 25) {
//     xmas.setFullYear(today.getFullYear + 1)
// }
// const oneDay = 1000 * 60 * 60 * 24
// console.log(Math.ceil((xmas.getTime() - today.getTime()) / oneDay) + ` days until Christmas!`)



function multiplyBy() {
    num1 = document.getElementById("firstNumber").value
    num2 = document.getElementById("secondNumber").value
    document.getElementById("result").innerHTML = num1 * num2
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value
    num2 = document.getElementById("secondNumber").value
    document.getElementById("result").innerHTML = num1 / num2
}