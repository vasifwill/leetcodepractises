var accounts = [[1,5],[7,3],[3,5]]
var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(item => item.reduce((prev, curr) => prev+curr,0)), 0)
    }; 
console.log(maximumWealth(accounts))

//10