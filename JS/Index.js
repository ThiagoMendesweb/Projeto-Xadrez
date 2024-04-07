function validateForm() {
    var nome = document.getElementById('nome').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Verifica se o campo Nome contém apenas letras
    if (!nome.match(/^[A-Za-zÀ-ú\s]+$/)) {
      document.getElementById('firstNameError').innerHTML = 'Por favor, insira apenas letras.';
      return false;
    } else {
      document.getElementById('firstNameError').innerHTML = '';
    }

    // Verifica se o campo E-mail está preenchido corretamente
    if (!email.match(/\S+@\S+\.\S+/)) {
      document.getElementById('emailError').innerHTML = 'Por favor, insira um e-mail válido.';
      return false;
    } else {
      document.getElementById('emailError').innerHTML = '';
    }

    // Verifica se o campo Telefone está preenchido corretamente
    if (!phone.match(/^\d{10,11}$/)) {
      document.getElementById('phoneError').innerHTML = 'Por favor, insira um número de telefone válido (10 ou 11 dígitos).';
      return false;
    } else {
      document.getElementById('phoneError').innerHTML = '';
    }
    return true;
  }