//=include src/js/base.js
//=include dist/semantic/components/visibility.min.js
//=include dist/semantic/components/api.min.js
//=include dist/semantic/components/dropdown.min.js
//=include dist/semantic/components/calendar.min.js
//=include dist/semantic/components/popup.min.js


$(document).ready(function() {
  $('#id_sex').dropdown();
  $('#id_schooling').dropdown();
  $('#id_occupation').dropdown({
    onChange: function(value, text, $selectedItem) {
      if (value == 0 || value == 3) {
        $('#profession-dropdown').dropdown('clear');
        $('#profession-dropdown').addClass('disabled');
      } else {
        $('#profession-dropdown').removeClass('disabled');
      }
    }
  });

  $('#profession-dropdown').dropdown({
    apiSettings: {
      action: 'get profession'
    }
  });

  $('#country-dropdown').dropdown({
    apiSettings: {
      action: 'get country'
    },
    onChange: function(value, text, $selectedItem) {
      $('#region-dropdown').dropdown('clear');
      $('#city-dropdown').dropdown('clear');
    }
  });

  $('#region-dropdown').dropdown({
    apiSettings: {
      action: 'get region',
      beforeSend: function(settings) {
        settings.urlData.country = $('#country-dropdown').dropdown('get value');
        return settings;
      },
    },
    onChange: function(value, text, $selectedItem) {
      $('#city-dropdown').dropdown('clear');
    }
  });

  $('#city-dropdown').dropdown({
    apiSettings: {
      action: 'get city',
      beforeSend: function(settings) {
        settings.urlData.region = $('#region-dropdown').dropdown('get value');
        return settings;
      }
    }
  });
});
