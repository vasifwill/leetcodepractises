var nums = [12,345,2,6,7896]

var findNumbers = function (nums) {
    let a = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i].toString().length % 2 === 0) {
        a++;
      }
    }
  
    return a;
  };

console.log(findNumbers(nums))