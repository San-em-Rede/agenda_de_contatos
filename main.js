const form = document.getElementById('form-contato');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMédiaFinal() ;
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    contatos.push(inputNomeContato.value);
    telefones.push(inputTelefoneContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value >= '00 0000 000' ? 'sim' : 'não'}</td>`;
    linha += '<tr>';

    linhas += linha;

    inputNomeContato.value = '';
    inputNomeContato.value = '';

    alert(`Contato: ${inputNomeContato.value} - Telefone: ${inputTelefoneContato.value}`);
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMédiaFinal() {
    console.log(atividades);
    console.log(notas);
}