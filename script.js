document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    // In a real site, you'd send this to a server (e.g., via fetch to an API).
});
