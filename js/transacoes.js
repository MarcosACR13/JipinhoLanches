
const modalTodo = document.querySelector('#transacoes')
const modal = document.querySelector('#modal')
const transacaoPai = document.querySelector(".transacoes-lista")

const renderTransaction = () => {
    transacaoPai.innerHTML = ''
    for (let i = 0; i < produtos.length; i++)
        preencheListagem(produtos[i], i)
}

const dados = async (dataApura) => {
    const data = {
        data: dataAtualFormatada()
    };

    produtos = [];

    await fetch('http://marcos.jipinholanches.com.br/transacoes.php', {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => produtos.push(res));

    produtos = produtos[0]
}

const preencheListagem = (transacao) => {
    const classT = transacao.tipo == 'r' ? 'verde' : 'vermelho'

    const div = document.createElement('div')

    div.classList.add('card-mini', classT)

    div.innerHTML = `
        <div id=${transacao.id}>
            <h6>${transacao.dataInclusao}</h6>
            <span> </span>
            <h6>${transacao.descricao}</h6>
            <span> </span>
            <h6>${transacao.valor}</h6>
        </div>
        <button class="delete" onclick=removeTransacao(${transacao.id})>X</button>
    `

    transacaoPai.prepend(div)
}


const inicia = async () => {
    await dados()
    renderTransaction()
}


const removeTransacao = async ID => {
    produtos = produtos.filter(produto => { return produto.id != ID })
    renderTransaction()    

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
    renderTransaction()
}





modalTodo.addEventListener('click', event => {
    const id = event.target.id
    if (id === modalTodo.id) {
        modalTodo.classList.remove('ativo')
        modalTodo.classList.add('inativo')
        modal.setAttribute('status', 'inativo')
    }
})