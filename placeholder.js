$(document).ready(function(){  

//make HTML5 placeholders work in non supportive browsers
  $("input[placeholder]").each(function(){
    if($(this).val()==""){
     // $(this).addClass('gray');
      $(this).val($(this).attr("placeholder"));
      $(this).focus(function(){
        if($(this).val()==$(this).attr("placeholder")) $(this).val("");
       // $(this).removeClass('gray');
      });
      $(this).blur(function(){
        if($(this).val()==""){
	  // $(this).addClass('gray');
           $(this).val($(this).attr("placeholder"));
        }
       });
    }
    });
  
  
	$('form').submit(function(evt){
		$('input[placeholder]').each(function(){
			if($(this).attr("placeholder") == $(this).val()) {$(this).val('');}
		});
	});


});