// 计算复利的方法
function calculateFuli (moneyEveryMonth, time, fuliRate) {
    var rateAfterCalculate = (1 + (+fuliRate / 100) / 12) // 计算后的【月】化收益率
    var earningsList = [] // 本息合计 list
    var incomeList = [] // 本息合计 list
    new Array(+time * 12).fill(1).map(function (seg, idx) {
        var earningsOneMonth = moneyEveryMonth * Math.pow(rateAfterCalculate, +time * 12 - idx)
        earningsList.push(+earningsOneMonth.toFixed())
        incomeList.push(+earningsOneMonth.toFixed() - moneyEveryMonth)
    })
    var earningsAll = earningsList.reduce((accumulator, currentValue) => accumulator + currentValue).toFixed(2)
    var basicMoney = moneyEveryMonth * time * 12
    return {
        moneyList:earningsList, // 每个月的本益合计列表
        incomeList, // 每个月的收益列表
        allMoney:earningsAll, // 在最后所有的钱
        basicMoney, // 本金
        earnings:earningsAll - basicMoney, // 赚的钱，收益
        earningsRate:(earningsAll - basicMoney) / basicMoney * 100 + '%' // 收益率
    }
}