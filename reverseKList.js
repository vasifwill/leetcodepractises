var s = "abcdefh", k = 2

let reverseStr = function(s, k) {
    for(let i = 0; i < s.length; i+= k*2) {
      let subStr = s.slice(i, i + k);
      
      s = s.replace(subStr, subStr.split('').reverse().join(''))
    }
    return s;
};

console.log(reverseStr(s,k))

/*var reverseWords = function(s) {
    let arrStr = s.split(' ');
    let result = [];
    for (const item of arrStr) {
        result.push(item.split('').reverse().join(''))
    }

    return result.join(' ');

};

star wars = rats sraw

*/