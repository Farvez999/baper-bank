document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmmount = depositField.value;
    const newDepositAmmount = parseFloat(depositAmmount);

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    const preDepositTotal = parseFloat(depositTotal);

    const currentDepositTotal = preDepositTotal + newDepositAmmount;

    depositTotalElement.innerText = currentDepositTotal;

    const blanceTotalElement = document.getElementById('blance-total');
    const blanceTotalString = blanceTotalElement.innerText;
    const blanceTotal = parseFloat(blanceTotalString);

    const currentBalanceTotal = blanceTotal + newDepositAmmount;
    blanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
    console.log(depositAmmount, depositTotal);
})