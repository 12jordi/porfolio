
window.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = 'Benvingut al portafoli de Jordi Bravo Salas!';
    welcomeMessage.style.cssText = `
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #333;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        font-size: 1rem;
    `;
    document.body.appendChild(welcomeMessage);

    setTimeout(() => {
        welcomeMessage.style.opacity = '0';
        welcomeMessage.style.transition = 'opacity 1s ease';
        setTimeout(() => welcomeMessage.remove(), 1000);
    }, 3000);
});

document.getElementById('toggle-descriptions').addEventListener('click', () => {
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(desc => {
        if (desc.style.display === 'none') {
            desc.style.display = 'block';
            desc.style.opacity = '0';
            setTimeout(() => (desc.style.opacity = '1'), 10); // Retraso para aplicar animación
        } else {
            desc.style.opacity = '0';
            setTimeout(() => (desc.style.display = 'none'), 300); // Tiempo para completar animación
        }
    });


    const button = document.getElementById('toggle-descriptions');
    button.textContent = descriptions[0].style.display === 'none'
        ? 'Mostrar descripciones'
        : 'Ocultar descripciones';
});
