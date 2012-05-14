  //make HTML5 elements that are required look and act like they are required
  $("form *[required]").each(function(){
	$(this).addClass('required');
  });
  
  
$('form').submit(function(evt){
	$(this).children('[required]').each(function(){
		if($(this).attr("placeholder") == $(this).val() ||$(this).val('')) {
			$(this).addClass('error');
			$(this).focus('');
			}
	});
});