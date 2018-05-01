const CursoNovo = document.querySelector('#curso');
const CursoNovoBotao = document.querySelector('#NovoCurso');
const select = document.querySelector('select');
CursoNovoBotao.addEventListener('click', function(e) {
    e.preventDefault();
    if (CursoNovo.value!=='') {
        select.innerHTML += `<option>${CursoNovo.value}</option>`;
        CursoNovo.value = '';
    }
});
console.log(select);

const AdicionarCurso = document.querySelector('#AdicionarCurso');
const tbody = document.querySelector('tbody');
AdicionarCurso.addEventListener('click', function(e) {
    e.preventDefault();
    let confirmacao=true;
    if (tbody.childElementCount !== 3) {
        for (let i = 0; i < tbody.childElementCount; i++) {
            let c = select.value+'\tSubir\tDescer';
            if (tbody.children[i].outerText === c) {
                confirmacao=false;
            }
        }
        if (confirmacao) {
            tbody.innerHTML += `<tr><td>${select.value}</td><td><button id="subir">Subir</button></td><td><button id="descer">Descer</button></td></tr>`;
        }
    }
});

tbody.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        if (e.target.id === 'subir') {
            const local = e.target.parentElement.parentElement.firstElementChild.outerText;
            if (local !== tbody.firstElementChild.firstElementChild.outerText) {
                let i = 0;
                while (local !== tbody.children[i].children[0].outerText) {
                    i++;
                }
                if (tbody.childElementCount === 3) {
                    if (local===tbody.lastElementChild.firstElementChild.outerText) {
                        let troca = tbody.children[i-1];
                        let temp = troca.firstElementChild.outerText;
                        troca.remove();
                        tbody.innerHTML += `<tr><td>${temp}</td><td><button id="subir">Subir</button></td><td><button id="descer">Descer</button></td></tr>`;
                    }
                    else{
                        let troca = tbody.children[i-1];
                        let temp = troca.firstElementChild.outerText;
                        const troca1 = tbody.lastElementChild;
                        troca.remove();
                        troca1.remove();
                        tbody.innerHTML += `<tr><td>${temp}</td><td><button id="subir">Subir</button></td><td><button id="descer">Descer</button></td></tr>`;
                        temp = troca1.firstElementChild.outerText;
                        tbody.innerHTML += `<tr><td>${temp}</td><td><button id="subir">Subir</button></td><td><button id="descer">Descer</button></td></tr>`;
                    }
                }
                else {
                    let troca = tbody.children[i-1];
                    let temp = troca.firstElementChild.outerText;
                    troca.remove();
                    tbody.innerHTML += `<tr><td>${temp}</td><td><button id="subir">Subir</button></td><td><button id="descer">Descer</button></td></tr>`;
                }
            }
        }
        if (e.target.id === 'descer') {
            const local = e.target.parentElement.parentElement.firstElementChild.outerText;
            if (local !== tbody.lastElementChild.firstElementChild.outerText) {
                let i = 0;
                while (local !== tbody.children[i].children[0].outerText) {
                    i++;
                }
                console.log(troca)
                if (tbody.childElementCount === 3) {
                    if (local===tbody.firstElementChild.firstElementChild.outerText) {
                        let troca = tbody.children[i+1];
                        console.log(troca)
                        let temp = troca.firstElementChild.outerText;
                        troca.remove();
                        tbody.innerHTML += `<tr><td>${temp}</td><td><button id="subir">Subir</button></td><td><button id="descer">Descer</button></td></tr>`;
                    }
                    else{
                        let troca = tbody.children[i+1];
                        let temp = troca.firstElementChild.outerText;
                        const troca1 = tbody.lastElementChild;
                        troca.remove();
                        troca1.remove();
                        tbody.innerHTML += `<tr><td>${temp}</td><td><button id="subir">Subir</button></td><td><button id="descer">Descer</button></td></tr>`;
                        temp = troca1.firstElementChild.outerText;
                        tbody.innerHTML += `<tr><td>${temp}</td><td><button id="subir">Subir</button></td><td><button id="descer">Descer</button></td></tr>`;
                    }
                }
            }
        }
    }
});
