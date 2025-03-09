const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lengthCounter = rangeContainer.querySelector('h1');
const generateBtn = document.querySelector('.generator form button');
const passwordHeading = document.querySelector('.password-container h1');
const passwordStrength = document.querySelector('#password-strength');

const handleChange = () => {
    lengthCounter.textContent = inputRange.value;
}

const calculatePasswordStrength = (password) => {
    let strength = 0;

    // Verificar la longitud de la contraseña
    if (password.length >= 12) strength += 2;
    else if (password.length >= 8) strength += 1;

    // Verificar si contiene mayúsculas
    if (/[A-Z]/.test(password)) strength += 1;

    // Verificar si contiene minúsculas
    if (/[a-z]/.test(password)) strength += 1;

    // Verificar si contiene números
    if (/[0-9]/.test(password)) strength += 1;

    // Verificar si contiene símbolos
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    return strength;
}

const getPasswordStrengthLabel = (strength) => {
    if (strength <= 2) return 'Pobre';
    if (strength <= 4) return 'Medio';
    if (strength <= 5) return 'Fuerte';
    return 'Muy Fuerte';
}

const generatePassword = (passwordLength) => {
    let result = '';
    let characters = '';

    // Obtener las opciones seleccionadas
    const useUppercase = document.querySelector('#uppercase').checked;
    const useLowercase = document.querySelector('#lowercase').checked;
    const useNumbers = document.querySelector('#numbers').checked;
    const useSymbol = document.querySelector('#symbols').checked;

    if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) characters += '0123456789';
    if (useSymbol) characters += '!#$%&/';

    if (characters === '') {
        passwordHeading.textContent = 'Selecciona al menos una opcion';
        return '';
    }

    for (let i = 0; i < passwordLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    // Calcular y mostrar el nivel de la contraseña
    const strength = calculatePasswordStrength(result);
    const strengthLabel = getPasswordStrengthLabel(strength);
    passwordStrength.textContent = `Nivel: ${strengthLabel}`;

    return result;
};

// Función para imprimir la contraseña
const PrintPassword = (event) => {
    event.preventDefault();
    const password = generatePassword(inputRange.value);
    if (password) {
        passwordHeading.textContent = password;
    }
}

// Configuración de los eventos
inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', PrintPassword);