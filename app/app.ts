import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller =  new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
    })
} else {
    throw Error("Não foi possivel inicializar a aplicação. Verifique se o form existe")
};  

const botaoImport = document.querySelector('#botao-import');

if(botaoImport) {
    botaoImport.addEventListener('click', () => {
        controller.importaDados()
    })
} else {
    throw Error('Botão import não foi encontrado')
}