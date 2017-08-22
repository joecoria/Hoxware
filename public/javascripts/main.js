// Scrollify!
if ($(window).width() < 993) {
	console.log('chico..?');
	$.scrollify.destroy();
} else {
	console.log('grande?');
	$.scrollify({
		section:".panel",
		scrollSpeed:900,
		after:function(i) {/* if(i===2) {$.scrollify.setOptions({easing:"easeOutExpo"});} */}
	});
};
// $(".scroll,.scroll-btn").click(function(e) {
//   e.preventDefault();
//   $.scrollify.next();
// });
// navbar

$('.logo').hide();
$(window).on("resize scroll", function (){
  if (Math.round($(window).scrollTop()) > 200) {
    $('.logo').show("bounce", {direction: "down"}, 1000)
  }
	if (Math.round($(window).scrollTop()) == 3) {
    $('.logo').hide("blind", {direction: "up"}, 1000)
  }
});

// signature!
console.log("%c  #  ·············With Tech & Love·················","color:cyan");
console.log("%c  #  ···███████╗·█████╗·██████╗·██╗·····███████╗···","color:cyan");
console.log("%c  #  ···██╔════╝██╔══██╗██╔══██╗██║·····██╔════╝···","color:cyan");
console.log("%c  #  ···███████╗███████║██████╔╝██║·····█████╗·····","color:cyan");
console.log("%c  #  ···╚════██║██╔══██║██╔══██╗██║·····██╔══╝·····","color:cyan");
console.log("%c  #  ██╗███████║██║··██║██████╔╝███████╗███████╗██╗","color:cyan");
console.log("%c  #  ╚═╝╚══════╝╚═╝··╚═╝╚═════╝·╚══════╝╚══════╝╚═╝","color:cyan");
console.log("%c  #  ················Digital Studio················","color:cyan");
