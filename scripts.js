document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate and store user data (if needed)
    // Redirect to the payment page
    window.location.href = 'payment.html';
});

// Payment button functionality (dummy implementation)
// You'd need to implement actual payment logic if possible
document.getElementById('pay-button')?.addEventListener('click', function() {
    // Simulate successful payment
    window.location.href = 'purchase.html';
});
