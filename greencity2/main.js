// Função anônima para evitar variáveis globais.
(function() {
  // Elemento principal do formulário
  const formularioForm = document.getElementById('formulario');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Executa um evento para quando o botão de envio for pressionado.
  formularioForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Valor atual do input 
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;

    // Tamanho em caracteres
    const nameLength = nameValue.length;
    const emailLength = emailValue.length;
    const messageLength = messageValue.length;

    // Mensagem de alerta
    if(nameLength > 7 && emailLength > 0 && messageLength > 20) {
      window.alert(`Sua mensagem foi enviada com sucesso!`);
    } else {
      let message = []

      if(nameLength < 7) {
        message.push('Nome')}
        else (window.alert ('Informe seu nome completo.'))

      if(emailLength < 1 ) {
        message.push('E-mail')
      }

      if(messageLength < 20) {
        message.push('Mensagem')}
        else (window.alert ('A mensagem deve conter pelo menos 20 caracteres.'))
      

      alert(
        `Por favor, preencha os seguintes campos: ${message.join(', ')}.`
      )
    }
  // debugger
});
})();

