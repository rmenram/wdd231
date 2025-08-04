function displayFormData() {
    const params = new URLSearchParams(window.location.search);
    // console.log(queryString);
    const formData = document.getElementById('form-data');
    let firstName = document.createElement("span");
    firstName.textContent = "First Name: " + params.get('firstName');
    formData.appendChild(firstName);
    let lastName = document.createElement("span");
    lastName.textContent = "Last Name: " + params.get('lastName');
    formData.appendChild(lastName);
    let email = document.createElement("span");
    email.textContent = "Email: " + params.get('email');
    formData.appendChild(email);
    let mobile = document.createElement("span");
    mobile.textContent = "Mobile Phone: " + params.get('phone');
    formData.appendChild(mobile);
    let business = document.createElement("span");
    business.textContent = "Business Name: " + params.get('organization');
    formData.appendChild(business);
    let timestamp = document.createElement("span");
    timestamp.textContent = "Timestamp: " + params.get('timestamp');
    formData.appendChild(timestamp);
}

document.addEventListener('DOMContentLoaded', displayFormData);