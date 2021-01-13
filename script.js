$(document).ready(function(){
	$("#nav-toggle").click(function(){
		$(".menu-responsive").slideDown("Slow");
		$(".nav-dim").slideDown("Slow");
	});

	$(".nav-dim").click(function() { 
		$(".menu-responsive").slideUp("Slow");
		$(".nav-dim").slideUp("Slow");
	});
});