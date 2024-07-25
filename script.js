let bookings = []; // Array to store bookings

// Function to add a new booking
function addBooking() {
    // Get form values
    var date = document.getElementById('date').value;
    var startTime = document.getElementById('startTime').value;
    var endTime = document.getElementById('endTime').value;
    var roomType = document.getElementById('roomType').value;

    // Create a new booking object
    var newBooking = {
        id: generateId(), // Generate unique ID (in real scenario, this might come from backend)
        date: date,
        startTime: startTime,
        endTime: endTime,
        roomType: roomType
    };

    // Add booking to array
    bookings.push(newBooking);

    // Update the bookings list display
    displayBookings();

    // Clear the form fields
    clearForm();
}

// Function to generate a unique ID (for demo purposes)
function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

// Function to display bookings in the list
function displayBookings() {
    var bookingList = document.getElementById('bookingList');
    bookingList.innerHTML = '';

    bookings.forEach(function(booking) {
        var li = document.createElement('li');
        li.innerHTML = `
            <strong>Meeting ID:</strong> ${booking.id}<br>
            <strong>Date:</strong> ${booking.date}<br>
            <strong>Time:</strong> ${booking.startTime} - ${booking.endTime}<br>
            <strong>Room Type:</strong> ${booking.roomType}<br>
            <button onclick="updateBooking('${booking.id}')">Update</button>
            <button onclick="deleteBooking('${booking.id}')">Delete</button>
        `;
        bookingList.appendChild(li);
    });
}

// Function to update a booking
function updateBooking(id) {
    var index = bookings.findIndex(function(booking) {
        return booking.id === id;
    });

    if (index !== -1) {
        var booking = bookings[index];
        document.getElementById('date').value = booking.date;
        document.getElementById('startTime').value = booking.startTime;
        document.getElementById('endTime').value = booking.endTime;
        document.getElementById('roomType').value = booking.roomType;

        // Remove the booking from the array (temporary approach for demo)
        bookings.splice(index, 1);

        // Update the bookings list display
        displayBookings();
    }
}

// Function to delete a booking
function deleteBooking(id) {
    var index = bookings.findIndex(function(booking) {
        return booking.id === id;
    });

    if (index !== -1) {
        // Remove the booking from the array
        bookings.splice(index, 1);

        // Update the bookings list display
        displayBookings();
    }
}

// Function to clear the form fields
function clearForm() {
    document.getElementById('date').value = '';
    document.getElementById('startTime').value = '';
    document.getElementById('endTime').value = '';
    document.getElementById('roomType').value = '';
}

// Initial display of bookings
displayBookings();
