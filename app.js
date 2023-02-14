const initialPrice = document.querySelector('#initial-price');
const stocksQuantity = document.querySelector('#stocks-quantity');
const currentPrice = document.querySelector('#current-price');
const submitButton = document.querySelector('#submit-button');
const outputBox = document.querySelector('#output-box');

submitButton.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
};


function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showOutput(`Hey the loss is ${loss} and the percentage is ${lossPercentage}`);
    }else if(current > initial){
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        showOutput(`Hey the profit is ${profit} and the percentage is ${profitPercentage}`);
    }else{
        showOutput(`No pain no gain and no gain no pain`);
    }
};

function showOutput(message){
    outputBox.innerText = message;
}

