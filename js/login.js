document.getElementById('btn-submit').addEventListener('click', function(){
  // console.log('submit button clicked');

  const emailField = document.getElementById('user-email');
  const email = emailField.value;

  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;


  if(email === 'mdjamilurrahman092@gmail.com' && password === 'secret'){
    window.location.href = 'bank.html';
  }
  else{
       alert('tui password vule gecos!! Toke ami tejjo sontan gosona korlam')
  }
})

