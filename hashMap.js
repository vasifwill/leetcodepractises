//var arry = [1, 2, 1, 3, 4, 3, 5]
let words = "These days I am studying"


var hashMap =  (words) => {
    
    var arr = words.replace(/\s/g,"")
    let arr1 = arr.split('')
    console.log(arr1)
   
    var mapAllRepition = new Map();

// then, loop for i = 0 to stringArr.length do
// you can access array element using i
for (let i = 0; i < arr1.length; i++) {                
   mapAllRepition.set(arr[i], (mapAllRepition.get(arr[i]) || 0) + 1);   
    
   
}
console.log(mapAllRepition)



//let newArr = mapAllRepition.values()
mapAllRepition.forEach((value, key) => { 
    if(value < 2) {
       mapAllRepition.delete(key)
       return Array.from(mapAllRepition.keys())
    }
})
    




return mapAllRepition

}

console.log(hashMap(words))
