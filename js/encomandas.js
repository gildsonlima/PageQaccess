const botaoSalvar = document.querySelector('#botaoSalvarEncomenda');
const corpoTabela = document.querySelector('#corpoTabelaEncomenda');
const nome = document.querySelector('#nomeRemetente');
const codigo = document.querySelector('#codigo');
const unidade = document.querySelector('#unidade');

botaoSalvar.addEventListener('click', () => {
    criarLinha(nome,codigo,unidade);
});


function criarLinha(nome,codigo,unidade){

let linha = document.createElement("tr")
let coluna1 = document.createElement("td");
let coluna2 = document.createElement("td");
let coluna3 = document.createElement("td");
let coluna4 = document.createElement("td");
let coluna5 = document.createElement("td");

coluna1.classList.add("text-center")
coluna2.classList.add("text-nowrap", "text-center")
coluna3.classList.add("text-center")
coluna4.classList.add("text-center")
coluna5.classList.add("d-flex", "justify-content-around")

coluna1.textContent = 'Pendente';
coluna2.textContent = nome.value;
coluna3.textContent = unidade.value;
coluna4.textContent = codigo.value;

let botaoEntregar = document.createElement("a")
botaoEntregar.setAttribute('href','')
botaoEntregar.innerHTML = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#2AC827" class="bi bi-check-circle" viewBox="0 0 16 16">',
    '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>',
    '<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>',
    '</svg>'
]
let botaoEditar = document.createElement("a");
botaoEditar.setAttribute('href','');
botaoEditar.innerHTML = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#104DEA" class="bi bi-pencil-square" viewBox="0 0 16 16">',
    '<path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>',
    '<path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>',
    '</svg>'
]
let botaoExcluir = document.createElement("a");
botaoExcluir.setAttribute('href','');
botaoExcluir.innerHTML = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#C81313" class="bi bi-trash" viewBox="0 0 16 16">',
    '<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>',
    '<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>',
    '</svg>'
]

coluna5.appendChild(botaoEntregar)
coluna5.appendChild(botaoEditar)
coluna5.appendChild(botaoExcluir)

linha.appendChild(coluna1)
linha.appendChild(coluna2)
linha.appendChild(coluna3)
linha.appendChild(coluna4)
linha.appendChild(coluna5)

corpoTabela.appendChild(linha)

}