let string = 'noon'


function characterMode(string) {
  let sent = string.replace(/\s+/g, '')
  let arr = sent.toLowerCase().split('')
  let max = 0

 let duplicate = new Map()

 for (let i = 0; i < arr.length; i++) {
  duplicate.set(arr[i], (duplicate.get(arr[i]) || 0) +1 )
 }
 
 duplicate.forEach((item, key) => {
    max = Math.max(max, item)
    =
  
    if(item !== max) {
      duplicate.delete(key) 
   }})

 return Array.from(duplicate.keys()).join('')
  
}
console.log(characterMode(string))

