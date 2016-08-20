//=include src/vendor/jquery/jquery-3.1.0.min.js
//=include dist/semantic/components/form.min.js
//=include dist/semantic/components/transition.min.js
//=include dist/semantic/components/checkbox.min.js

$(document).ready(function() {
  $('.ui.form').form({
    fields: {
      email: {
        identifier  : 'login',
        rules: [
        {
          type   : 'email',
          prompt : 'Por favor, informe um email válido'
        }
        ]
      },
      password: {
        identifier  : 'password',
        rules: [
        {
          type   : 'length[6]',
          prompt : 'Sua senha deve possuir pelo menos 6 caracteres'
        }
        ]
      }
    }
  });
  $('.ui.checkbox').checkbox();
});
