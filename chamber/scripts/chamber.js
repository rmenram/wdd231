const businesses = [
    {
        technology: [
            'Python'
        ],
        completed: true,
        name: 'Nevada Autism Center',
        address: '7730 West Sahara Avenue #115',
        phone: '(702) 660-2005',
        website: 'https://nevadaautism.com/',
        logo: 'nevadaautism_logo.jpg',
        membership: 3//1=member, 2=silver, 3=gold
    },
    {
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true,
        name: 'RIGHT Divorce Lawyers',
        address: '600 S. Tonopah Dr, Suite 300',
        phone: '(702) 914-0400',
        website: 'https://rightlawyers.com/',
        logo: 'Right-Divorce-Lawyers-Logo.jpg',
        membership: 1//1=member, 2=silver, 3=gold
    },
    {
        technology: [
            'Python'
        ],
        completed: true,
        name: 'HomeAid Southern Nevada',
        address: '4175 S. Riley St Suite 100',
        phone: '702.794.0117 ext. 100',
        website: 'https://www.homeaidsn.org/',
        logo: 'HomeAid_So_Nevada_Logo.jpg',
        membership: 2//1=member, 2=silver, 3=gold
    },
    {
        technology: [
            'C#'
        ],
        completed: true,
        name: 'Armstrong Teasdale',
        address: '3770 Howard Hughes Parkway Suite 200',
        phone: '702.678.5070',
        website: 'https://www.armstrongteasdale.com/',
        logo: 'AT-Logo.jpg',
        membership: 2//1=member, 2=silver, 3=gold
    },
    {
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true,
        name: 'Drummond Law Firm',
        address: '810 S Casino Center Blvd. #101',
        phone: '702-366-9966',
        website: 'https://www.drummondfirm.com/',
        logo: 'DrummondLaw_Logo.jpg',
        membership: 1//1=member, 2=silver, 3=gold
    },
    {
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false,
        name: 'Insperity',
        address: '10845 Griffith Peak Drive, Suite 500',
        phone: '702-337-2023',
        website: 'https://www.insperity.com/',
        logo: 'InsperityLogo.jpg',
        membership: 1//1=member, 2=silver, 3=gold
    },
    {
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false,
        name: 'The Meadows School',
        address: '8601 Scholar Ln.',
        phone: '7022541610',
        website: 'https://www.themeadowsschool.org/',
        logo: 'TheMeadowsSchool.jpg',
        membership: 1//1=member, 2=silver, 3=gold
    }
]

function addCards(filteredBusinesses) {
    document.querySelector(".cards").innerHTML = "";
    filteredBusinesses.forEach(filteredCourse => {
        let card = document.createElement("div");
        card.classList.add("card");
        let abbreviation = document.createElement("p");
        if (filteredCourse.membership == 3) {
            abbreviation.textContent = '✓ ' + filteredCourse.name;
            abbreviation.classList.add("completed");
        }
        else if (filteredCourse.membership == 2) {
            abbreviation.textContent = filteredCourse.name;
            abbreviation.classList.add("not-completed");
        }
        else {
            abbreviation.textContent = filteredCourse.name;
            abbreviation.classList.add("not-completed");
        }
        // abbreviation.textContent = filteredCourse.subject + ' ' + filteredCourse.number;
        card.appendChild(abbreviation);
        // document.querySelector(".courses").appendChild(abbreviation);

        let logo = document.createElement('img');
        logo.src = 'images/' + filteredCourse.logo;
        logo.alt = filteredCourse.logo + ' logo';
        card.appendChild(logo);

        let address = document.createElement("p");
        address.innerHTML = filteredCourse.address;
        card.appendChild(address);

        let phone = document.createElement("p");
        phone.innerHTML = filteredCourse.phone;
        card.appendChild(phone);

        let website = document.createElement("p");
        website.innerHTML = `<a href="${filteredCourse.website}" target="_blank">${filteredCourse.website}</a>`;
        card.appendChild(website);

        document.querySelector(".cards").appendChild(card);
    }
    )
}

function addListing(filteredBusinesses) {
    document.querySelector(".cards").innerHTML = "";
    document.querySelector(".listings").innerHTML = "";
    filteredBusinesses.forEach(filteredCourse => {
        let card = document.createElement("div");
        card.classList.add("listing");

        let abbreviation = document.createElement("span");
        abbreviation.textContent = filteredCourse.name;
        abbreviation.classList.add("list-column");
        card.appendChild(abbreviation);

        let address = document.createElement("span");
        address.innerHTML = filteredCourse.address;
        address.classList.add("list-column");
        card.appendChild(address);

        let phone = document.createElement("span");
        phone.innerHTML = filteredCourse.phone;
        phone.classList.add("list-column");
        card.appendChild(phone);

        let website = document.createElement("span");
        website.innerHTML = `<a href="${filteredCourse.website}" target="_blank">${filteredCourse.website}</a>`;
        website.classList.add("list-column");
        card.appendChild(website);

        document.querySelector(".listings").appendChild(card);
    }
    )
}

function loadCards(filterName) {
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

function loadListings(filterName) {
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