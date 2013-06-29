$(document).ready(function() {
	//$(".detail-page").css("display","none");
	if (Modernizr.csstransitions) {
		$(".show-left").on('click',function() {
			$("#right_column").toggleClass("move");
			$("#center_column").toggleClass("move");
			$("#center_column").toggleClass("move2");
			$("#center_column").removeClass("right_move");
			$("#center_column").removeClass("right_move2");
		});
		$(".show-right").on('click',function() {
			$("#left_column").toggleClass("right_move");
			$("#center_column").toggleClass("right_move");
			$("#center_column").toggleClass("right_move2");
			$("#center_column").removeClass("move");
			$("#center_column").removeClass("move2");
			
		});
	}
	else {
		$('.show-left').on('click', function() {
			$this = $("#center_column");
			
			if (!$this.hasClass('closed')) {
				$this.animate({
					left: '85%'
				}, 1000);
				$this.addClass("closed");
			}
			else {
				$this.animate({
					left: '0%'
				}, 1000);
				$this.removeClass("closed");
			}
		});
	}
	$(".record-list__header").click(function () {
      		$(".account_info-details").slideToggle(250);
    });
	$('.yash').click(function(e){
		$(this).closest('li').find('.detail-page').slideToggle();
		setTimeout(function () {
    		myScroll2.refresh();
		}, 400);
      });
	  alert($(window).width());
});