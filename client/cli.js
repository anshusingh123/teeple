$('#hahaha').bind('click', function() {
  Drupal.service('node.load',
    {nid: 2, fields: ["nid", "title", "body"]},
      function(status, data) {
        if(status == false) {
          alert("Fatal error: could not load content");
        }
        else {
          $('#content_area').html("<h1><a href=\""+ data.nid + "\">" + data.title +"</a></h1><br /><p>"+ data.body +"</p>");
        }
        }
   );
}
