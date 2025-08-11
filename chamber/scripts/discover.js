function lastVisit() {
    const lastVisitContainer = document.getElementById('visits');

    const lastVisitKey = 'discoverLastVisit';
    const now = Date.now();
    const lastVisit = localStorage.getItem(lastVisitKey);

    if (!lastVisit) {
        lastVisitContainer.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const diff = now - Number(lastVisit);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        if (days < 1) {
            lastVisitContainer.textContent = "Back so soon! Awesome!";
        } else {
            lastVisitContainer.textContent = `You last visited ${days} days ago.`;
        }
    }

    localStorage.setItem(lastVisitKey, now.toString());
};

function imageHoverEffect() {
    if (window.matchMedia('(min-width: 38rem)').matches) {
        const images = document.querySelectorAll('.disc img');
        images.forEach(img => {
            img.addEventListener('mouseover', () => {
                img.style.opacity = '0.7';
                img.style.transition = 'opacity 0.3s ease';
            });
            img.addEventListener('mouseout', () => {
                img.style.opacity = '1';
                // img.style.transition = 'opacity 0.3s ease';
            });
        });
    }
}

async function displayPlaces() {
    const placesContainer = document.getElementById('container');
    placesContainer.innerHTML = '';
    let response = await fetch('data/places.json');
    let places = await response.json();
    places.forEach(place => {
        const card = document.createElement('article');
        card.className = 'disc';
        // title, address, description, photo, Learn More button
        let title = document.createElement('h2');
        title.textContent = place.name;
        card.appendChild(title);
        let address = document.createElement('address');
        address.textContent = place.address;
        card.appendChild(address);
        let figure = document.createElement('figure');
        let image = document.createElement('img');
        image.src = place.photo_url;
        image.alt = place.name + " image";
        image.loading = 'lazy';
        image.width = '300';
        image.height = '200';
        figure.appendChild(image);
        card.appendChild(figure);
        let description = document.createElement('p');
        description.textContent = place.description;
        card.appendChild(description);
        let learn = document.createElement('button');
        learn.textContent = "Learn more about " + place.name;
        learn.classList.add('learn-more');
        card.appendChild(learn);

        placesContainer.appendChild(card);

        const learnBtn = card.querySelector('.learn-more');
        learnBtn.addEventListener('click', () => {
            window.open(place.site_url, '_blank', 'noopener');
        });

        imageHoverEffect();
    });
}
lastVisit();
document.addEventListener("DOMContentLoaded", displayPlaces);