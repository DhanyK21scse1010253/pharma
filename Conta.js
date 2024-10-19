document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formStatus = document.getElementById('formStatus');

    if (name && email && message) {
        formStatus.innerText = `Thank you for your message, ${name}! We will get back to you soon.`;
        formStatus.style.color = 'green';
        document.getElementById('contactForm').reset();
    } else {
        formStatus.innerText = 'Please fill out all fields.';
        formStatus.style.color = 'red';
    }
});
