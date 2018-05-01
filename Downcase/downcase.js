const downcase = function(frase) {
    const um = 1;
    const SC = 65;
    const NT = 90;
    const COD = 192;
    const DDN = 219;
    const TD = 32;
    const tamanho = frase.length-um;
    let i = 0;
    let FraseDown = '';
    while (i <= tamanho) {
        if (((frase.charCodeAt(i) >= SC) && (frase.charCodeAt(i) <= NT)) ||
         ((frase.charCodeAt(i) >= COD) && (frase.charCodeAt(i) <= DDN))) {
            const codigo = frase.charCodeAt(i);
            FraseDown += String.fromCharCode(codigo + TD);
            i++;
        } else {
            FraseDown += frase[i];
            i++;
        }
    }
    return FraseDown;
};
console.log(downcase('TESTE') === 'teste');
console.log(downcase('Teste') === 'teste');
console.log(downcase('T$% 12TR') === 't$% 12tr');
console.log(downcase('CURSO TÉCNICO EM INFORMÁTICA PARA INTERNET') === 'curso técnico em informática para internet');
console.log(downcase('Grande Área: CIÊNCIA DA COMPUTAÇÃO') === 'grande área: ciência da computação');

// 224,225,226,227,231,232,233,234,236,237,238,242,243,244,245,249,250,251;
const input = document.querySelector('input');
const button = document.querySelector('button');
const output = document.querySelector('output');
button.addEventListener('click', function() {
    output.innerText = downcase(input.value);
});
