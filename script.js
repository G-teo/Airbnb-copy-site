$(window).on('scroll', function(){
  var w = $(window).width();
  var h = $(window).scrollTop();
  if(w <= 1200 && h >= 100){
    $('#header-nav').css('display' ,'block');
  }else if(w > 1200){
    $('#header-nav').css('display' ,'block');
  }else{
    $('#header-nav').css('display' ,'none');
  }
});
