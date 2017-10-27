/*Document of Javascript*/
 $(document).ready(function() {
 	$(window).scroll(function() {
 		if($(window).scrollTop() !=0) {
 			$("#minus").fadeIn();
 			}else {
 				$("#minus").fadeOut()
 			}
 		});
 		$("#minus").click(function() {
 				$("html,body").animate({scrollTop : 0}, 500);
 		});
 	});
	// $(document).ready(function() {
	// 	var test = $(window).scrollTop();
	// 	alert(test);
	// });