let arr = [2,4,5,5,5,5,5,7,9,9]
let target = 5

// [2,4,5,5,5,5,5,7,9,9]
//    0,1,2,3 4,5,6,7,8,9
 

function findTarget (arr, target) {

    let left = 0
    let right = arr.length-1
    let result = []

    while(left < right) {
        if(arr[left] !== target) {
           left++
            
        }else{
            return result.push(left)

          
        }
    }
    

   

}

console.log(findTarget(arr, target))