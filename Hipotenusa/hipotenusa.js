const CalcularHipotenusa = document.querySelector('#CalcularHipotenusa');
const ResultadoHipotenusa = document.querySelector('#Resultado');
const um = 1;
const dois = 2;
function hipotenusa(PrimeiroCateto, SegundoCateto) {
    const Pcateto = PrimeiroCateto * PrimeiroCateto;
    const Scateto = SegundoCateto * SegundoCateto;
    const hipotenusa = ((Pcateto+Scateto)**(um/dois));
    return hipotenusa;
}
CalcularHipotenusa.addEventListener('click', function() {
    let PrimeiroCateto = document.querySelector('#PrimeiroValor');
    let SegundoCateto = document.querySelector('#SegundoValor');
    PrimeiroCateto = PrimeiroCateto.value;
    SegundoCateto = SegundoCateto.value;
    ResultadoHipotenusa.innerText = hipotenusa(PrimeiroCateto, SegundoCateto);
});

