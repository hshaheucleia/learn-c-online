//var fakeDelay = function(callback) { setTimeout(callback, 2000); };

var converter = new Showdown.converter();

$('#result').hide();

var loadPage = function(file) {
  $('#page-content').empty();
  $('#page-content').addClass('loading');

  $.get('/static/content/' + file + '.md', function(data) {
    var htmlContent = converter.makeHtml(data);
    $('#page-content').removeClass('loading');
    $('#page-content').hide();
    $('#page-content').html(htmlContent);
    $('#page-content').fadeIn();
  });
};

$.getJSON('/static/content/index.json', function(data) {
  var files = [];
  var chapters = data.chapters;


  var toLoad = data.chapters[0].file;

  var len = chapters.length;
  for (var i = 0; i !== len; ++i) {
    $('#chapters-menu').append(
      $('<li>').append(
        $('<a>')
          .text(chapters[i].title)
          .attr('href', '#' + chapters[i].file)
      ).addClass('chapter-menu-item')
    );

    if ('#' + chapters[i].file === document.location.hash) {
      toLoad = chapters[i].file;
    }
  }

  $('.chapter-menu-item').on('click', function() {
    var file = $(this).find('a').attr('href').substr(1);
    document.location.hash = '#' + file;
    loadPage(file);
    return false;
  });

  loadPage(toLoad);
});

var editor = CodeMirror.fromTextArea($('#code-editor')[0], {
  mode: "text/x-csrc",
  indentUnit: 3,
  smartIndent: true,
  indentWithTabs: false,
  tabSize: 3,
  extraKeys: {
    Tab: function(cm) {
      var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
      cm.replaceSelection(spaces, "end", "+input");
    }
  }
});

$('#try-button').click(function() {

  $('#result').slideDown();

                                                               
    if ('#' + chapters[i].file === document.location.hash) {                    
      toLoad = chapters[i].file;                                                
    }                                                                           
  }                                                                             
                                                                                
  $('.chapter-menu-item').on('click', function() {                              
    var file = $(this).find('a').attr('href').substr(1);                        
    document.location.hash = '#' + file;                                        
    loadPage(file);                                                             
    return false;                                                               
  });                                                                           
                                                                                
  loadPage(toLoad);                                                             
});                                                                             
                                                                                
var editor = CodeMirror.fromTextArea($('#code-editor')[0], {                    
  mode: "text/x-csrc",                                                          
  indentUnit: 3,                                                                
  smartIndent: true,                                                            
  indentWithTabs: false,                                                        
  tabSize: 3,                                                                   
  extraKeys: {                                                                  
    Tab: function(cm) {                                                         
      var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");             
      cm.replaceSelection(spaces, "end", "+input");                             
    }                                                                           
  }                                                                             
});                                                                             
                                                                                
$('#try-button').click(function() {                                             
                                                                                
  $('#result').slideDown();                                                     
                                                                                
  $.ajax({
            type: "POST",
            url: "http://powerful-eyrie-7882.herokuapp.com/api/code/submit",
            // The key needs to match your method's input parameter (case-sensitive).
            data: JSON.stringify({code: editor.getValue() }),
            contentType: "application/json",
            dataType: "json",
            success: function(data) {
                // Evaluate.
                eval(data['result']);
                // Run the respective program
                $('#result').text(Program({}).run().stdout);
            },
            failure: function(errMsg) {
            alert(errMsg);
  }});

  
});
