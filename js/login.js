document.getElementById('btn-submit').addEventListener('click', function(){
  // console.log('submit button clicked');

  const emailField = document.getElementById('user-email');
  const email = emailField.value;

  const passwordField = document.getElementById('user-password');
  const password = passwordField.value;


  if(email === 'sontan@baap.com' && password === 'secret'){
    console.log('valid user')
  }
  else{
    console.log('invalid user')
  }
})

