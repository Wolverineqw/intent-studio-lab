
console.log("IntentStudio Loaded");

function toggleMenu() {

    const menu =
        document.getElementById("mobileMenu");

    if (!menu) return;

    menu.classList.toggle("show-menu");
}

function goToDashboard() {
    window.location.href = "dashboard.html";
}

function scrollToFeatures() {

    const features =
        document.getElementById("features");

    if (features) {
        features.scrollIntoView({
            behavior: "smooth"
        });
    }
}
