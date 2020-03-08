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

// function checkForCharacter(str, char) {
//     for (i = 1; i <= 3; i++) {
//         if (str[i] == char) {
//             return true
//         }
//     }
//     return false
// }

// console.log(checkForCharacter('javascript', 'a'))
// console.log(checkForCharacter('pickles', 'd'))
// console.log(checkForCharacter('method', 'h'))

// function lastDigit(num1, num2, num3) {
//     if (num1 > 0 && num2 > 0 && num3 > 0) {
//         return ((num1 % 10 == num2 % 10) && (num2 % 10 == num3 % 10))
//     }
//     return false
// }

// console.log(lastDigit(6, 56, 984912846))
// console.log(lastDigit(7, 57, 16))
// console.log(lastDigit(-19, 19, 39))

// function toLower(str) {
//     if (str.length < 3) {
//         return str.toUpperCase()
//     }
//     return str.substring(0, 3).toLowerCase() + str.substring(3, str.length)
// }
// console.log(toLower('Python'))
// console.log(toLower('PYTHON'))
// console.log(toLower('AbC'))
// console.log(toLower('aBc'))

// function lookingFor8(num1, num2) {
//     return (num1 == 8 || num2 == 8 || num1 + num2 == 8 || Math.abs(num1 - num2) == 8)
// }
// console.log(lookingFor8(4, 4))
// console.log(lookingFor8(8, 9))
// console.log(lookingFor8(32, 40))
// console.log(lookingFor8(100, 40))

// function softOrStrict(x, y, z) {
//     if (x < y && y < z) {
//         return `Strict Mode`
//     }
//     else if (x < z) {
//         return `Soft Mode`
//     }
//     return `Not Increasing`
// }
// console.log(softOrStrict(33, 2, 34))
// console.log(softOrStrict(1, 2, 3))
// console.log(softOrStrict(33, 900, 33))

// function reverseString(str) {
//     return str.split('').reverse().join('')
// }

// console.log(reverseString('pickles'))
// console.log(reverseString('abcdefg'))
// console.log(reverseString('RACecar'))

// function letterShift(str) {
//     let s = str.split('');
//     for (i = 0; i < s.length; i++) {
//         switch (s[i]) {
//             case ' ':
//                 break;
//             case 'z':
//                 s[i] = 'a';
//                 break;
//             case 'Z':
//                 s[i] = 'A';
//                 break;
//             case '9':
//                 s[i] = '0';
//                 break;
//             default:
//                 s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
//         }
//     }
//     return s.join('')
// }
// console.log(letterShift('Chocolate'))
// console.log(letterShift('Ice Cream'))
// console.log(letterShift('3 Blind Pickled Beans 2 Zap Among'))
// console.log(letterShift('13579'))

// function capitalizeWord(str) {
//     if (str.length == 0) {
//         return 'NONE'
//     }
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substring(1)
//     }
//     return words.join(' ')
// }

// console.log(capitalizeWord('This is a sentence of words'))
// console.log(capitalizeWord('this Sentence has 5 words'))
// console.log(capitalizeWord('39234'))
// console.log(capitalizeWord(''))


// function hoursToMin(num) {
//     return parseFloat((num * 60).toFixed(3))
// }

// console.log(hoursToMin(3))
// console.log(hoursToMin(.1111111111))
// console.log(hoursToMin(9))

// function sortLetters(str) {
//     return str.split('').sort().join('')
// }
// console.log(sortLetters('absjdhren'))
// console.log(sortLetters('Pickles'))
// console.log(sortLetters('zZmMaA'))

// function searchForAandB(str) {
//     return (/a...b/i).test(str) || (/b...a/i).test(str)
// }

// console.log(searchForAandB('aaaab'))
// console.log(searchForAandB('AaaB'))
// console.log(searchForAandB('AaaaB'))
// console.log(searchForAandB('asdfasfdAaaaB'))

// function vowelCount(str) {
//     return str.replace(/[^aeoiu]/g, '').length;
// }

// console.log(vowelCount('pickles'))
// console.log(vowelCount('Ice Cream'))
// console.log(vowelCount('aaeeiiou'))

// function psAndts(str) {

//     return (str.replace(/[^p]/gi, '').length == str.replace(/[^t]/gi, '').length)
// }

// console.log(psAndts('TPdentP'))
// console.log(psAndts('tpPpTtptPt'))
// console.log(psAndts('tpPpTtptP'))
// console.log(psAndts('pptt'))


// function divisionCommas(num1, num2) {
//     let result = Math.round(num1 / num2).toString()
//     if (result < 1000) {
//         return result
//     }
//     let resultArray = result.split('')
//     for (let i = resultArray.length - 3; i > 0; i -= 3) {
//         resultArray.splice(i, 0, ',')
//     }
//     let resultNumber = resultArray.join('')
//     return resultNumber
// }

// console.log(divisionCommas(100, 6))
// console.log(divisionCommas(100023482934892343, 3))


