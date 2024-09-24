const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 
    'Z': '--..', '0': '-----', '1': '.----', '2': '..---', 
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', 
    '7': '--...', '8': '---..', '9': '----.', ' ': '   '
};

const validarTexto = (texto) => {
    const caracteresEspeciales = /[!"#$%&/()=?¡'¿´+*{[\]}-]/g;
    return !caracteresEspeciales.test(texto);
};

const textoAMorse = (texto) => {
    return texto.toUpperCase().split('').filter(char => morseCode[char]).map(char => morseCode[char] || '').join('   ');
};
const morseATexto = (morse) => {
    const invertidoMorse = Object.fromEntries(Object.entries(morseCode).map(([key, value]) => [value, key]));
    return morse.split('   ').map(word => word.split(' ').map(code => invertidoMorse[code] || '').join('')).join('   ');
};
const traducirATextoMorse = () => {
    const texto = document.getElementById('texto').value;
    
    if (validarTexto(texto)) {
        const resultado = textoAMorse(texto);
        document.getElementById('resultado').innerText = resultado ? `Código Morse: ${resultado}` : 'Por favor, introduce texto válido.';
    } else {
        document.getElementById('resultado').innerText = 'Error: El texto contiene caracteres especiales no permitidos.';
    }
};
const traducirAMensaje = () => {
    const morse = document.getElementById('texto').value;
    const resultado = morseATexto(morse);
    document.getElementById('resultado').innerText = resultado ? `Texto: ${resultado}` : 'Por favor, introduce código Morse válido.';
};
