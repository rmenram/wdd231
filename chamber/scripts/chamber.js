function addCards(filteredBusinesses) {
    document.querySelector(".cards").innerHTML = "";
    document.querySelector(".listings").innerHTML = "";
    filteredBusinesses.forEach(filteredBusiness => {
        let card = document.createElement("div");
        card.classList.add("card");
        let abbreviation = document.createElement("p");
        if (filteredBusiness.membership == 3) {
            abbreviation.textContent = '✓ ' + filteredBusiness.name;
            // abbreviation.classList.add("completed");
        }
        else if (filteredBusiness.membership == 2) {
            abbreviation.textContent = filteredBusiness.name;
            // abbreviation.classList.add("not-completed");
        }
        else {
            abbreviation.textContent = filteredBusiness.name;
            // abbreviation.classList.add("not-completed");
        }
        // abbreviation.textContent = filteredBusiness.subject + ' ' + filteredBusiness.number;
        card.appendChild(abbreviation);
        // document.querySelector(".courses").appendChild(abbreviation);

        let logo = document.createElement('img');
        logo.src = 'images/' + filteredBusiness.logo;
        logo.alt = filteredBusiness.logo + ' logo';
        card.appendChild(logo);

        let address = document.createElement("p");
        address.innerHTML = filteredBusiness.address;
        card.appendChild(address);

        let phone = document.createElement("p");
        phone.innerHTML = filteredBusiness.phone;
        card.appendChild(phone);

        let website = document.createElement("p");
        website.innerHTML = `<a href="${filteredBusiness.website}" target="_blank">${filteredBusiness.website}</a>`;
        card.appendChild(website);

        document.querySelector(".cards").appendChild(card);
    }
    )
}

function addListing(filteredBusinesses) {
    document.querySelector(".cards").innerHTML = "";
    document.querySelector(".listings").innerHTML = "";
    filteredBusinesses.forEach(filteredBusiness => {
        let card = document.createElement("div");
        // card.classList.add("listing");

        let abbreviation = document.createElement("span");
        abbreviation.textContent = filteredBusiness.name;
        // abbreviation.classList.add("list-column");
        card.appendChild(abbreviation);

        let address = document.createElement("span");
        address.innerHTML = filteredBusiness.address;
        // address.classList.add("list-column");
        card.appendChild(address);

        let phone = document.createElement("span");
        phone.innerHTML = filteredBusiness.phone;
        // phone.classList.add("list-column");
        card.appendChild(phone);

        let website = document.createElement("span");
        website.innerHTML = `<a href="${filteredBusiness.website}" target="_blank">${filteredBusiness.website}</a>`;
        // website.classList.add("list-column");
        card.appendChild(website);

        document.querySelector(".listings").appendChild(card);
    }
    )
}

async function loadCards(filterName) {
    const response = await fetch('data/members.json');
    let businesses = await response.json();
    if (filterName === "featured") {
        addCards(businesses.filter((course) => course.membership > 1));
    } else if (filterName === "All") {
        addCards(businesses.filter((course) => course.membership != ''));
    } else if (filterName === "gold") {
        addCards(businesses.filter((course) => course.membership == 3));
    } else if (filterName === "silver") {
        addCards(businesses.filter((course) => course.membership == 2));
    } else {
        addCards(businesses.filter((course) => course.membership == 1));
    }
}

async function loadListings(filterName) {
    const response = await fetch('data/members.json');
    let businesses = await response.json();
    if (filterName === "featured") {
        addListing(businesses.filter((course) => course.membership > 1));
    } else if (filterName === "All") {
        addListing(businesses.filter((course) => course.membership != ''));
    } else if (filterName === "gold") {
        addListing(businesses.filter((course) => course.membership == 3));
    } else if (filterName === "silver") {
        addListing(businesses.filter((course) => course.membership == 2));
    } else {
        addListing(businesses.filter((course) => course.membership == 1));
    }
}

//directory buttons
const btnAll = document.querySelector('#btn-Grid');
const btnCSE = document.querySelector('#btn-List');

//call the corresponding method with the corresponding filter
btnAll.addEventListener('click', () => {
    loadCards('All');
});
btnCSE.addEventListener('click', () => {
    loadListings('All');
});