function getInputById(inputname){
    const inputElement = document.getElementById(inputname);
    const inputElementstring = inputElement.value;
    const newinputElement = parseFloat(inputElementstring);
    inputElement.value = "";
    return newinputElement;
    
}

function getElementById(elementname){
    const elementNew = document.getElementById(elementname);
    const elementstring = elementNew.innerText;
    const element = parseFloat(elementstring);
    return element;
}

function setElementById(elementname,newelement){
    const elementNew = document.getElementById(elementname);
     elementNew.innerText =newelement;
}

document.getElementById('btn-deposit').addEventListener('click', function(){


const newdepositamount = getInputById('deposit-field');
const olddepositamount = getElementById('deposit-total');

const totaldepositamount = newdepositamount + olddepositamount;

setElementById('deposit-total', totaldepositamount);


const previousbalancetotal = getElementById('balance-total');
const newbalancetotal = previousbalancetotal + newdepositamount;
setElementById('balance-total', newbalancetotal);
})
