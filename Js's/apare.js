const trimRight = function(palavra) {
    const um = 1;
    const zero = 0;
    let PalavraNova = '';
    let i = palavra.length-um;
    let revertida = '';
    while ((palavra[i] === ' ') || (palavra[i] === '\n') ||
    (palavra[i] === '\r') || (palavra[i] === '\t')) {
        i--;
    }
    for (; i >= zero; i--) {
        PalavraNova = PalavraNova + palavra[i];
    }
    i = PalavraNova.length-um;
    while (i >= zero) {
        revertida += PalavraNova[i];
        i--;
    }
    return revertida;
};
// teste trimRight
console.assert(trimRight('    abc  ') === '    abc');
console.assert(trimRight('    abc    \r \n \t ') === '    abc');
console.assert(trimRight('') === '');
console.assert(trimRight('   \n\t\r  \n\r ') === '');

const trimLeft = function(palavra) {
    const um = 1;
    let PalavraNova = '';
    let i = 0;
    while ((palavra[i] === ' ') || (palavra[i] === '\n') ||
    (palavra[i] === '\r') || (palavra[i] === '\t')) {
        i++;
    }
    for (; i <= palavra.length-um; i++) {
        PalavraNova += palavra[i];
    }
    return PalavraNova;
};
// teste trimLeft
console.assert(trimLeft('    abc  ') === 'abc  ');
console.assert(trimLeft('    com espaco  ') === 'com espaco  ');
console.assert(trimLeft('\r \n \t com carriage return, line feed, tab e espaco  \n') === 'com carriage return, line feed, tab e espaco  \n');
console.assert(trimLeft('') === '');
console.assert(trimLeft('   \n\t\r  \n\r ') === '');

const trim = function(palavra) {
    const TL = trimLeft(palavra);
    return trimRight(TL);
};
// teste trim
console.assert(trim('    abc  ') === 'abc');
console.assert(trim('\n \r\t      abc\n\r \t        ') === 'abc');
console.assert(trim('\n \r\t      com espaco\n\r \t        ') === 'com espaco');
console.assert(trim('') === '');
console.assert(trim('   \n\t\r  \n\r ') === '');
console.assert(trim('                                                                  a                                                                                       ') === 'a');
