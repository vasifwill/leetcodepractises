var nums = [1,3,5,6]
var target = 2

var searchInsert = function(nums, target) {
    return nums.findIndex(v=>v>= target)===-1? nums.length:nums.findIndex(v=>v>=target)};
    console.log(searchInsert(nums, target))