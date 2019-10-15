//image changer for left side image, triggers from upper left dropbox
$( "#iiy1" ).change(function() {
  $("#ii_image1").attr("src", "images/"+$( "#iiy1" ).val()+"_"+$( "#iix1" ).val()+".png");
});

//image changer for left side image, triggers from lower left dropbox
$( "#iix1" ).change(function() {
  $("#ii_image1").attr("src", "images/"+$( "#iiy1" ).val()+"_"+$( "#iix1" ).val()+".png");
});

//image changer for right side image, triggers from upper right dropbox
$( "#siy2" ).change(function() {
  $("#si_image2").attr("src", "images/"+$( "#siy2" ).val()+"_"+$( "#six2" ).val()+".png");
});

//image changer for right side image, triggers from lower right dropbox
$( "#six2" ).change(function() {
  $("#si_image2").attr("src", "images/"+$( "#siy2" ).val()+"_"+$( "#six2" ).val()+".png");
});
