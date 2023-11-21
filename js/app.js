

function comprar () 
{
    let ingresso = document.getElementById("tipo-ingresso").value;
    let quantidade = document.getElementById ("qtd").value;
    if (ingresso == "pista")
    {
        comprarPista(quantidade);
    }

    else if (ingresso == "superior")
    {
        comprarInferior(quantidade);
    }

    else 
    {
        comprarSuperior(quantidade);
    }

}


function comprarPista (qtd)
{
let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
if (qtd > qtdPista) 
    {
    alert('Quantidade indisponível para tipo pista');
    } 
else {
    qtdPista = qtdPista - qtd;
    document.getElementById('qtd-pista').textContent = qtdPista;
    alert('Compra realizada com sucesso!');
     }
}

function comprarSuperior (qtd)
{
let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
if (qtd > qtdSuperior) 
    {
    alert('Quantidade indisponível para tipo pista');
    } 
else {
    qtdSuperior = qtdSuperior - qtd;
    document.getElementById('qtd-superior').textContent = qtdSuperior;
    alert('Compra realizada com sucesso!');
     }
}

function comprarInferior (qtd)
{
let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
if (qtd > qtdInferior) 
    {
    alert('Quantidade indisponível para tipo pista');
    } 
else {
    qtdInferior = qtdInferior - qtd;
    document.getElementById('qtd-inferior').textContent = qtdInferior;
    alert('Compra realizada com sucesso!');
     }
}

