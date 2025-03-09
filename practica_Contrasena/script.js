const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lengthCounter = rangeContainer.querySelector('h1');
const generateBtn = document.querySelector('.generator form button');
const passwordHeading = document.querySelector('.password-container h1');

const handleChange = () => {
    lengthCounter.textContent = inputRange.value;
}
const generatePassword = (passwordLength) =>{
    let result = '';
    let characters = '';

    //obtener las opciones seleccionadas
    const useUppercase = document.querySelector('#uppercase').checked;
    const useLowercase = document.querySelector('#lowercase').checked;
    const useNumbers = document.querySelector('#numbers').checked;
    const useSymbol = document.querySelector('#symbols').checked;

    if(useUppercase) characters += 'ALJCHSVLJH';
    if(useLowercase) characters += 'kjbccsa';
    if(useNumbers) characters += '0123456789';
    if(useSymbol) characters += '!#$%&/';

    if(characters === ''){
        passwordHeading.textContent = 'Selecciona al menos una opcion';
        return '';
    }

    for( let i = 0; i < passwordLength; i++ ){
        result += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return result;
};

//funcion para imprimir la contraseña
const PrintPassword = (event) => {
    event.preventDefault();
    const password = generatePassword(inputRange.value);
    if(password){
        passwordHeading.textContent = password;
    }
}

//configuracion de los eventos
inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', PrintPassword);