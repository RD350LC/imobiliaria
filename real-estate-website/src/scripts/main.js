document.addEventListener('DOMContentLoaded', () => {
    const listingsContainer = document.getElementById('listings');
    const contactForm = document.getElementById('contact-form');

    // Sample property listings
    const properties = [
        {
            id: 1,
            title: 'Beautiful Family Home',
            price: '$500,000',
            image: 'images/property1.jpg',
            description: 'A spacious family home located in a quiet neighborhood.'
        },
        {
            id: 2,
            title: 'Modern Apartment',
            price: '$300,000',
            image: 'images/property2.jpg',
            description: 'A stylish apartment in the heart of the city.'
        },
        {
            id: 3,
            title: 'Cozy Cottage',
            price: '$250,000',
            image: 'images/property3.jpg',
            description: 'A charming cottage with a beautiful garden.'
        }
    ];

    // Function to display property listings
    function displayListings() {
        properties.forEach(property => {
            const propertyElement = document.createElement('div');
            propertyElement.classList.add('property');

            propertyElement.innerHTML = `
                <img src="${property.image}" alt="${property.title}">
                <h2>${property.title}</h2>
                <p>${property.description}</p>
                <p class="price">${property.price}</p>
            `;

            listingsContainer.appendChild(propertyElement);
        });
    }

    // Function to handle contact form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        console.log('Contact Form Submitted:', data);
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });

    // Initialize the website
    displayListings();
});