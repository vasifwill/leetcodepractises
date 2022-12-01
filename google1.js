var num = [1,2,0,0]
var k = 34


var addToArrayForm = function(num, k) {
var sumss = `${BigInt(num.join('')) + BigInt(k)}`.split("")
console.log(sumss)
    return sumss


};
console.log(addToArrayForm(num, k))