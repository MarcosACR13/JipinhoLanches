var timer = null;
const dados = {
    "categorias": [
        "SANDUICHES",
        "BEBIDAS",
    ],
    "itens": [
        {
            "id": "15",
            "nome": "OPCAO",
            "descricao": "PAO DE HAMBURGUER, 2 HAMBURGUERES, LOMBO, BACON, 2 OVOS, PRESUNTO, MUSSARELA, ALFACE, TOMATE, MILHO ",
            "categoria": "SANDUICHES",
            "valor": "24"
        },
        {
            "id": "16",
            "nome": "X BACON",
            "descricao": "PAO DE HAMBURGER, HAMBURGUER, BACON, PRESUNTO, MUSSARELA, ALFACE, TOMATE, MILHO E BATA",
            "categoria": "SANDUICHES",
            "valor": "15"
        },
        {
            "id": "17",
            "nome": "X TUDO",
            "descricao": "PAO DE HAMBURGUER, HAMBURGUER, BACON, OVO, PRESUNTO, MUSSARELA, ALFACE, TOMATE, MILHO E BATA",
            "categoria": "SANDUICHES",
            "valor": "16"
        },
        {
            "id": "18",
            "nome": "X EGG",
            "descricao": "PAO DE HAMBURGUER, HAMBURGUER, OVO, PRESUNTO, MUSSARELA, ALFACE, TOMATE, MILHO E BATATA",
            "categoria": "SANDUICHES",
            "valor": "15"
        },
        {
            "id": "19",
            "nome": "X SALADA",
            "descricao": "PAO DE HAMBURGUER, HAMBURGUER, PRESUNTO, MUSSARELA, ALFACE, TOMATE, MILHO E BATATA",
            "categoria": "SANDUICHES",
            "valor": "14"
        },
        {
            "id": "20",
            "nome": "MISTO",
            "descricao": "PAO DE HAMBURGUER, PRESUNTO E MUSSARELA",
            "categoria": "SANDUICHES",
            "valor": "10"
        },
        {
            "id": "21",
            "nome": "BIG LOMBO",
            "descricao": "PAO DE HAMBURGUER, LOMBO, 2 HAMBURGUERES, BACON, OVO, PRESUNTO, MUSSARELA, TOMATE, ALFACE, MILHO E B",
            "categoria": "SANDUICHES",
            "valor": "22"
        },
        {
            "id": "22",
            "nome": "X LOMBO",
            "descricao": "PAO DE HAMBURGUER, LOMBO, BACON, OVO, PRESUNTO, MUSSARELA, ALFACE, TOMATE, MILHO E BATATA",
            "categoria": "SANDUICHES",
            "valor": "20"
        },
        {
            "id": "23",
            "nome": "X LOMBO EGG",
            "descricao": "PAO DE HAMBURGUER, LOMBO, OVO, PRESUNTO, MUSSARELA, ALFACE, TOMATE, MILHO E BATATA",
            "categoria": "SANDUICHES",
            "valor": "19"
        },
        {
            "id": "24",
            "nome": "X LOMBO BACON",
            "descricao": "PAO DE HAMBURGUER, LOMBO, BACON, PRESUNTO, MUSSARELA, ALFACE, TOMATE, MILHO E BATATA",
            "categoria": "SANDUICHES",
            "valor": "18"
        },
        {
            "id": "25",
            "nome": "X LOMBO SALDA",
            "descricao": "PAO DE HAMBURGUER, LOMBO, PRESUNTO, MUSSARELA, ALFACE, TOMATE, MILHO E BATATA",
            "categoria": "SANDUICHES",
            "valor": "17"
        },
        {
            "id": "26",
            "nome": "BIG FRANGO",
            "descricao": "PAO DE HAMBURGUER, FILE DE FRANGO, 2 HAMBURGUERES, OVO, BACON, PRESUNTO, MUSSARELA, ALFACE, TOMATE, ",
            "categoria": "SANDUICHES",
            "valor": "22"
        },
        {
            "id": "27",
            "nome": "X FRANGO",
            "descricao": "PAO DE HAMBURGUER, FILE DE FRANGO, OVO, BACON, PRESUNTO, MUSSARELA, ALFACE, TOMATE, MILHO E BATATA",
            "categoria": "SANDUICHES",
            "valor": "20"
        },
        {
            "id": "28",
            "nome": "X FRANGO BACON",
            "descricao": "PAO DE HAMBURGUER, FILE DE FRANGO, BACON, PRESUNTO, MUSSARELA, ALFACE, TOMATE, MILHO E BATATA",
            "categoria": "SANDUICHES",
            "valor": "19"
        },
        {
            "id": "29",
            "nome": "X FRANGO EGG",
            "descricao": "PAO DE HAMBURGUER, FILE DE FRANGO, OVO, PRESUNTO, MUSSARELA, ALFACE, TOMATE, MILHO E BATATA",
            "categoria": "SANDUICHES",
            "valor": "18"
        },
        {
            "id": "30",
            "nome": "X FRANGO SALADA",
            "descricao": "PAO DE HAMBURGUER, FILE DE FRANGO, PRESUNTO, MUSSARELA, ALFACE, TOMATE, MILHO E BATATA",
            "categoria": "SANDUICHES",
            "valor": "17"
        },
        {
            "id": "31",
            "nome": "FILE DE TILAPIA",
            "descricao": "",
            "categoria": "PORCOES",
            "valor": "28"
        },
        {
            "id": "32",
            "nome": "LOMBO",
            "descricao": "",
            "categoria": "PORCOES",
            "valor": "30"
        },
        {
            "id": "33",
            "nome": "CALABRESA",
            "descricao": "",
            "categoria": "PORCOES",
            "valor": "25"
        },
        {
            "id": "34",
            "nome": "BATATA, BACON E QUEIJO",
            "descricao": "",
            "categoria": "PORCOES",
            "valor": "25"
        },
        {
            "id": "35",
            "nome": "REFRI LATA",
            "descricao": "",
            "categoria": "BEBIDAS",
            "valor": "5"
        },
        {
            "id": "36",
            "nome": "REFRI 600ML",
            "descricao": "",
            "categoria": "BEBIDAS",
            "valor": "7"
        },
        {
            "id": "37",
            "nome": "REFRI 2L",
            "descricao": "",
            "categoria": "BEBIDAS",
            "valor": "10"
        },
        {
            "id": "39",
            "nome": "SKOL LATA",
            "descricao": "",
            "categoria": "BEBIDAS ALCOOLICAS",
            "valor": "5"
        },
        {
            "id": "40",
            "nome": "SKOL GARRAFA",
            "descricao": "",
            "categoria": "BEBIDAS ALCOOLICAS",
            "valor": "8"
        },
        {
            "id": "41",
            "nome": "ANTARCTICA ORIGINAL GARRAFA",
            "descricao": "",
            "categoria": "BEBIDAS ALCOOLICAS",
            "valor": "8"
        },
        {
            "id": "42",
            "nome": "BRAHMA LATA",
            "descricao": "",
            "categoria": "BEBIDAS ALCOOLICAS",
            "valor": "4"
        },
        {
            "id": "43",
            "nome": "BRAHMA GARRAFA",
            "descricao": "",
            "categoria": "BEBIDAS ALCOOLICAS",
            "valor": "8.5"
        },
        {
            "id": "44",
            "nome": "AGUA MINERAL 500ML",
            "descricao": "",
            "categoria": "BEBIDAS",
            "valor": "2"
        },
        {
            "id": "45",
            "nome": "VODKA DOSE",
            "descricao": "",
            "categoria": "DOSE",
            "valor": "6"
        },
        {
            "id": "46",
            "nome": "MONTILLA",
            "descricao": "",
            "categoria": "DOSE",
            "valor": "4"
        },
        {
            "id": "47",
            "nome": "JURUBEBA",
            "descricao": "",
            "categoria": "DOSE",
            "valor": "2"
        },
        {
            "id": "48",
            "nome": "CATUABA",
            "descricao": "",
            "categoria": "DOSE",
            "valor": "2"
        },
        {
            "id": "49",
            "nome": "PARA TUDO",
            "descricao": "",
            "categoria": "DOSE",
            "valor": "2"
        },
        {
            "id": "50",
            "nome": "IPIOCA",
            "descricao": "",
            "categoria": "DOSE",
            "valor": "2"
        },
        {
            "id": "51",
            "nome": "CONHAQUE",
            "descricao": "",
            "categoria": "DOSE",
            "valor": "2"
        },
        {
            "id": "52",
            "nome": "NATU NOBILIS",
            "descricao": "",
            "categoria": "DOSE",
            "valor": "5"
        },
        {
            "id": "53",
            "nome": "PASSPORT",
            "descricao": "",
            "categoria": "DOSE",
            "valor": "7"
        },
        {
            "id": "54",
            "nome": "PINGA",
            "descricao": "",
            "categoria": "DOSE",
            "valor": "1"
        },
        {
            "id": "55",
            "nome": "CAMPARI",
            "descricao": "",
            "categoria": "DOSE",
            "valor": "5"
        }
    ]
}


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
    var mensagem = 'https://api.whatsapp.com/send?phone=5537988414107';
    window.open(mensagem, '_blank');
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

    categorias = dados['categorias']

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

    
    criaItens(dados)
    AlterCategoria("SANDUICHES");

    //<li class='menu-pedidos button-active col-auto' onclick='AlterCategoria(\"$categoria\")' id='BTN-$categoria'> $categoria</li>
}




criaCategorias();


