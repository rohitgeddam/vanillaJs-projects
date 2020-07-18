const seatsContainer = document.querySelector('.seats-container');
const seats = seatsContainer.querySelectorAll('.seat');
const dynamic = document.querySelector('#dynamic');
const total = document.querySelector('#total');
const selected_movie = document.querySelector('#movies');

paintUI();

function paintUI() {
	console.log('i run ');
	const movieIndex = localStorage.getItem('movie');
	const price = localStorage.getItem('price');
	const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

	selected_movie.selectedIndex = movieIndex;
	total.innerText = price;
	dynamic.innerText = selectedSeats.length;
	console.log('sel', selectedSeats);
	selectedSeats.forEach((item) => {
		[ ...seats ][item].classList.add('selected');
	});
}

function getPrice() {
	const total_seats = seatsContainer.querySelectorAll('.seat.selected');
	const price = total_seats.length * Number(selected_movie.value);
	dynamic.innerText = String(total_seats.length);
	total.innerText = price;
	localStorage.setItem('movie', selected_movie.selectedIndex);
	localStorage.setItem('price', price);
}

seatsContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
		e.target.classList.toggle('selected');
		const total_seats = seatsContainer.querySelectorAll('.seat.selected');

		const selectedSeats = [ ...total_seats ].map(function(seat) {
			return [ ...seats ].indexOf(seat);
		});
		console.log('selected seats', selectedSeats);
		localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
		getPrice();
	}
});

selected_movie.addEventListener('change', (e) => {
	getPrice();
});
