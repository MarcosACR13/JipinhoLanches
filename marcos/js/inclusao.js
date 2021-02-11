

const form = document.querySelector('form')


const currentDay = (data = new Date()) => {
    var data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        ano = data.getFullYear();
    return ano + mes + dia;
}


const clearForm = () => {
    const descricao = document.querySelectorAll('form > div > div')[0]
    const swit = document.querySelector('#tipo')
    const valor = document.querySelectorAll('form > div > div')[2]

    descricao.children[0].value = 'teste'
    descricao.children[0].classList.remove('valid')
    descricao.children[0].classList.remove('validate')
    descricao.children[1].classList.remove('active')

    valor.children[0].value = 3335
    valor.children[0].classList.remove('valid')
    valor.children[0].classList.remove('validate')
    valor.children[1].classList.remove('active')

    swit.checked = false
}

const validaForm = () => {
    const descricao = document.querySelectorAll('form > div > div')[0]
    const valor = document.querySelectorAll('form > div > div')[2]

    let v = false
    if (descricao.children[0].value != '' && valor.children[0].value != '') {
        if (parseFloat(valor.children[0].value) > 0) {
            v = true
        }
    }
    return v
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (validaForm() === false) return alert('Erro, preencha os campos');

    const descricao = document.querySelector('#descricao')
    const tipo = document.querySelector('#tipo').checked ? 'r' : 'c'
    const valor = document.querySelector('#valor')

    const data = {
        data: currentDay(),
        descricao: descricao.value,
        tipo: tipo,
        valor: valor.value
    };

    await fetch('http://marcos.jipinholanches.com.br/inclusao.php', {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(() => alert('Houve um erro ao tentar cadastrar, por gentileza cadastrar novamente'));
    
    clearForm()
    await dados()
    attCards()


})



