function imageHoverEffect() {
    if (window.matchMedia('(min-width: 38rem)').matches) {
        const images = document.querySelectorAll('.card img');
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

function addCards(filteredBusinesses) {
    document.querySelector(".cards").innerHTML = "";
    document.querySelector(".listings").innerHTML = "";
    filteredBusinesses.forEach(filteredBusiness => {

        let card = document.createElement("div");
        card.classList.add("card");
        let abbreviation = document.createElement("h3");
        abbreviation.textContent = filteredBusiness.name;
        card.appendChild(abbreviation);

        let logo = document.createElement('img');
        logo.src = filteredBusiness.photo_url;
        logo.alt = filteredBusiness.name + ' image';
        logo.loading = 'lazy';
        logo.width = 300;
        logo.height = 200;
        card.appendChild(logo);

        let address = document.createElement("p");
        address.innerHTML = filteredBusiness.address;
        card.appendChild(address);

        // let phone = document.createElement("p");
        // phone.innerHTML = filteredBusiness.phone;
        // card.appendChild(phone);

        let website = document.createElement("p");
        website.innerHTML = `<a href="${filteredBusiness.site_url}" target="_blank">${filteredBusiness.name}</a>`;
        card.appendChild(website);

        document.querySelector(".cards").appendChild(card);

        imageHoverEffect();
    }
    )
}

function addListing(filteredBusinesses) {
    document.querySelector(".cards").innerHTML = "";
    document.querySelector(".listings").innerHTML = "";
    filteredBusinesses.forEach(filteredBusiness => {
        let card = document.createElement("div");

        let logo = document.createElement('img');
        logo.src = filteredBusiness.photo_url;
        logo.alt = filteredBusiness.name + ' image';
        logo.loading = 'lazy';
        logo.width = 150;
        logo.height = 100;
        card.appendChild(logo);

        let abbreviation = document.createElement("h4");
        abbreviation.textContent = filteredBusiness.name;
        card.appendChild(abbreviation);

        let address = document.createElement("span");
        address.innerHTML = filteredBusiness.address;
        card.appendChild(address);

        // let phone = document.createElement("span");
        // phone.innerHTML = filteredBusiness.phone;
        // card.appendChild(phone);

        let website = document.createElement("span");
        website.innerHTML = `<a href="${filteredBusiness.site_url}" target="_blank">${filteredBusiness.site_url}</a>`;
        card.appendChild(website);

        document.querySelector(".listings").appendChild(card);
    }
    )
}

function addAttractions(filteredAttractions) {
    document.querySelector(".free").innerHTML = "";
    let freeHeading = document.createElement("h2");
    freeHeading.textContent = "Free Attractions";
    document.querySelector(".free").appendChild(freeHeading);
    filteredAttractions.filter((attraction) => attraction.cost == 'Free').forEach(filteredAttraction => {
        let addAttractions = document.createElement("span");
        // addAttractions.textContent = filteredAttraction.addAttractions;
        let a = document.createElement('a');
        a.text = filteredAttraction.name;
        a.href = filteredAttraction.site_url;
        a.target = "_blank";
        addAttractions.appendChild(a);
        document.querySelector(".free").appendChild(addAttractions);
    }
    )

    document.querySelector(".money").innerHTML = "";
    let costHeading = document.createElement("h2");
    costHeading.textContent = "Cost Attractions";
    document.querySelector(".money").appendChild(costHeading);
    filteredAttractions.filter((attraction) => attraction.cost != 'Free').forEach(filteredAttraction => {
        let addAttractions = document.createElement("span");
        const attractionLink = `<a href="${filteredAttraction.site_url}" target="_blank">${filteredAttraction.name}</a>`
        addAttractions.innerHTML = attractionLink;
        document.querySelector(".money").appendChild(addAttractions);
    }
    )
}

async function loadCards(filterName) {
    const response = await fetch('data/places.json');
    let places = await response.json();
    if (filterName === "featured") {
        addCards(places.filter((place) => place.cost == 'Free'));
    } else if (filterName === "strip") {
        addCards(places.filter((place) => place.location == 'strip'));
        addAttractions(places.filter((attraction) => attraction.location === 'strip'));
    } else if (filterName === "downtown") {
        addCards(places.filter((place) => place.location == 'downtown'));
        addAttractions(places.filter((attraction) => attraction.location === 'downtown'));
    } else if (filterName === "outdoors") {
        addCards(places.filter((place) => place.location == 'outdoors'));
        addAttractions(places.filter((attraction) => attraction.location === 'outdoors'));
    } else {
        addCards(places.filter((place) => place.location == ''));
    }
}

async function loadListings(filterName) {
    try {
        const response = await fetch('data/places.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let places = await response.json();
        if (filterName === "featured") {
            addListing(places.filter((place) => place.location == 'strip'));
        } else if (filterName === "strip") {
            addListing(places.filter((place) => place.location == 'strip'));
        } else if (filterName === "downtown") {
            addListing(places.filter((place) => place.location == 'downtown'));
        } else if (filterName === "outdoors") {
            addListing(places.filter((place) => place.location == 'outdoors'));
        } else {
            addListing(places.filter((place) => place.location == ''));
        }
    } catch (error) {
        console.error("Error while getting or processing data:", error);
        throw error; // Re-throw
    }
}

//directory buttons
const btnAll = document.querySelector('#btn-Grid');
const btnCSE = document.querySelector('#btn-List');
const btnDTGrid = document.querySelector('#btn-dt-Grid');
const btnDTList = document.querySelector('#btn-dt-List');
const btnODGrid = document.querySelector('#btn-od-Grid');
const btnODList = document.querySelector('#btn-od-List');

//call the corresponding method with the corresponding filter
btnAll.addEventListener('click', () => {
    loadCards('strip');
});
btnCSE.addEventListener('click', () => {
    loadListings('strip');
});

btnDTGrid.addEventListener('click', () => {
    loadCards('downtown');
});
btnDTList.addEventListener('click', () => {
    loadListings('downtown');
});

btnODGrid.addEventListener('click', () => {
    loadCards('outdoors');
});
btnODList.addEventListener('click', () => {
    loadListings('outdoors');
});