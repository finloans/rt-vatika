document.getElementById('coupon-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Check if fields are filled before submission
    if (name && phone && address) {
        fetch('https://script.google.com/macros/s/AKfycbzUIIB84vGop0ws6QwsEbofhtLR4bRs-9SNcGSe0E5OlinBJyrf5EhYHlvaa87J-7Hk/exec', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                phone: phone,
                address: address
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors'  // Use no-cors to bypass the CORS policy issue
        })
        .then(() => {
            // As we can't read the response when using no-cors, directly display success
            alert('Form submitted successfully! Check your email for the coupon.');
            document.getElementById('coupon-section').style.display = 'block';
            document.getElementById('coupon-form').reset(); // Reset form fields
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        });
    } else {
        alert('Please fill in all fields.');
    }
});

