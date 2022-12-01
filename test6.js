var head = [1,1,2]
var deleteDuplicates = function(head) {
 const newArr = head.filter((value, index) => {
    return head.indexOf(value)  == index
} 
)
    return newArr
    
};

console.log(deleteDuplicates(head))