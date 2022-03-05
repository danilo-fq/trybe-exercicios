const submitButton = document.getElementById('send');


  submitButton.addEventListener('click', (event) => {
    const checkedInput2 = document.querySelector('#term-2').checked;
    if (checkedInput2 === true) {
      
    } else {
      
    
    } 
  })

  function charactersLimitChecker(event) {
    const checkedInput2 = document.querySelector('#term-2').checked;
    const nameInputCharacters = document.getElementById('name-input').value;
    const emailInputCharacters = document.getElementById('email-input').value;
    const descriptionTextAreaCharacters = document.getElementById('description').value;
    
    if (nameInputCharacters.length < 10 || nameInputCharacters.length > 40 || checkedInput2 === false) {
      console.log('Caracteres do nome:', nameInputCharacters.length);
      alert('Dados Inválidos');
      event.preventDefault();
    
    } else if (emailInputCharacters.length < 10 || emailInputCharacters.length > 50 || checkedInput2 === false) {
      console.log('Caracteres do email:', emailInputCharacters.length);
      alert('Dados Inválidos');
      event.preventDefault();

    } else if (descriptionTextAreaCharacters.length > 500 || descriptionTextAreaCharacters.length === 0 || checkedInput2 === false) {
      console.log('Caracteres da descrição:', descriptionTextAreaCharacters.length);
      alert('Dados Inválidos');
      event.preventDefault();

    } else {
      console.log('Caracteres da descrição:', descriptionTextAreaCharacters.length);
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }

  submitButton.addEventListener('click', charactersLimitChecker)

