document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmmontString = withdrawField.value;
    const withdrawAmmont = parseFloat(withdrawAmmontString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const preWithdrawTotal = parseFloat(withdrawTotalString);

    const currentWithdrawTotal = preWithdrawTotal + withdrawAmmont;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const blanceTotalElement = document.getElementById('blance-total');
    const blanceTotalString = blanceTotalElement.innerText;
    const blanceTotal = parseFloat(blanceTotalString);

    const newBalance = blanceTotal - withdrawAmmont;
    blanceTotalElement.innerText = newBalance;

    withdrawField.value = '';

})