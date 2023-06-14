document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputById('id-withdraw');
const olddepositamount = getElementById('withdraw-total');
const totalwithdrawAmount = olddepositamount + newWithdrawAmount;


const newbalanceamount = getElementById('balance-total');
const totalbalance = newbalanceamount - newWithdrawAmount;
if(newWithdrawAmount> totalbalance){
    alert('inefficient balance')
    return;
}
setElementById('withdraw-total', totalwithdrawAmount);
setElementById('balance-total', totalbalance);

})

