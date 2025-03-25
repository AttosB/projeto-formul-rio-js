const campos = document.querySelectorAll('.formulario');
const enviar = document.getElementById('enviar');
let campoObrigatorio = document.querySelectorAll('.campo-obrigatorio');

enviar.addEventListener('click', (envio )=> {
envio.preventDefault();
});

campos.forEach((campos, mensagem) => {
    enviar.addEventListener('click', () => {
        if (campos.value !== "") {
            campos.classList.add('valido');
            campoObrigatorio[mensagem].classList.remove('mensagem-visivel');
        } else {
            campos.classList.remove('valido');
            campos.classList.add('invalido');
            campoObrigatorio[mensagem].classList.add('mensagem-visivel');
        }
    })
})