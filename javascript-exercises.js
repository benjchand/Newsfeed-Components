// Days till Christmas

// const today = new Date();
// let xmas = new Date(today.getFullYear(), 11, 25);
// if (today.getMonth() == 11 && today.getDate() > 25) {
//     xmas.setFullYear(today.getFullYear + 1)
// }
// const oneDay = 1000 * 60 * 60 * 24
// console.log(Math.ceil((xmas.getTime() - today.getTime()) / oneDay) + ` days until Christmas!`)


// Input Form for Multiplication and Division

// function multiplyBy() {
//     num1 = document.getElementById("firstNumber").value
//     num2 = document.getElementById("secondNumber").value
//     document.getElementById("result").innerHTML = num1 * num2
// }

// function divideBy() {
//     num1 = document.getElementById("firstNumber").value
//     num2 = document.getElementById("secondNumber").value
//     document.getElementById("result").innerHTML = num1 / num2
// }


// Input Form for F to C and C to F

// function fToC() {
//     let fahren = document.getElementById('fahrenheit').value
//     document.getElementById('celsius').value = ((fahren - 32) * 5 / 9).toString()
// }

// function cToF() {
//     let celsius = document.getElementById("celsius").value
//     document.getElementById('fahrenheit').value = (((celsius * 9) / 5) + 32).toString()
// }

// function diffFrom13(num) {
//     let diff = num - 13;
//     if (diff > 0) {
//         return diff * 2
//     }
//     else {
//         return `Number is smaller than 13.  Difference is ` + diff * -1
//     }
// };

// console.log(diffFrom13(6))
// console.log(diffFrom13(14))
// console.log(diffFrom13(100))

// function sumOrTriple(num1, num2) {
//     if (num1 == num2) {
//         return num1 * 3
//     }
//     else {
//         return num1 + num2
//     }
// }
// console.log(sumOrTriple(-6, -7))
// console.log(sumOrTriple(9, 2))
// console.log(sumOrTriple(6, 6))

// function within200or400(num) {
//     return (Math.abs(100 - num) <= 20 || Math.abs(400 - num) <= 20)
// }
// console.log(within200or400(420))
// console.log(within200or400(400))
// console.log(within200or400(380))
// console.log(within200or400(379))

// function otherSideOfZero(num1, num2) {
//     return ((num1 > 0 && num2 < 0) || (num2 > 0 && num1 < 0))
// }

// function addPy(str) {
//     if (str == null || str == undefined || str.substring(0, 2) == 'py' || str.substring(0, 2) == 'Py') {
//         return str
//     }
//     else {
//         return 'Py' + str
//     }
// }
// console.log(addPy('Pypickles'))
// console.log(addPy('yickles'))
// console.log(addPy('pypickles'))
// console.log(addPy('chocolate'))

// function removeIndex(str, charLocation) {
//     let firstPart = str.substring(0, charLocation);
//     let secondPart = str.substring(charLocation + 1, str.length)
//     return firstPart + secondPart
// }

// console.log(removeIndex('chocolate', 3));
// console.log(removeIndex('chocolate', 6));
// console.log(removeIndex('chocolate', 0));

// function switchFirstAndLast(str) {
//     if (str.length <= 1) {
//         return str
//     }
//     let middlePart = str.substring(1, str.length - 1);
//     return (str.charAt(str.length - 1) + middlePart + str.charAt(0))
// }
// console.log(switchFirstAndLast('Pickles'))
// console.log(switchFirstAndLast('B'))
// console.log(switchFirstAndLast('AZ'))

// function multipleOf37(num) {
//     return (num % 3 == 0 || num % 7 == 0)
// }
// console.log(multipleOf37(2))
// console.log(multipleOf37(6))
// console.log(multipleOf37(7))
// console.log(multipleOf37(42))
// console.log(multipleOf37(1000))


// function scriptCheck(str) {
//     let resultStr = str;
//     if (str.length < 9) {
//         return str
//     }
//     if (str.substring(4, 10) == 'script') {
//         resultStr = str.substring(0, 4) + str.substring(10, str.length)
//     }
//     return resultStr
// }
// console.log(scriptCheck('javascript'))
// console.log(scriptCheck('javascriptend'))
// console.log(scriptCheck('javscript'))

// function largestInteger(num1, num2, num3) {
//     return Math.max(num1, num2, num3)
// }
// console.log(largestInteger(23, -8, 150))
// console.log(largestInteger(-99, -100, -150))
// console.log(largestInteger(0, 0, 0))

function checkForCharacter(str, char) {
    for (i = 1; i <= 3; i++) {
        if (str[i] == char) {
            return true
        }
    }
    return false
}

console.log(checkForCharacter('javascript', 'a'))
console.log(checkForCharacter('pickles', 'd'))
console.log(checkForCharacter('method', 'h'))