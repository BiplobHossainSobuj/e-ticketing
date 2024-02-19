 function getSeatByClassName(elementId){
    const element = document.getElementsByClassName(elementId);
    console.log(element.innerText);
    return element;
 }

 function getDiscount(){
    const couponField = document.getElementById('coupon-field');
    const couponValue = couponField.value;
    const priceText = document.getElementById('selected-ticket-price');
    const priceWithoutDiscount = parseFloat(priceText.innerText);
    const grandTotalText = document.getElementById('grand-total-price');
    let grandTotalAmount = parseFloat(grandTotalText.innerText);
    if(couponValue==='NEW15' || couponValue ==='Couple 20'){
        if (couponValue==='NEW15') {
            const discountAmount = priceWithoutDiscount * 0.15;
            grandTotalText.innerText = grandTotalAmount - discountAmount;
            document.getElementById('coupon-container').classList.add('hidden');
        }
        else if(couponValue ==='Couple 20'){
            const discountAmount = priceWithoutDiscount * 0.2;
            grandTotalText.innerText = grandTotalAmount - discountAmount;
            document.getElementById('coupon-container').classList.add('hidden');
        }
    }
    
 }
 getDiscount();