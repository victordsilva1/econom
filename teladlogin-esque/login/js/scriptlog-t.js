$(document).ready(function () {
  $('#username, #password').on('focus', function () {
    $(this).addClass('animate__animated animate__pulse');
  }).on('blur', function () {
    $(this).removeClass('animate__animated animate__pulse');
  });

  $('#loginBtn').on('click', function (e) {
    e.preventDefault(); // Prevent form submission for demonstration
    $(this).addClass('animate__animated animate__pulse');
    setTimeout(() => {
      $(this).removeClass('animate__animated animate__pulse');
      // Simulate a login attempt
      $('#loginMessage').text('Login bem-sucedido!').addClass('text-success');
      // Continue with form submission or AJAX request here
      window.location.href = "nextPage.html"; // Redirect to another page
    }, 500); // Duration of the pulse animation
  });

  $('#forgotPasswordBtn').on('click', function () {
    $(this).addClass('animate__animated animate__pulse');
    setTimeout(() => {
      $(this).removeClass('animate__animated animate__pulse');
      window.location.href = "forgotPassword.html"; // Redirect to forgot password page
    }, 500); // Duration of the pulse animation
  });

 
  
  
  
  
  });

