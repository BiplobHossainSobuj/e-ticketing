function getSeat() {
    const seats = document.getElementsByClassName('seat')
    let selectedSeat = 0;
    for (const seat of seats) {
        seat.addEventListener('click', function (event) {
            selectedSeat += 1;
            if (selectedSeat <= 4) {
                const currentSeat = document.getElementById('current-seat');
                currentSeat.innerText = selectedSeat;
                const currentSeatLeftText = document.getElementById('current-seat-left');
                const currentSeatLeft = parseInt(currentSeatLeftText.innerText);
                currentSeatLeftText.innerText = currentSeatLeft - 1;
                seat.classList.add('bg-amber-400');
            }else{
                alert(`You have selected maximum number of seat 4`);
            }
            
        })

    }


}
getSeat()