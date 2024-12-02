document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector("#preview-video");
    console.log("Video element:", video);
    
    if (!video) {
        console.error("Elemento video non trovato");
        return;
    }

    const muteIcon = document.querySelector(".fa-volume-up");
    console.log("Mute icon:", muteIcon);
    if (!muteIcon) {
        console.error("Icona mute non trovata");
        return;
    }

    const muteButton = muteIcon.parentNode;

    muteButton.addEventListener("click", () => {
        video.muted = !video.muted;
        
        if (video.muted) {
            muteIcon.classList.remove("fa-volume-up");
            muteIcon.classList.add("fa-volume-mute");
        } else {
            muteIcon.classList.remove("fa-volume-mute");
            muteIcon.classList.add("fa-volume-up");
        }
    });

    const elements = document.querySelectorAll(".categories img, .altri-elementi");
    console.log("Elementi trovati:", elements);

    elements.forEach(element => {
        element.addEventListener("mouseenter", () => {
            console.log("Mouse enter triggered on", element);
            element.classList.add("scale-up");
        });

        element.addEventListener("mouseleave", () => {
            console.log("Mouse leave triggered on", element);
            element.classList.remove("scale-up");
        });
    });
});

// Creiamo il bottone
const button = document.createElement("button");
button.innerHTML = '<i class="fas fa-chevron-circle-up"></i>';
button.classList.add("scroll-to-top");
button.style.display = "none"; // Nascondiamo inizialmente il bottone
document.body.appendChild(button);

// Aggiungiamo l'event listener per il click
button.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Aggiungiamo gli stili corretti al bottone
button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "20px";

// Aggiungiamo l'event listener per lo scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Mostra il bottone dopo 300px di scroll
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

const searchIcon = document.getElementById('search-icon');
const searchBox = document.querySelector('.search-box');

searchIcon.addEventListener('click', () => {
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains('active')) {
        document.getElementById('search-bar').focus();
    }
});

// Chiudi quando si clicca fuori
document.addEventListener('click', (e) => {
    if (!searchBox.contains(e.target) && !searchIcon.contains(e.target)) {
        searchBox.classList.remove('active');
    }
});

// Aggiungi questo al tuo JavaScript esistente
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Cambia il valore per regolare quando il colore cambia
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


