//=include src/js/user/base.js

$(document).ready(function() {
  $('.ui.form').form({
    fields: {
      email: {
        identifier  : 'email',
        rules: [
        {
          type   : 'email',
          prompt : 'Por favor, informe um email válido'
        }
        ]
      }
    }
  });
});

