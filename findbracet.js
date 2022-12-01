function solution(s) {
    var valid = true
    var tString = []
    
   
    
   
    
    for (var i = 0; i< s.length; i++) {
        if(s[i] == "(" || s[i] == "{" || s[i]=="["){
            tString.push(sequence[i])
        } else if(s[i] == ")" && tString.length != 0 && tString[tString.length - 1] == "(") {
                tString.pop()
            } else if (s[i] == "}" && tString.length != 0&& tString[tString.length - 1] == "{") {
                tString.pop()
            } else if (s[i] == "]" && tString.length != 0 && tString[tString.length - 1] == "["){
                tString.pop()
            } else {
                return valid = false
            }
        
    }
    
    return tString.length === 0
    

}

var a = "abc"
var b = "abccba"


function solution(a, b) {
    var count = 0;
    var init = true
    var tempo
    b = b.split("")
    while(init) {
        for (var i = 0; i < a.length; i++) {
            tempo = b.indexOf(a[i])
            if(tempo >= 0) {
                b.splice(tempo, 1)
                
            } else {
                init = false
                break
            }
        }
        if(init) {
            count++
        }
    }
    return count

}
console.log(solution(a,b))

//Input:
a: "abc"
b: "abccba"
Output:
2

function solution(p) {
    for (var i = 0; i< p.length; i++) {
    var x = p[0]
    var y = p[1]
    var p = p[2]
    }
    
    let mind = 0
    for (var i = 0; i< p.length; i++) {
        let a = p[i][0]
        let b = p[i][1]
        mind += Math.sqrt((x-a) *(x-a) + (y -b) * (y-b))
    }
    return mind
    

}
//