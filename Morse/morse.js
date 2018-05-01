function morse(palavra) {
    let codigo = '';
    let codigofinal = '';
    const tamanho = palavra.length;
    for (let i = 0; i < tamanho; i++) {
        switch (palavra[i]) {
        case 'A':
            codigo += '.-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'a':
            codigo += '.-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'B':
            codigo += '-...';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'b':
            codigo += '-...';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'C':
            codigo += '-.-.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'c':
            codigo += '-.-.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'D':
            codigo += '-..';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'd':
            codigo += '-..';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'E':
            codigo += '.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'e':
            codigo += '.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'F':
            codigo += '..-.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'f':
            codigo += '..-.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'G':
            codigo += '--.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'g':
            codigo += '--.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'H':
            codigo += '....';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'h':
            codigo += '....';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'I':
            codigo += '..';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'i':
            codigo += '..';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'J':
            codigo += '.---';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'j':
            codigo += '.---';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'K':
            codigo += '-.-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'k':
            codigo += '-.-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'L':
            codigo += '.-..';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'l':
            codigo += '.-..';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'M':
            codigo += '--';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'm':
            codigo += '--';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'N':
            codigo += '-.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'n':
            codigo += '-.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'O':
            codigo += '---';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'o':
            codigo += '---';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'P':
            codigo += '.--.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'p':
            codigo += '.--.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'Q':
            codigo += '--.-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'q':
            codigo += '--.-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'R':
            codigo += '.-.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'r':
            codigo += '.-.';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'S':
            codigo += '...';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 's':
            codigo += '...';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'T':
            codigo += '-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 't':
            codigo += '-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'U':
            codigo += '..-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'u':
            codigo += '..-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'V':
            codigo += '...-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'v':
            codigo += '...-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'W':
            codigo += '.--';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'w':
            codigo += '.--';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'X':
            codigo += '-..-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'x':
            codigo += '-..-';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'Y':
            codigo += '-.--';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'y':
            codigo += '-.--';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'Z':
            codigo += '--..';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case 'z':
            codigo += '--..';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        case ' ':
            codigo += '/';
            if (i !== (tamanho - 1)) {
                codigo += ' ';
            }
            break;
        }
    }
    if ((codigo[codigo.length-1]) === ' ') {
        for (let i = 0; i < (codigo.length-1); i++) {
            codigofinal += codigo[i];
        }
    } else {
        return codigo;
    }
    return codigofinal;
}
const codificar = document.querySelector('#CodigoMorse');
const TextoCodificar = document.querySelector('#codificar');
const TextoCodificado = document.querySelector('#codificado');
codificar.addEventListener('click', function() {
    TextoCodificado.innerText = morse(TextoCodificar.value);
});
