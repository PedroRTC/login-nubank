

let cartao_nubank=document.querySelector(".cartao_nubank")


function mostraCartao(){
    cartao_nubank.addEventListener("click",versoCartao)

    function versoCartao(){
        cartao_nubank.style.transform="rotateY(180deg)"
        setTimeout(() => {
            cartao_nubank.scrollBy(300,0)
        }, 500);
        cartao_nubank.removeEventListener("click",versoCartao)
        cartao_nubank.addEventListener("click",frenteCartao)

    }

    function frenteCartao(){
        cartao_nubank.style.transform="rotateY(0deg)"
        setTimeout(() => {
            cartao_nubank.scrollBy(-300,0)
        }, 500);
        cartao_nubank.addEventListener("click",versoCartao)
        cartao_nubank.removeEventListener("click",frenteCartao)

    }
}

mostraCartao()