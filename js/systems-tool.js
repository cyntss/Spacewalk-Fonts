$(document).on("ready", function(){
	$("#spacewalk-bar-off").hide();
	$("#clearbtn").click(hidesystemtool);
	$("#hide-systems-bar").click(hidesystemtool);
	$("#show-systems-bar").click(hidesystemtoolbtn);
	function hidesystemtool(){
		$(".spacewalk-bar").slideUp(200, showsystemtoolbtn);
	}
	function showsystemtoolbtn(){
		$("#spacewalk-bar-off").slideDown(200);
	}
	function hidesystemtoolbtn(){
		$("#spacewalk-bar-off").slideUp(300, showsystemtool);
	}
	function showsystemtool(){
		$(".spacewalk-bar").slideDown(300);
	}

});