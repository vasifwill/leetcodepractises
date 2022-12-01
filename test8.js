
let array = [2, 4, 6, 7, 10, 13, 17, 19, 21]
let target = 19
function binarySearch(array, target) {
let left = 0
let right = array.length-1

while(left < right) {
    let mid = Math.floor((left+right) /2) 
    if(target === array[mid]){
        return mid
    }else if (target < array[mid]) {
        right = mid-1
    }else {
        left = mid+1
    }
}

    
  return false
    
  }

  console.log(binarySearch(array, target))
// let str = "abcabcbb"
// const checkDup = (str) => {
//     let left = 0
//     let right = 0
//     let arr = new Map()
    
//     while (left < str.length) {
//         arr.set(str.charAt(right), (arr.get(str.charAt(right)) || 0) +1)

//         arr.forEach(value => {
//             if(value > 1){
//                 value = 1
//                 left++
//             }
//         })
//         right++
//         left++

//     }
//     return arr
    
    
    
// }

// console.log(checkDup(str))

// let array = [3, 4, 6, 2, 3, 645, 2,3, 6, 83, 23, 13]
// let arr = array.sort((a, b) =>  a-b)
// let value = 83
// function binarySearch (arr, value) {   
// let low = 0
// mid = 0
// let high = arr.length - 1

// while(low <= high) {
//     mid = Math.floor((high + low)/2)
//     if(arr[mid] == value){
//         return arr[mid]
//     }else if (value > arr[mid]) {
//         low = mid+1
//     }else{
//         high = mid-1
//     }
    


// }
// return -1
// }

// console.log(binarySearch(arr, value))



