var timer = null;


window.addEventListener('scroll', function () {
    const menu_pedi_sub = document.querySelector(".menu-pedir")
    const menu_pedi = document.querySelector(".pedir")
    const tela = ((screen.height / 3) * 2)

    if (timer !== null) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        if (window.scrollY > tela) {
            menu_pedi_sub.classList.add("menu-pedir-hover")
        }
        else {
            menu_pedi_sub.classList.remove("menu-pedir-hover")
        }
        {
            if (window.scrollMaxY == window.scrollY) {
                menu_pedi.style.marginBottom = "10vh"
            } else if (window.scrollMaxY >= window.scrollY && menu_pedi.style.marginBottom == "10vh") {
                menu_pedi.style.marginBottom = "15px"
            }
        }


    }, 30);
}, false);

{
    const menu_pedir = document.querySelector(".pedir")

    menu_pedir.addEventListener('mousemove', function () {
        const menu_pedi_sub = document.querySelector(".menu-pedir")
        menu_pedi_sub.classList.remove("menu-pedir-hover")
        console.log("opa")
    });

    menu_pedir.addEventListener('mouseleave', function () {
        const menu_pedi_sub = document.querySelector(".menu-pedir")
        const tela = ((screen.height / 3) * 2)

        if (window.scrollY > tela) {
            menu_pedi_sub.classList.add("menu-pedir-hover")
        }

        console.log("opa")
    });
}

function check() {
    var checkbox = document.getElementById("check");
    var nav_itens = document.getElementById("nav-itens");
    var menu = document.getElementById("menu");

    if (checkbox.checked) {
        menu.classList.add("ola-in");
        menu.classList.remove("ola-out");
        setTimeout(() => {
            menu.style.transform = "translateX(0%)"
        }, 3000);
    } else {
        menu.classList.add("ola-out");
        menu.classList.remove("ola-in");
        setTimeout(() => {
            menu.style.transform = "translateX(-57%)"
        }, 2700);
    }
};

function AlterCategoria(valor) {
    var c = document.getElementById("cardapio-itens");
    var b = document.getElementById("menu-categorias");

    var menu = document.querySelector('#menu-categorias');
    var buttons = document.querySelectorAll('li');

    var i;

    for (i = 0; i < c.children.length; i++) {
        if (c.children[i].getAttribute("name") != valor) {
            c.children[i].classList.add("d-none");
        } else {
            c.children[i].classList.remove("d-none");
        };
    };

    for (j = 0; j < b.children.length; j++) {
        if (b.children[j].getAttribute("id") == "BTN-" + valor) {
            b.children[j].classList.add("button-active");
        } else {
            b.children[j].classList.remove("button-active");
        };
    };
};

function pedir() {
    var mensagem = 'https://api.whatsapp.com/send?phone=5537988414107&text=BOA NOITE, GOSTARIA DE';
    var mensagem2;
    var i;

    var paipai = document.getElementById("Cardapio");

    for (var x = 0; x < paipai.children.length; x++) {
        var pai = document.getElementById(paipai.children[x].id);

        for (var i = 0; i < pai.children.length; i++) {
            var pai_2 = pai.children[i];
            if (pai_2.tagName == "DIV") {
                if (pai_2.children[3].value != 0) {
                    if (mensagem == 'https://api.whatsapp.com/send?phone=5537988414107&text=Boa noite, gostaria de: ') {
                        mensagem = mensagem + ": " + pai_2.children[3].value + " " + pai_2.children[0].innerText;
                    } else {
                        mensagem = mensagem + ", " + pai_2.children[3].value + " " + pai_2.children[0].innerText;
                    };
                };
            };
        };
    };
    var endereco_ = prompt("Por favor, digite o endereço de entrega", "EX: RUA GABRIEL TENENTE, 183");
    if (endereco_ != "EX: RUA GABRIEL TENENTE, 183") {
        mensagem = mensagem + " NO ENDEREÇO: " + endereco_.toUpperCase();
    } else {
        alert("Digite um endereço");
        exit;
    }

    var troco_ = prompt("Será necessario troco?\nPara maquina de cartão deixar em branco", "");

    if (troco_ == "") {
        mensagem = mensagem + " E MAQUINA DE CARTAO";
    } else {
        mensagem = mensagem + " E TROCO PARA: R$" + troco_;
    };

    window.open(mensagem, '_blank');
};

function teste() {
    var menu = document.getElementById("menu-pai");
    menu
}


var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        var status = xhr.status;
        if (status === 200) {
            //Callback caso de tudo certo
            callback(null, xhr.response);
        } else {
            //Callback caso de algum erro
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

const criaItens = (dados) => {
    const itens = document.querySelector('#cardapio-itens')

    dados = dados['itens']
    itens.innerHTML =

        ` ${dados.map(item => `
            <div class='card col-10 col-sm-4 col-md-3 col-lg-3' id='${item['nome']}' name='${item['categoria']}'>
                <h3>${item['nome']}</h3>
                <p>${item['descricao']} </p>
                <p>R$ ${item['valor']} </p>
                <input type='number' id='pedir-${item['nome']}' value='0' min='0' max='15' style='height: 15pt;width: 50px;'>
            </div>
            <br>`).join('')}`;


}


const criaCategorias = () => {
    const menu = document.querySelector('#menu-categorias')


    getJSON('dados.json', function (err, data) {
        if (err !== null) {
            console.log('Ocorreu um erro' + err);
        } else {

            categorias = data['categorias']

            //cria os botoes
            categorias.map(categoria => {
                const li = document.createElement('li')
                // console.log(t)
                li.setAttribute('class', 'menu-pedidos button-active col-auto')
                li.setAttribute('onclick', `AlterCategoria('${categoria}')`)
                li.setAttribute('id', `BTN-${categoria}`)
                li.appendChild(
                    document.createTextNode(categoria)
                )
                ///<li class='' onclick='AlterCategoria(\"$categoria\")' id='BTN-$categoria'> $categoria</li>
                menu.append(li)
            })

            AlterCategoria("SANDUICHES");

            criaItens(data)

        }
    });


    //<li class='menu-pedidos button-active col-auto' onclick='AlterCategoria(\"$categoria\")' id='BTN-$categoria'> $categoria</li>
}




criaCategorias();


