function lastVisit() {
    const lastVisitContainer = document.getElementById('visits');

    const lastVisitKey = 'lvbLastVisit';
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

lastVisit();
