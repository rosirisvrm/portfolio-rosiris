export function updateCvFile() {
    const isDark = document.documentElement.classList.contains('dark');
    const cvLink = document.getElementById('cv-button');
    
    if (cvLink) {
        cvLink.setAttribute('href', isDark ? 'public/Rosiris-Romero-CV-Green.pdf' : 'Rosiris-Romero-CV-Pink.pdf');
    }
}