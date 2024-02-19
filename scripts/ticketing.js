function getSeat() {
    const seats = document.getElementsByClassName('seat')
    let selectedSeat = 0;
    let totalTicketPrice = 0;
    for (const seat of seats) {
        seat.addEventListener('click', function (event) {
            selectedSeat += 1;
            totalTicketPrice+=550;
            if (selectedSeat <= 4) {
                const currentSeat = document.getElementById('current-seat');
                currentSeat.innerText = selectedSeat;
                const currentSeatLeftText = document.getElementById('current-seat-left');
                const currentSeatLeft = parseInt(currentSeatLeftText.innerText);
                currentSeatLeftText.innerText = currentSeatLeft - 1;
                seat.classList.add('bg-amber-400');
                // append seat 
                const selectedSeatDiv = document.getElementById('selected-seat-container');
                const p1 = document.createElement('p');
                p1.innerText = event.target.innerText;
                selectedSeatDiv.appendChild(p1);
                // append seat class 
                const selectedSeatClass = document.getElementById('selected-seat-class');
                const p2 = document.createElement('p');
                p2.innerText = 'Economy';
                selectedSeatClass.appendChild(p2);
                //Append price
                const seatPrice = document.getElementById('selected-seat-price');
                const p3 = document.createElement('p');
                p3.innerText = 550;
                seatPrice.appendChild(p3);
                //update total ticket price
                const totalTicketPriceText = document.getElementById('selected-ticket-price');
                totalTicketPriceText.innerText = totalTicketPrice;
                //update grand total
                const grandTotalText = document.getElementById('grand-total-price');
                grandTotalText.innerText = totalTicketPrice;
                //apply coupon
                
                // const couponField = document.getElementById('coupon-field');
                // console.log(couponField.value);
            }else{
                alert(`You have selected maximum number of seat 4`);
            }
            
        })

    }


}
getSeat()