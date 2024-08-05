const seats = document.querySelectorAll(".seat");
const totalPrice = document.getElementById("totalPrice");
const selectedSeatsCount = document.getElementById("selectedSeats");
let selectedSeats =[];
const ticketPrice = 230;

seats.forEach(seat =>{
    if(!seat.classList.contains("occupied")){
        const originalColor = seat.style.backgroundColor;
            seat.addEventListener('click',() => {
                if(seat.classList.contains('selected')){
                seat.classList.remove('selected');
                seat.style.backgroundColor = originalColor;
                selectedSeats = selectedSeats.filter (selectedSeat => selectedSeat !== seat);
            } else {
                seat.classList.add('selected');
                seat.style.backgroundColor = "blue";
                selectedSeats.push(seat);
            }
            updateSelectedSeats();
            updateTotalPrice();
            });
        }
    });
    
    function updateSelectedSeats(){
        selectedSeatsCount.textContent = `${selectedSeats.length}`;
    }
    function updateTotalPrice(){
        totalPrice.textContent = `₹${selectedSeats.length * ticketPrice}`;
    }


const bookButton = document.getElementById('bookButton');
const confirmation = document.getElementById('confirmation');
const confirmSeats = document.getElementById('confirmSeats');
const confirmPrice = document.getElementById('confirmPrice');

bookButton.addEventListener('click', () => {
  if (selectedSeats.length > 0) {
    confirmation.style.display = 'block';
    confirmSeats.textContent = `Seats : ${selectedSeats.length}`;
    confirmPrice.textContent = `Total : ₹${selectedSeats.length * ticketPrice}`;
  } else {
    // Handle case where no seats are selected
    alert('Please select at least one seat');
}
});

