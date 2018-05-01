const split = function(frase, separador) {
    const tamanho = frase.length;
    let armazem = '';
    const separado = [];
    for (let i = 0; i < tamanho; i++) {
        if (frase[i] !== separador) {
            armazem += frase[i];
        } else {
            separado.push(armazem);
            armazem = '';
        }
        if (i === tamanho - 1) {
            separado.push(armazem);
        }
    }
    return separado;
};
const downcase = function(frase) {
    const um = 1;
    const SC = 65;
    const NT = 90;
    const COD = 192;
    const DDN = 219;
    const TD = 32;
    const tamanho = frase.length - um;
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
const strip = function(frase, tira) {
    let saida = '';
    const tamanho = frase.length;
    for (let i = 0; i < tamanho; i++) {
        if (frase[i] !== tira) {
            saida += frase[i];
        }
    }
    return saida;
};
