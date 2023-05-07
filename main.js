
async function PuxaCeps(cepDigitado){

    var MensagemErro = document.querySelector(".MensagemErro")
    var container = document.querySelector(".container")

    try {
        var CEP = await fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
        var CEPconvertido = await CEP.json() 

        if(CEPconvertido.erro){
            throw Error ("Ops, este CEP não existe!")
        }

//-> Elementos para modificar
        var cidade = document.querySelector(".campo-cidade")
        var complemento = document.querySelector(".campo-complemento")
        var bairro = document.querySelector(".campo-bairro")
        var endereco = document.querySelector(".campo-endereco")
        var uf = document.querySelector(".campo-uf")
        var ddd = document.querySelector(".campo-ddd")

        cidade.value = CEPconvertido.localidade
        complemento.value = CEPconvertido.complemento
        bairro.value = CEPconvertido.bairro
        endereco.value = CEPconvertido.logradouro
        uf.value = CEPconvertido.uf
        ddd.value = CEPconvertido.ddd

//-> Fim

        MensagemErro.innerHTML = `Processamento concluido!`
        MensagemErro.style.color = "green"
        MensagemErro.style.padding = "5px 0"
        container.style.height = "415px"

        console.log(CEPconvertido)
        return CEPconvertido

    } catch (erro) {
        MensagemErro.innerHTML = `${erro}`
        MensagemErro.style.color = "#ff000070"
        MensagemErro.style.padding = "5px 0"
        container.style.height = "415px"

        alert("Verifique o CEP e tente novamente!")
    }
    
    

}

var cepDigitado = document.querySelector(".campo-CEP")

cepDigitado.addEventListener("focusout", ()=>PuxaCeps(cepDigitado.value));