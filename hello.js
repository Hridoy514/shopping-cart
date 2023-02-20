document.getElementById("case-increase").addEventListener("click", function(){
    handleProductChange(true);
    // const caseInput = document.getElementById('input-case');
    // const caseCount = parseInt(caseInput.value);
    // const caseNewCount = caseCount + 1;
    // caseInput.value = caseNewCount;
    // const caseTotal = caseNewCount * 59;
    // document.getElementById("case-price").innerText = "$" + caseTotal;
})
document.getElementById("case-decrease").addEventListener("click", function(){
    handleProductChange(false);
    // const caseDecrease = document.getElementById("input-case");
    // const caseIntiser = parseInt(caseDecrease.value);
    // const caseNewDecrease = caseIntiser - 1;
    // caseDecrease.value = caseNewDecrease;
    // const decreaseAmount = caseNewDecrease * 59;
    // document.getElementById("case-price").innerText = "$" + decreaseAmount;
})
function handleProductChange(isIncrease){
    const caseInput = document.getElementById("input-case");
    const newCount = parseInt(caseInput.value);
    let caseNewCount = newCount;
    if(isIncrease == true){
        caseNewCount = newCount + 1;
    }
    if(isIncrease == false && newCount > 0){
        caseNewCount = newCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-price").innerText = "$" + caseTotal;
    calculateTotal();
}

document.getElementById("phone-increase").addEventListener("click", function(){
    const phoneIncrease = document.getElementById("phone-count");
    const phoneIntiser = parseInt(phoneIncrease.value);
    const newIncrease = phoneIntiser + 1;
    phoneIncrease.value = newIncrease;
    const increaseAmount = newIncrease * 1249;
    document.getElementById("phone-price").innerText = "$" + increaseAmount;
    calculateTotal();
})

document.getElementById("phone-decrease").addEventListener("click", function(){
    const phoneDecrease = document.getElementById("phone-count");
    const phoneIntDecrease = parseInt(phoneDecrease.value);
    const decreaseCount = phoneIntDecrease - 1;
    if(decreaseCount < 0){
        decreaseCount = phoneIntDecrease - 1;
    }
    phoneDecrease.value = decreaseCount;
    const decreaseAmount = decreaseCount * 1249;
    document.getElementById("phone-price").innerText = "$" + decreaseAmount;
    calculateTotal();
})

function calculateTotal() {
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById("input-case")
    const caseCount = parseInt(caseInput.value);

    const subTotal = phoneCount * 1249 + caseCount * 59;
    document.getElementById("total-price").innerText = "$" + subTotal;

    const tax = Math.round(subTotal / 10);
    document.getElementById("tax-count").innerText = "$" + tax;

    const grandTotal = subTotal + tax;
    document.getElementById("grand-total").innerText = "$" + grandTotal;
}
