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
        if (i === tamanho-1) {
            separado.push(armazem);
        }
    }
    return separado;
};
const texto = document.querySelector('#texto');
const separador = document.querySelector('#separador');
const button = document.querySelector('button');
const ul = document.querySelector('ul');
button.addEventListener('click', function(evento) {
    evento.preventDefault();
    const li = `<li>${split(texto.value, separador.value)}</li>`;
    ul.innerHTML += li;
    texto.value = '';
    separador.value = '';
});

const parts = split('the:matrix:revisited', ':');
console.log(parts.length === 3);
console.log(parts[0] === 'the');
console.log(parts[1] === 'matrix');
console.log(parts[2] === 'revisited');
console.log(parts[3] === undefined);

console.log(split('banana', 'a')[0] === 'b');
console.log(split('banana', 'a')[1] === 'n');
console.log(split('banana', 'a')[2] === 'n');
console.log(split('banana', 'a')[3] === '');

const dbo = split('desenvolvimento baseado em objetos', ' ');
console.log(dbo.length === 4);
console.log(dbo[0] === 'desenvolvimento');
console.log(dbo[1] === 'baseado');
console.log(dbo[2] === 'em');
console.log(dbo[3] === 'objetos');
