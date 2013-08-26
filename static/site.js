//var fakeDelay = function(callback) { setTimeout(callback, 2000); };

var converter = new Showdown.converter();

var loadPage = function(file) {
  $('#page-content').empty();
  $('#page-content').addClass('loading');

  $.get('/static/content/' + file, function(data) {
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

  var len = chapters.length;
  for (var i = 0; i !== len; ++i) {
    console.log(chapters[i]);
    $('#chapters-menu').append(
      $('<li>').append(
        $('<a>')
          .text(chapters[i].title)
          .attr('href', '#' + chapters[i].file)
      ).addClass('chapter-menu-item')
    );
  }

  $('.chapter-menu-item').on('click', function() {
    var file = $(this).find('a').attr('href').substr(1);
    loadPage(file);
    return false;
  });

  loadPage('chapter1.md');
});

var editor = CodeMirror.fromTextArea($('#code-editor')[0], {
  mode: "text/x-csrc"
});
