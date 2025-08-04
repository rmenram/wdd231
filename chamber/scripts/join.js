function setTimestamp() {
    const timestampField = document.getElementById('timestamp');
    timestampField.value = new Date().toLocaleString('en-US', { hour12: true });
}

document.addEventListener('DOMContentLoaded', setTimestamp);