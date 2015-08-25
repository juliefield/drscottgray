jQuery(document).ready(function(){
	//Set the rollovers for the navigation.
	$(".navigation img").hover(
		function(){
			this.src = this.src.replace("_off","_on");
		},
		function(){
			this.src = this.src.replace("_on","_off");
		}
	);
});