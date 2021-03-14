
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function validateForm() {
  var w = document.forms["kickboxing"]["name"].value;
  var x = document.forms["kickboxing"]["email"].value;
  var y = document.forms["kickboxing"]["birthday"].value;
  var z = document.forms["kickboxing"]["phone"].value
  if ((w == "")||(x == "")||(y == "")||(z == "")){
    alert("Please fill in the missing entries");
  }
  else {
    alert("Enjoy your free kickboxing lesson! Details will be sent via email");
  }
}
