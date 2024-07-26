const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('Oops! There was a problem sending your message.');
        }
    }).catch(error => {
        alert('Oops! There was a problem sending your message.');
        console.error(error);
    });
});