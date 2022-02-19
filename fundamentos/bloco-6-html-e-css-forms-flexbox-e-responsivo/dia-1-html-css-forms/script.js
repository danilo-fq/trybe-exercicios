const submitButton = document.getElementById('send');

  submitButton.addEventListener('click', (event) => {
    const checkedInput2 = document.querySelector('#term-2').checked;
    console.log(checkedInput2);
    if (checkedInput2 === 'true') {
      
    } else {
      event.preventDefault();
      alert('Você não autorizou seus direitos de imagens');
    } 
  })

