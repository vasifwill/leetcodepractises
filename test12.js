// Indian mathematician D.R. Kaprekar observed a very interesting property of number 6174.
// If you take any four digit number (let's say 3281) and arrange its digits in descending order (8321) and ascending order (1238) and then subtract the smaller number from the larger number -- and if you repeat that process, you will reach number 6174.
// For example:
// 3281: 8321 - 1238 = 7083 8730 - 0378 = 8352 8532 - 2358 = 6174
// Number 6174 - when you do this process, will result into 6174 itself.
// Exception to this is a four digit number with all same digits (such as 1111, 2222, 3333 etc.), as that will result into 0 in the very first step.
// Your task is to write a function that finds out that for all four digit numbers (from 1000 to 9999), how many steps does it take to reach the magic number (6174). The function should also find out if it can't reach the number 6174 for whatever reason.

let number = 8321
let result = 0
let result1 = "no magic number"

const findMagicNumber = (number) => {
    const convertNumber = (number) => {
        return String(number).split("").map(item => Number(item))
    }

    const ascending =(array) => {
        let ascen = array.sort((a,b) => a-b).join("")
        return Number(ascen)
    }

    const descending = (array)=> {
        let descen = array.join("")
        return Number(descen)
    }

    let array = convertNumber(number)
    let subTrack = descending(array) - ascending(array)
    // console.log(descending(array), ascending(array) )
    // console.log(subTrack)
    // console.log(array)

    return subTrack

 

}

const findResult = (number) => {
    let numbers = findMagicNumber(number)
    while(numbers < number){
        result=result +1
        findMagicNumber(numbers)
    }
    return result

}


console.log(findResult(number))

