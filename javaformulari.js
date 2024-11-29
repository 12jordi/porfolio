function validateForm(event) {
    event.preventDefault();  // Evitar que el formulari s'enviï i redirigeixi

    let valid = true;

    // Obtenim els camps del formulari
    const nom = document.getElementById('nom');
    const email = document.getElementById('email');
    const telefon = document.getElementById('telefon');
    const empresa = document.getElementById('empresa');
    const missatge = document.getElementById('missatge');

    // Netejar els missatges d'error anteriors i les classes d'error
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(error => error.remove()); // Eliminem els missatges d'error existents
    const inputsWithError = document.querySelectorAll('.error');
    inputsWithError.forEach(input => input.classList.remove('error')); // Eliminem la classe .error dels camps anteriors

    // Validació de Nom
    if (nom.value.trim() === '') {
        valid = false;
        nom.classList.add('error');
        showError(nom, 'Aquest camp és obligatori.');
    }

    // Validació de Correu Electrònic
    const emailPattern = /.+@.+\..+/;
    if (email.value.trim() === '') {
        valid = false;
        email.classList.add('error');
        showError(email, 'Aquest camp és obligatori.');
    } else if (!emailPattern.test(email.value)) {
        valid = false;
        email.classList.add('error');
        showError(email, 'Format de correu invàlid.');
    }

    // Validació de Telèfon (opcional)
    if (telefon.value.trim() !== '' && telefon.value.length < 10) {
        valid = false;
        telefon.classList.add('error');
        showError(telefon, 'El telèfon no és vàlid.');
    }

    // Validació de Missatge
    if (missatge.value.trim() === '') {
        valid = false;
        missatge.classList.add('error');
        showError(missatge, 'El missatge no pot estar buit.');
    }

    // Si tot està correcte, envia el formulari (aquí podries enviar les dades via AJAX si vols)
    if (valid) {
        alert('Formulari enviat correctament!');
    }
}

function showError(input, message) {
    // Crear un missatge d'error
    const errorSpan = document.createElement('span');
    errorSpan.classList.add('error-message');
    errorSpan.textContent = message;
    input.parentNode.appendChild(errorSpan); // Afegir el missatge d'error sota el camp
}
