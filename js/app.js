$(document).ready(function() {

  //Elementos
  var name = $('#name');
  var nameUser = $('#name-user');
  var textPost = $('#text-post');
  var send = $('#send-twett');
  var containerPost = $('#container-post');
  var containerNewPost = $('.container-new-post');
  var icons = $('.icons');

  //Evento del botón send
  $(send).on('click', function() {
    //creamos elementos nuevos
    var post = $(textPost).val();
    var line = '<div class="divider"></div>';
    var hour = '<div clas="row">' + moment().format('LLL') + '</div>';
    var infoUser = 
      '<div class="row card">' +
        '<div class="col s3 l3">' +
          '<img src="assets/images/user.png" alt="foto del usuario" class="responsive-img">' +
        '</div>' + 
        '<div class="col s9 l9">' +
            '<p class="black-text" id="name">Molly Greace' +
              '<p class="grey-text text-darken-2" id="name-user">@MollyGreace</p>' + hour +
            '</p>' +
          '</div>';   
    var textTwett = '<p class="row flow-text text-post">' + post + '</p>';
    var buttons = 
      '<div class="row">' +
        '<span class="col s3">' +
          '<i class="material-icons">comment</i>0</span>' +
        '<span class="col s3">' +
          '<i class="material-icons">share</i>0</span>' +
        '<span class="col s3">' +
          '<i class="material-icons">favorite_border</i>0</span>' +
        '<span class="col s3">' +
         '<i class="material-icons">mail_outline</i>0</span>' +
      '</div></div>';
    
    //creamos la condición
    if ($(textPost).val()) {
      var containerNewPost = '<div class="section>' + line + infoUser + textTwett + buttons + '</div>';

      $(containerPost).prepend(containerNewPost);
      $(containerNewPost).before(line);

      $(textPost).val('');
      $(textPost).focus();
    }
    
  });

  // $(icons).on('click', function() {
  //   //event.preventDefault();
  //   $(this).attr('class', 'blue-text');
  //   $('.number');
  // });
  
});