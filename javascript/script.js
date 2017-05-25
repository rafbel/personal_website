/*function resizeDivs(){
    var maxHeight = 0;
    $(".eduThumbnails").each(function(){ 
        if ($(this).height() > maxHeight){
            maxHeight = $(this).height();
        }
    });
  $(".eduThumbnails").each(function(){ 
      $(this).height(maxHeight);
  });
    //$('body').append("max height:  " + maxHeight + '<br>');
}

$(window).resize(function() {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(resizeDivs, 250);
}); 

//$(window).ready(resizeDivs);*/