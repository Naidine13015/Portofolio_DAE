// script.js

// Défilement fluide pour les liens d'ancrage
$(document).ready(function(){
  $("a.nav-link").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
          scrollTop: $(hash).offset().top - 60
      }, 800, function(){
          window.location.hash = hash;
      });
    }
  });
});
