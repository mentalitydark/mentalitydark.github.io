const stats = function(texto) {
    const caracters = ['.', ',', '?', '!', '/', '@', '(', ')', '1', '2', '3', '4', '5', '6', '7', '8', '9', "'", '"', ':'];
    let SemCaraters = texto;
    for (let i = 0; i < caracters.length; i++) {
        SemCaraters = strip(SemCaraters, caracters[i]);
    }
    const zero = 0;
    const TextoNovo = downcase(SemCaraters);
    const TextoVetor = split(TextoNovo, ' ');
    let verificacao = zero;
    let i2 = zero;
    const VetorFinal = [];
    let stopword = 'de a o que e do da em um para é com não uma os no se na por mais as dos como mas foi ao ele das tem à seu sua ou ser quando muito há nos já está eu só pelo pela até isso ela entre era depois sem mesmo aos ter seus quem nas me esse eles estão você tinha foram essa num nem suas meu às minha têm numa pelos elas havia seja qual será nós tenho lhe deles essas esses pelas este fosse dele tu te vocês vos lhes meus minhas teu tua teus tuas nosso nossa nossos nossas dela delas esta estes estas aquele aquela aqueles aquelas isto aquilo estou está estamos estão estive esteve estivemos estiveram estava estávamos estavam estivera estivéramos esteja estejamos estejam estivesse estivéssemos estivessem estiver estivermos estiverem hei há havemos hão houve houvemos houveram houvera houvéramos haja hajamos hajam houvesse houvéssemos houvessem houver houvermos houverem houverei houverá houveremos houverão houveria houveríamos houveriam sou somos são era éramos eram fui foi fomos foram fora fôramos seja sejamos sejam fosse fôssemos fossem for formos forem serei será seremos serão seria seríamos seriam tenho tem temos tém tinha tínhamos tinham tive teve tivemos tiveram tivera tivéramos tenha tenhamos tenham tivesse tivéssemos tivessem tiver tivermos tiverem terei terá teremos terão teria teríamos teriam  ';
    stopword = split(stopword, ' ');
    const VetorVerificado = [];
    for (let i = zero; i < TextoVetor.length; i++, i2 = zero) {
        for (; i2 < stopword.length; i2++) {
            if (TextoVetor[i] === stopword[i2]) {
                verificacao++;
                if (verificacao > zero) {
                    i2++;
                }
            }
        }
        if (verificacao === zero) {
            VetorVerificado.push(TextoVetor[i]);
        }
        verificacao = zero;
    }
    verificacao = 0;
    i2 = zero;
    let i4 = zero;
    let quantidade = zero;
    for (let i = zero; i < VetorVerificado.length; i++, i2 = zero) {
        for (; i2 < VetorVerificado.length; i2++) {
            if (VetorVerificado[i] === VetorVerificado[i2]) {
                quantidade++;
            }
        }
        if (quantidade !== zero) {
            for (let i3 = zero; i3 < VetorFinal.length; i3++) {
                if (VetorFinal[i3][zero] === VetorVerificado[i]) {
                    verificacao++;
                }
            }
            if (verificacao === 0) {
                VetorFinal[i4] = [VetorVerificado[i], quantidade];
                i4++;
                quantidade = zero;
            } else {
                verificacao = 0;
            }
        }
        quantidade = zero;
    }
    return VetorFinal;
};
const um = 1;
const zero = 0;
let text = document.querySelector('textarea');
const button = document.querySelector('button');
button.addEventListener('click', function(evento) {
    evento.preventDefault();
    text = text.value;
    const vetorTabel = stats(text);
    for (let i = 0; i < vetorTabel.length; i++){
        document.querySelector('tbody').innerHTML += `<tr><td>${vetorTabel[i][zero]}</td><td>${vetorTabel[i][um]}</td></tr>`;
    }
});
const texto = "Programação Orientada a Objetos (também conhecida pela sua sigla POO) é um modelo de análise, projeto e programação de software baseado na composição e interação entre diversas unidades chamadas de 'objetos'. A POO é um dos 4 principais paradigmas de programação (as outras são programação imperativa, funcional e lógica). Os objetos são operados com o conceito de 'this' (isso) ou 'self' (si), de forma que seus métodos muitas vezes modifiquem os dados da própria instância. Os programas são arquitetados na forma de objetos que interagem entre si. Dentre as várias abordagens da POO, as baseadas em classes são as mais comuns: objetos são instâncias de classes, o que em geral também define o tipo do objeto. Assim, na POO, implementa-se um conjunto de classes. Cada classe determina o comportamento (definido nos métodos) e estados possíveis (atributos) de seus objetos, assim como o relacionamento com outros objetos. A alternativa mais usual ao uso de classes é o uso de protótipos. Neste caso, objetos são copias de outros objetos, não instâncias de classes. Javascript e Lua são exemplos de linguagens cuja POO é realizada por protótipos. A diferença mais prática mais evidente é que na POO baseada em protótipos apenas a herança simples é implementada pela cópia do objeto.";

const result = stats(texto);
console.log(result.length > 50)
// cada item em resultado é a estatística de uma palavra
// o subitem 0 é a palavra e o subitem 1 é a contagem
console.log(result[0][0] === 'programação');
console.log(result[0][1] === 4);
console.log(result[1][0] === 'orientada');
console.log(result[1][1] === 1);
console.log(result[2][0] === 'objetos');
console.log(result[2][1] === 9);
console.log(result[3][0] === 'também');
console.log(result[3][1] === 2);
// adicionar mais 12 casos de teste:
console.log(result[4][0] === 'conhecida');
console.log(result[4][1] === 1);
console.log(result[5][0] === 'sigla');
console.log(result[5][1] === 1);
console.log(result[6][0] === 'poo');
console.log(result[6][1] === 6);
console.log(result[7][0] === 'modelo');
console.log(result[7][1] === 1);
console.log(result[8][0] === 'análise');
console.log(result[8][1] === 1);
console.log(result[9][0] === 'projeto');
console.log(result[9][1] === 1);
console.log(result[10][0] === 'software');
console.log(result[10][1] === 1);
