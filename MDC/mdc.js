function primo(numero){
    NumeroPrimo = 0;
    for (let i = 1; i <= numero; i++){
        if (numero % i === 0){
            NumeroPrimo++;
        }
    }
    if (NumeroPrimo === 2){
        return true
    } else {
        return false
    }
}
function mdc(n1,n2){
    MDC = 1;
    for (let i = 2;i <= n1 , i <= n2;){
        if ((n1 % i === 0) && (n2 % i === 0) && primo(i)){
            MDC *= i;
            n1 = n1/i;
            n2 = n2/i;
            i = 2;
        } else {
            i++;
        }
    }
    return MDC
}
// resultado observável:
console.log(mdc(12, 18)); // 6
// Casos de Teste:
console.log(mdc(12, 18) === 6, "mdc(12, 18) === 6");
console.log(mdc(82, 90) === 2, "mdc(82, 90) === 2");
console.log(mdc(36, 90) === 18, "mdc(36, 90) === 18");
console.log(mdc(821, 90) === 1, "mdc(821, 90) === 1");
// Teste de performance (opcional):
console.log(mdc(235556224, 66522360) === 8, "mdc(235556224, 66522360) === 8");