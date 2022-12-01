var x = 120
var reverse = function(x) {
    
    var numbers = []
    var arr = Math.abs(x).toString()
    for (let i = arr.length - 1; i >=0; i--) {
        numbers.push(arr[i])
    }
    var result = Number(numbers.join(''))

    if (x < 0 ) {
        result = result * -1
    }

    return result
  
}
  console.log(reverse(x))