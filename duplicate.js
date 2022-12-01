const arry = [1, 2, 1, 3, 4, 3, 5];


//show dublicate
const duplicates = arry.filter((item, index) => index !== arry.indexOf(item))
console.log(duplicates)

let duplicates = arry.filter((c, index) => { //show duplicate
    return arry.indexOf(c) !== index;
});

let duplicates = arry.filter((c, index) => { //delete duplicate
    return arry.indexOf(c) == index;
});



// Output: [1, 3]

function takeoutDublicate (arry) {
var set = new Set(arry)
return [...set]
}
console.log(takeoutDublicate(arry))

//output
//[ 1, 2, 3, 4, 5 ]