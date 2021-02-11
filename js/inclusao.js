
let produtos = []
const form = document.querySelector('form')

    function preencheArray(tipo) {
        let aux = []
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].tipo == tipo)
                aux.push(produtos[i].valor)
        }
        return aux;
    }

    function numeroParaReais(numero) {
        var numero = numero.toFixed(2).split('.');
        numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    }

    function sum(tipo1, tipo2) {
        let valores1 = [];
        valores1 = preencheArray(tipo1);
        let valores2 = [];
        valores2 = preencheArray(tipo2);

        const valor1 = valores1.reduce((accumulator, valor) => accumulator + valor, 0)
        const valor2 = valores2.reduce((accumulator, valor) => accumulator + valor, 0)

        return numeroParaReais(valor1-valor2)
    }



    function atualizaCards() {

        const cards = document.querySelectorAll('[tipo]')

        cards[0].children[1].innerHTML = sum(cards[0].getAttribute("tipo"))
        cards[1].children[1].innerHTML = sum(cards[1].getAttribute("tipo"))
        cards[2].children[1].innerHTML = sum(cards[0].getAttribute("tipo"),cards[1].getAttribute("tipo"))

    }

    atualizaCards()

    const dataAtualFormatada = () => {
        var data = new Date(),
            dia  = data.getDate().toString().padStart(2, '0'),
            mes  = (data.getMonth()+1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
            ano  = data.getFullYear();
        return ano+mes+dia;
    }


    const limpaForm = () =>{
        const descricao = document.querySelectorAll('form > div > div')[0]
        const swit = document.querySelectorAll('form > div > div')[1]
        const valor = document.querySelectorAll('form > div > div')[2]
        
        descricao.children[0].value = ''
        descricao.children[0].classList.remove('valid')
        descricao.children[0].classList.remove('validate')
        descricao.children[1].classList.remove('active')

        valor.children[0].value = ''
        valor.children[0].classList.remove('valid')
        valor.children[0].classList.remove('validate')
        valor.children[1].classList.remove('active')

        document.querySelector('#tipo').checked = false
    }

    const validaForm = () =>{
        const descricao = document.querySelectorAll('form > div > div')[0]
        const valor = document.querySelectorAll('form > div > div')[2]

        let v = false
        if(descricao.children[0].value != '' && valor.children[0].value != ''){
            if(parseFloat(valor.children[0].value) > 0) {
                v = true
            }
        }
        return v
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if(validaForm() === false) return alert('Erro, preencha os campos');

        const descricao = document.querySelector('#descricao')
        const tipo = document.querySelector('#tipo').checked? 'r':'c'
        const valor = document.querySelector('#valor')

        const data = {
            data: dataAtualFormatada(),
            descricao: descricao.value,
            tipo: tipo,
            valor: valor.value
        };

        console.log(data)

        fetch('http://marcos.jipinholanches.com.br/inclusao.php', {
          method: 'POST',
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => console.log(res));

        limpaForm()
        

      })



