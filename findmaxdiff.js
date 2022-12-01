var prices = [7,1,5,3,6,4]
var maxProfit = function (prices) {
    let a = 0;
    let b = prices[0];

    for (i = 0; i < prices.length; i++) {
        b = Math.min(prices[i], b);
        a = Math.max(a, prices[i] - b);
    }

    return a;
};
console.log(maxProfit(prices))