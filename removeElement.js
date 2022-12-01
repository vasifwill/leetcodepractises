
let nums = [3, 2, 3, 2]
var valueOfNumbers = 3

let removeElement = function(nums) {  
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == valueOfNumbers) {
           nums.splice(i,1);
           i-=1;
        }
    }
    return nums.length
};
console.log(removeElement(nums))
