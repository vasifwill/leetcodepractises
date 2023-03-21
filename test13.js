let arr = [1, 1, 2, 10, 3, 1, 12]
function SumMultiplier(arr) { 

    let sum = arr.reduce((acc, item) => acc +item,0)
    let trueStr = "true"
    let falseStr = "false"
    let double = sum*2
    let arrLength = arr.length
    let i = 0
    let j = 1
    while(j < arrLength ){
      let multi = arr[i] * arr[j]
      if(double > multi) {
        j++
        if(j==arrLength){
          i++
          j=i+1
        }
      }else{
        return trueStr
      }
    }
    return falseStr
  
  }
  console.log(SumMultiplier(arr))