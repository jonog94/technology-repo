/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    let minValue = Infinity
    let maxProfit = 0

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i]

        if (price < minValue) {
            minValue = price
        } else {
            maxProfit = Math.max(maxProfit, price - minValue)
        }
    }

    return maxProfit
}