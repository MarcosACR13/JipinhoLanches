
const modalTodo = document.querySelector('#transacoes')
const modal = document.querySelector('#modal')
const transacaoPai = document.querySelector(".transacoes-lista")

let produtos = []
let saldos = []


const numberToReais = (numero) => {
    const numeroBruto = parseFloat(numero) < 0 ? -1 * parseFloat(numero) : parseFloat(numero)
    const sinal = parseFloat(numero) < 0 ? '-' : ''
    const numeroFim = parseFloat(numeroBruto).toFixed(2).split('.');
    numeroFim[0] = "R$ " + numeroFim[0].split(/(?=(?:...)*$)/).join('.');

    const re = {
        numero: numeroFim.join(','),
        sinal: sinal
    }
    return re;
}

const DadosSaldos = async () => {
    /* const data = {
         data: currentDay()
     };
     */
     await fetch('http://marcos.jipinholanches.com.br/allTransacoes.php', {
         method: 'POST'
         //body: JSON.stringify(data)
     })
         .then(res => res.json())
         .then(res => {saldos = []; saldos.push(res)});
 
     saldos = saldos[0]
 }
 

const attCards = async () => {

    await DadosSaldos()

    const inMoney = saldos.filter(item => item.tipo == 'r')[0].valor
    const outMoney = saldos.filter(item => item.tipo == 'c')[0].valor
    const total = numberToReais(inMoney - outMoney)

    const cards = document.querySelectorAll('[tipo]')

    cards[0].children[1].innerHTML = numberToReais(inMoney).numero
    cards[1].children[1].innerHTML = numberToReais(outMoney).numero
    cards[2].children[1].innerHTML = total.sinal == '-'? total.sinal + ' ' + total.numero : total.numero
}

const preencheListagem = (transacao) => {
   const html = produtos.map(elem => `
        <div class="card-mini ${elem.tipo}" id="${elem.id}">
            <div  id='${elem.id}'>
                <h6>${elem.dataInclusao}</h6>
                <span> </span>
                <h6>${elem.descricao}</h6>
                <span> </span>
                <h6>${elem.valor}</h6>
            </div>
            <button class="delete" onclick=removeTransacao(${elem.id})>X</button>
        </div>`).join(' ');
    transacaoPai.innerHTML = ''
    transacaoPai.innerHTML = html;
}

const renderTransaction = () => {
    attCards()
    preencheListagem(produtos)
}

const dados = async (dataApura) => {
    const data = {
        data: currentDay()
    };

    await fetch('http://marcos.jipinholanches.com.br/transacoes.php', {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {produtos = []; produtos.push(res)});

    produtos = produtos[0]
}


const inicia = async () => {
    await dados()
    renderTransaction()
}


const delete_ = async ID => {
    const data = {
        id: ID
    };

    await fetch('http://marcos.jipinholanches.com.br/delete.php', {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => res);
    await inicia()
}


const removeTransacao = async ID => {
    if(!!!produtos.find(elem =>  elem.id == ID)) {return} //Se não existir retorna.
    await delete_(ID)
}
    inicia()
