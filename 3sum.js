var nums = [-4,-1,-1,0,1,2]
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    const res = []
    for (var i = 0; nums.length; i++) {
        if(i>0 && nums[i] === nums[i-1]) continue
        if(nums[i] > 0) break
        let l = i +1;
        let r = nums.length - 1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if(sum === 0) {
                res.push([[nums[i]], nums[l], nums[r]])
                l++
                r--
                while (l < r && nums[l] === nums[l-1]) l++
                while (l<r && nums[r] === nums[r+1]) r--

            }else if (sum > 0) r--
            else l++
        }

    }
    return res


    
}
/*var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        if (nums[i] > 0) break; // no need to check, there is no res any more
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while (l < r && nums[l] === nums[l - 1]) l++;
                while (l < r && nums[r] === nums[r + 1]) r--;
            } else if (sum > 0) r--;
            else l++;
        }
    }
    return res;
}; */