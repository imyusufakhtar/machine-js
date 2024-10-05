document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;

    const messages = [];
    if (!firstName) messages.push("First Name is required.");
    if (!lastName) messages.push("Last Name is required.");
    if (!validateEmail(email)) messages.push("Email is not valid.");
    if (!validatePhone(phoneNumber)) messages.push("Phone Number is not valid.");
    if (password.length < 8) messages.push("Password must be at least 8 characters long.");

    if (messages.length > 0) {
        alert(messages.join('\n'));
    } else {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            password: password
        };
        console.log(formData);
        alert("Registration successful!");
        location.reload();
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePhone(phone) {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
}
