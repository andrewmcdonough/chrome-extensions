$(document).ready(function() {
  $(".ml5").hide();
  $("#schmabs").hide();
  setTimeout(function() {
    $('.custom').each(function() {
      var username = this.title;
      $(this).append("&nbsp;<a href='http://beta.tribesports.com/users/"+username+"' target='_new'>(profile)</a>");
    });
  }, 3000);
});
