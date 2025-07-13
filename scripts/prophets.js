const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const getProphetData = async () => {
    try {
        const response = await fetch(url); // Wait for the fetch to complete
        const data = await response.json(); // Wait for the response to be converted to JSON
        // console.log(data); // Output the fetched data
        // console.table(data.prophets); // temporary testing of data response
        displayProphets(data.prophets);
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
};

getProphetData();

const displayProphets = (prophets) => {
    // card build code goes here
    prophets.forEach((prophet) => {
        // card build code goes here
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // fill in the blank
        let birthdate = document.createElement('p'); // fill in the blank
        let birthplace = document.createElement('p'); // fill in the blank
        let portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`; // fill in the blank
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`; // fill in the blank
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(birthdate); //fill in the blank
        card.appendChild(birthplace); //fill in the blank
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}