// function repeatString(str, n) {
//     return str.repeat(n)
// }
// function repeatString(str, n) {
//     let result = ''
//     for (i = 0; i < n; i++) {
//         result += str
//     }
//     return result
// }

// console.log(repeatString('abc', 3))


// function halfOfEven(str) {
//     if (str.length % 2 == 0) {
//         return str.substring(0, str.length / 2)
//     }
//     return 'The string is not even-numbered.'
// }

// console.log(halfOfEven('abcdef'))
// console.log(halfOfEven('abcde'))

// function sumHelper(total, num) {
//     return total + num
// }
// function sumArray(arr) {
//     return arr.reduce(sumHelper)
// }

// console.log(sumArray([99, -98, 4]))

// function longest_string(arr) {
//     let max = arr[0].length;
//     arr.map(element => max = Math.max(max, element.toString().length))
//     result = arr.filter(element => element.toString().length == max)
//     return result
// }

// console.log(longest_string(['aaa', 'aaaaaaaa', 'aaaaaaa', 'a', 'bbbbbbbb', 'cccccccc']))
// console.log(longest_string(['aaa', 'aaaaaaaa', 'aaaaaaa', 'a', 'bbbbbbbb', 'cccccccc', 111111111]))


// function shiftCharacter(str) {
//     let split = str.split('')
//     for (i = 0; i < split.length; i++) {
//         let uppercase = 'A'
//         if (/[^a-zA-Z]/.test(split[i])) {
//             continue
//         }
//         let numberConversion = str[i].charCodeAt()
//         if (numberConversion > 90) {
//             uppercase = 'a'
//         }
//         let n = numberConversion - uppercase.charCodeAt()
//         n = (n + 1) % 26
//         split[i] = String.fromCharCode(n + uppercase.charCodeAt())
//     }
//     return split.join('')
// }

// console.log(shiftCharacter('Pickles'))
// console.log(shiftCharacter('A zany Zebra'))
// console.log(shiftCharacter(`3 Chocolate's bunny(ies) [in brackets]`))


// function similarArrays(arr1, arr2) {
//     if (arr1.length != arr2.length) {
//         return false
//     }
//     let diffCount = 0
//     let arr1Diff = ''
//     let arr2Diff = ''
//     for (i = 0; i < arr1.length; i++) {
//         if (arr1[i] != arr2[i]) {
//             if (diffCount == 2) {
//                 return false
//             }
//             if (diffCount == 0) {
//                 diffCount += 1
//                 arr1Diff = arr1[i]
//                 arr2Diff = arr2[i]
//             }
//             else {
//                 if (arr1[i] != arr2Diff && arr2[i] != arr1Diff) {
//                     return false
//                 }
//                 diffCount += 1
//             }
//         }
//     }
//     if (diffCount % 2 == 1 || diffCount > 2) {
//         return false
//     }
//     return true
// }

// console.log(similarArrays([10, 20, 30, 40, 50], [10, 20, 30, 40, 50]) + `  Should be True`)
// console.log(similarArrays([30, 20, 10, 40, 50], [10, 20, 30, 40, 50]) + `  Should be True`)
// console.log(similarArrays([30, 20, 10, 40, 50], [10, 20, 40, 30, 50]) + `  Should be False`)
// console.log(similarArrays([10, 20, 10, 40, 50], [10, 20, 30, 40, 50]) + `  Should be False`)
// console.log(similarArrays([10, 20, 30, 40, 50], [10, 20, 30, 40]) + `  Should be False`)

// function arithmeticExpression(x, y, z) {
//     return x + y == z || x - y == z || x * y == z || x / y == z
// }

// console.log(arithmeticExpression(10, 25, 35))
// console.log(arithmeticExpression(10, 25, 250))
// console.log(arithmeticExpression(30, 25, 5))
// console.log(arithmeticExpression(100, 25, 4.0))
// console.log(arithmeticExpression(100, 25, 25))


// function kthGreatest(arr, k) {
//     let sortedArr = arr.sort((a, b) => { return a - b })
//     console.log(sortedArr)
//     return sortedArr[sortedArr.length - k]
// }

// console.log(kthGreatest([10, 1, 20, 3, 30, 0], 2))

// function digitToOne(num) {
//     let times = 0
//     function digitsum(num) {
//         let digitSum = 0
//         while (num) {
//             console.log(num)
//             digitSum += num % 10
//             console.log(digitSum + "   This is the digitSum")
//             num = Math.floor(num / 10)
//             console.log(num + "   This is the num")

//         }
//         return digitSum
//     }
//     while (num >= 10) {
//         times += 1
//         num = digitsum(num)
//     }
//     return times
// }

// console.log(`The Number of times is:  ` + digitToOne(12345))

function uppercase(str) {
    const upperRegex = /^[A-Z]/
    if (upperRegex.test(str)) {
        console.log('First letter is uppercase')
    }
    else {
        console.log(`LOWERCASE!!!!!!`)
    }
}

uppercase('abcd')
uppercase('Abcd')