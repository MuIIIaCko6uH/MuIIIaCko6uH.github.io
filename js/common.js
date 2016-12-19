$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".thumb-item").brazzersCarousel();

	$("#lightgallery").lightGallery();


	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});

	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("flipInY");

	$("a").mPageScroll2id();

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".podrt_descr").attr("id", "work_" + i);
	});

	$("input, select, textarea").jqBootstrapValidation();

	$(".img-bab a").mPageScroll2id();

});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
 

});


var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf("msie") != -1 || ua.indexOf("opera") != -1) {
	jQuery('body').css('overflow','hidden');
	jQuery('html').css('overflow','hidden');
}				

jQuery(function() {
	jQuery('#bannerscollection_zoominout_opportune').bannerscollection_zoominout({
		skin: 'opportune',
		responsive:true,
		width: 1728,
		height: 972,
		width100Proc:true,
		height100Proc:true,
		showNavArrows:true,
		showBottomNav:false,
		autoHideBottomNav:true,
		thumbsWrapperMarginTop: -55,
		pauseOnMouseOver:false
	});		
	

		
});