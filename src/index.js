// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {
            error: `You are rich, my friend! We don't have so much coins for exchange`
        }
    }
    let answer = {};
    if (currency < 0){
        return answer;
    }
    if (currency / 50 >= 1) {
        answer.H = Math.floor(currency / 50);
        currency -= Math.floor(currency / 50) * 50;
    }
    if (currency / 25 >= 1) {
        answer.Q = Math.floor(currency / 25);
        currency -= Math.floor(currency / 25) * 25;
    }
    if (currency / 10 >= 1) {
        answer.D = Math.floor(currency / 10);
        currency -= Math.floor(currency / 10) * 10;
    }
    if (currency / 5 >= 1) {
        answer.N = Math.floor(currency / 5);
        currency -= Math.floor(currency / 5) * 5;
    }
    if (currency != 0) {
        answer.P = currency;
    }
    return answer;
}