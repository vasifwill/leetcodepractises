var strs = ["dog","racecar","car"]
var longestCommonPrefix = function(strs) {
    let prefix = ""
    let leng = strs.length

    if (!leng) {
        return prefix
    }

    if(leng <= 1){
        return strs[0]
    }


    let result = []

    let first = strs.shift()

    
    for (let i = 0; i < first.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if(strs[j].includes(first[i])){
                result.push(first[i])
            }
                
            }
            
        }


       

     const resul = result.filter((value, index) => {return result.indexOf(value) !== index;})
     return resul.join('')
    
        
        
    
}

console.log(longestCommonPrefix(strs))