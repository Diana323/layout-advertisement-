$('.menu-btn').on('click', function(event){
  event.preventDefault();
  $(this).toggleClass('menu-btn_active');
});