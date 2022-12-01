var s = "MCMXCIV"


    var romanToInt = function(s) {
        
        const ob = 
            {"I":1,
            "V": 5,
            "X":10,
            "L":50,
            "C":100,
            "D":500,
            "M":1000}
        
            let romanArr = []
            for (let i = 0; i < s.length; i++) {
                romanArr.push(ob[s[i]]) 
            }

            var i = 1
            var result = 0
            var leng = romanArr.length

            while (i <= leng ){
                if(i == leng ){
                    result+=romanArr[i-1]
                    i++

                }
                else if (romanArr[i] < romanArr[i-1]){
                    result += romanArr[i-1]
                    
                    i++
                    

                }else if(romanArr[i] > romanArr[i-1]){
                 result+= romanArr[i] - romanArr[i-1]
                 i+=2
                 
                }else if(romanArr[i] = romanArr[i-1]){
                    result+=romanArr[i] + romanArr[i-1]
                    i+=2
                } else {
                    return false
                    
                }

            }


            return result
        
     
    };
    

console.log(romanToInt(s))