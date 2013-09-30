$(document).on("ready", function(){
	$("#sidenav ul>ul").hide();
	$("#sidenav li").attr('href', '#').on("click", function(){
		$(this).next("ul").slideToggle();
		$(this).toggleClass('active');
		$(this).next("a").toggleClass('active');
	});
	$("#clearbtn").click(hidesystemtool);
	function hidesystemtool(){
		$(".spacewalk-bar").animate({
			"right": "=50px",
			"opacity": "0"},
			300, function() {
			/* after animation is complete we hide the element */
			$(this).hide();
		});
	}
});