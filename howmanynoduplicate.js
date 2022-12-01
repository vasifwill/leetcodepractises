var nums = [1,1,2]

var removeDuplicates = function(nums) {
    var setNums = new Set(nums)
    var newSet = [...setNums]
    console.log(newSet)
    var numbers = 0
    for (var i = 0; i < newSet.length; i++) {
        if(newSet[i]) 
        var numbers = numbers + 1
        }
    return numbers
};
console.log(removeDuplicates(nums))