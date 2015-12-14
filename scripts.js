//test

//LightBox Code//region
var $dimBackground = $("<div id='dimBackground'></div>");
var $image = $("<img>");

$dimBackground.append($image);
$("body").append($dimBackground);

//lays dimbackground on top, shows image
$(".lightBox a").click(function (event) {
    event.preventDefault();
    $image.show(100);
    var $href = $(this).attr("href");
    $image.attr("src", $href);
    $dimBackground.show();
});
//check
//hides everything on new mouseclick
$dimBackground.click(function (event) {
    event.preventDefault();
    $dimBackground.fadeOut();
});
//endRegion

//Footer Icons Flash//region
$("footer a img").hover(function () {
    $(this).addClass("test1");
	timerId = setInterval(function () {
        $(".test1").fadeOut("medium");
        $(".test1").fadeIn("medium");
    }, 1000);
}, function () {
    clearInterval(timerId);
    $(this).removeClass("test1");
});

//endregion

/*Resume PhotoGallery Cycling*//*Region*/ 

(function () {
	
	var counter = 0;
	var elementCounter = 0;
	/*Changes photos every x ms */
	var photoGalleryLoop = setInterval(function () {
		
		/*moves through each img in galleryFolder*/
		var srcList = {
			imgSrc: "images/photoGallery/photoGallery" + (counter) + ".jpg"
		};
	
		/*Makes current picture fadeout, and replaces src for new one*/
		$(".photoGallery li:nth-child(" + elementCounter + ") img").hide("fast").fadeIn("slow").prop("src", srcList.imgSrc);

		/*Resets targeted Element to begining of List*/
		if (elementCounter > 5) {
			elementCounter = 0;
		}
		
		/*Ends interval once all pictures have been looped*/
		if (counter > 8) {
			return clearInterval(photoGalleryLoop);
		}
		
		counter++;
		elementCounter++;
		
    }, 6000);
	
}());
/*EndRegion*/

/*popoutWriting*//*Region*/

$(".popOutWriting li a").click(function(event) {
	
	event.preventDefault();
	
	/* Gets current list item's id from href */
	var poemId =$(this).prop("href");
	poemId = poemId.substring(poemId.indexOf("#"));

	//Hide any currently opened poems
	$(".popOutWriting article > div").hide();
	
	//Reveal selected poem using poemId
	$(poemId).slideToggle(900);

	(function() {
		$('html, body').animate({
			scrollTop: $(poemId).position().top
		}, 1000);
	})();

})();	
/*endRegion*/