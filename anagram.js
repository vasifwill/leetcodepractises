let string1= "danger"
let string2 = "garden"

//----------

// function anagram(s1, s2){
//     return s1.split("").sort().join("") === s2.split("").sort().join("");
// }
//-----

function anagram (string1, string2) {

    let s1 = string1.split('').sort().join('')
    let s2 = string2.split('').sort().join('')
    console.log(s1)
    console.log(s2)
    
    let s1Agram = new Map()
    let s2Agram = new Map()

    for (let i = 0; i < s1.length; i++) {
        s1Agram.set(s1.charAt(i), (s1Agram.get(s1.charAt(i)) || 0)+1)
    }

    for (let j = 0; j <s2.length; j++) {
        s2Agram.set(s2.charAt(j), (s2Agram.get(s2.charAt(j)) || 0)+1)
        
    }
    

    console.log(s1Agram)
    console.log(s2Agram)


}
console.log(anagram(string1, string2))
// Words to match
// var words = ["dell", "ledl", "abc", "cba"];

// // The output object
// var anagrams = {};

// for (var i in words) {
//     var word = words[i];
//    console.log(word)

//     // sort the word like you've already described
//     var sorted = word.sort()

//     // If the key already exists, we just push
//     // the new word on the the array
//     if (anagrams[sorted] != null) {
//         anagrams[sorted].push(word);
//     } 
//     // Otherwise we create an array with the word
//     // and insert it into the object
//     else {
//         anagrams[sorted] = [ word ];
//     }
// }

// // Output result
// for (var sorted in anagrams) {
//     var words = anagrams[sorted];
//     var sep = ",";
//     var out = "";
//     for (var n in words) {
//         out += sep + words[n];
//         sep = "";
//     }
//     document.writeln(sorted + ": " + out + "<br />");
// }

// let obj = {}
// obj["key"] = "1"
// console.log(obj)
