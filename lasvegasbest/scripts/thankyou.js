function displayFormData() {
    const params = new URLSearchParams(window.location.search);
    // console.log(queryString);
    const formData = document.getElementById('form-data');
    let firstName = document.createElement("span");
    firstName.textContent = "Attraction Name: " + params.get('attractionName');
    formData.appendChild(firstName);
    let lastName = document.createElement("span");
    lastName.textContent = "Attraction Address: " + params.get('attractionAddress');
    formData.appendChild(lastName);
    let email = document.createElement("span");
    email.textContent = "Attraction Website: " + params.get('attractionWebsite');
    formData.appendChild(email);
    let mobile = document.createElement("span");
    mobile.textContent = "Attraction Location: " + params.get('attractionLocation');
    formData.appendChild(mobile);
    let business = document.createElement("span");
    business.textContent = "Attraction Description: " + params.get('attractionDescription');
    formData.appendChild(business);
    let timestamp = document.createElement("span");
    timestamp.textContent = "Timestamp: " + params.get('timestamp');
    formData.appendChild(timestamp);
}

document.addEventListener('DOMContentLoaded', displayFormData);