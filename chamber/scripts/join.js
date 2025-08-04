function setTimestamp() {
    const timestampField = document.getElementById('timestamp');
    timestampField.value = new Date().toLocaleString('en-US', { hour12: true });
}

document.addEventListener('DOMContentLoaded', setTimestamp);

function handleModals() {
    const viewButtons = document.querySelectorAll(".learnMore");
    const closeButtons = document.querySelectorAll(".closeModal");

    viewButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.dataset.modal;
            const modal = document.getElementById(modalId);
            modal.showModal();
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modal = button.closest("dialog");
            modal.close();
        });
    });
}

document.addEventListener("DOMContentLoaded", handleModals);