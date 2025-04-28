// Simple form submission handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.elements[0].value="jyoti kholase";
    const email = this.elements[1].value"kholasejyoti9022@gmail.com";
    const message = this.elements[2].value="hello";
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show alert and reset form
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});