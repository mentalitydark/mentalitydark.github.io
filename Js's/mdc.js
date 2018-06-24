const Dois = 2;
function primo(numero) {
    let NumeroPrimo = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            NumeroPrimo++;
        }
    }
    if (NumeroPrimo === Dois) {
        return true;
    } else {
        return false;
    }
}

function mdc(n1, n2) {
    let MDC = 1;
    for (let i = 2; i <= n1, i <= n2; ) {
        if ((n1 % i === 0) && (n2 % i === 0) && primo(i)) {
            MDC *= i;
            n1 = n1/i;
            n2 = n2/i;
            i = Dois;
        } else {
            i++;
        }
    }
    return MDC;
}
const PrimeiroValor = document.querySelector('#PValor');
const SegundoValor = document.querySelector('#SValor');
const Resultado = document.querySelector('#ResultadoMDC');
const Calcular = document.querySelector('#CalcularMDC');
Calcular.addEventListener('click', function() {
    Resultado.innerText = mdc(PrimeiroValor.value, SegundoValor.value);
});
/*
const body = document.querySelector('body');
body.addEventListener('mousemove', function(e) {
    if (e.buttons) {
        console.log('X: ', e.clientX);
        console.log('Y: ', e.clientY);
    }
});
*/
