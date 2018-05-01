// reverse
const ReverterTexto = document.querySelector('#reverter');
const revert = document.querySelector('#revert');
const revertido = document.querySelector('#revertido');
function reverse(palavra) {
    let revertida = '';
    const tamanho = palavra.length;
    for (let i = (tamanho-1); i >= 0; i-- ) {
        revertida += palavra[i];
    }
    return revertida;
}
revert.addEventListener('click', function() {
    revertido.innerText = reverse(ReverterTexto.value);
});
// strip
const FraseTira = document.querySelector('#FraseTira');
const tira = document.querySelector('#tirar');
const Tirado = document.querySelector('#tirado');
const TirarCaracter = document.querySelector('#TirarCaracter');
function strip(frase, tira) {
    let saida = '';
    const tamanho = frase.length;
    for (let i = 0; i < tamanho; i++) {
        if (frase[i] !== tira) {
            saida += frase[i];
        }
    }
    return saida;
}
TirarCaracter.addEventListener('click', function() {
    Tirado.innerText = strip(FraseTira.value, tira.value);
});
// palindrome
const palindromo = document.querySelector('#palindromo');
const verificado = document.querySelector('#verificado');
const verificador = document.querySelector('#verificador');
function palindrome(frase) {
    const mudanca = [',', '-', '!', ' ', '.', '?'];
    for (let i = 0; i < 6; i++) {
        frase = strip(frase, mudanca[i]);
    }
    let c = 6;
    const tamanho = frase.length;
    let saida = '';
    for (let i = 0; i < tamanho; i++, c++) {
        if ((frase[i] === 'á') ||
        (frase[i] === 'à') || (frase[i] === 'â') || (frase[i] === 'ã')) {
            saida += 'a';
        } else if ((frase[i] === 'ó') ||
        (frase[i] === 'ò') || (frase[i] === 'ô') || (frase[i] === 'õ')) {
            saida += 'o';
        } else if ((frase[i] === 'é') ||
        (frase[i] === 'è') || (frase[i] === 'ê')) {
            saida += 'e';
        } else if ((frase[i] === 'í') ||
        (frase[i] === 'ì') || (frase[i] === 'î')) {
            saida += 'i';
        } else if ((frase[i] === 'ú') ||
        (frase[i] === 'ù') || (frase[i] === 'û')) {
            saida += 'u';
        } else {
            saida += frase[i];
        }
    }
    frase = reverse(saida);
    if (saida === frase) {
        return true;
    } else {
        return false;
    }
}
verificador.addEventListener('click', function() {
    if (palindrome(palindromo.value)) {
        verificado.innerText = `É palindrome.`;
    } else {
        verificado.innerText = 'Não é palindrome.';
    }
});
