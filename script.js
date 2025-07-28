function validarLogin() {
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;
  const erro = document.getElementById('erro');

  if (usuario === 'jmgelo' && senha === '2809') {
    window.location.href = 'painel.html';
    return false;
  } else {
    erro.textContent = 'Usuário ou senha inválidos.';
    return false;
  }
}
