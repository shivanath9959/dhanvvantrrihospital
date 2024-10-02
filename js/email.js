

function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const department = document.getElementById('select').value;

    // Send email to the owner
    emailjs.send("service_d5q54ap", "template_92390xr", {
        from_name: name,
        from_email: email,
        date: date,
        phone: phone,
        department: department,
        message: message
    }).then(response => {
        console.log('Owner email sent successfully!', response.status, response.text);
    }, error => {
        console.error('Failed to send owner email', error);
    });

    // Send confirmation email to the user
    emailjs.send("service_d5q54ap", "template_olxayjs", {
        to_name: name,
        to_email: email
    }).then(response => {
        console.log('User email sent successfully!', response.status, response.text);
        alert("Appointment request submitted successfully!");
    }, error => {
        console.error('Failed to send user email', error);
        alert("There was an error submitting your appointment. Please try again.");
    });

    // Optionally, clear the form fields
    document.getElementById('appointment-form').reset();
}