// quando passo il mouse sopra
$('.relative_item').mouseenter(function(){
  // aggiungo la classe open_dropdown al figlio .dropdown_container e .dropdown_container_giant
  $(this).find('.dropdown_container').addClass('open_dropdown');
  $(this).find('.dropdown_container_giant').addClass('open_dropdown');
});

// quando tolgo il mouse
$('.relative_item').mouseleave(function(){
  // aggiungo la classe open_dropdown al figlio .dropdown_container e .dropdown_container_giant
  $(this).find('.dropdown_container').removeClass('open_dropdown');
  $(this).find('.dropdown_container_giant').removeClass('open_dropdown');

});

// quando clicco
$('.relative_item').click(function(){
  // aggiungo e tolgo la classe open_dropdown al figlio .dropdown_container e .dropdown_container_giant
  $(this).find('.dropdown_container').toggleClass('open_dropdown');
  $(this).find('.dropdown_container_giant').toggleClass('open_dropdown');
});
