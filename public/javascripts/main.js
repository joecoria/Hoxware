// Scrollify!
if ($(window).width() < 993) {
	console.log('chico..?');
	$.scrollify.destroy();
} else {
	console.log('grande?');
	$.scrollify({
		section:".panel",
		scrollSpeed:900,
		overflowScroll: true,
    before:function(i,panels) {
      var ref = panels[i].attr("data-section-name");
      $(".vnav .active").removeClass("active");
      $(".vnav").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var vnav = "<ul class=\"vnav\">";
      var activeClass = "";
      $(".panel").each(function(i) {
        activeClass = "";
        if(i===0) {
          activeClass = "active";
        }
        vnav += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });
      vnav += "</ul>";
      $("a.vlink").on("click",$.scrollify.move);
    }
	});
};

// navbar
$('.logo').hide();
$(window).on("resize scroll", function (){
  if (Math.round($(window).scrollTop()) > 200) {
		$( "#hoxware" ).hide("fade");
    $('.logo').show("puff", 1000);
  }
	if (Math.round($(window).scrollTop()) == 3) {
		$( "#hoxware" ).show("pulsate");
    $('.logo').hide("puff", 500);
  }
});
$('.btn-contact').click(function(){
	$.scrollify.move("#contacto");
});

$( "#hoxware" ).hide();
$(document).ready(function() {
  $( "#hoxware" ).show("pulsate");
});

// overlap fix
$('#shieldmore').click(function() {
	$('#shield').toggleClass('fix');
});

// parallax?
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);


// signature!
console.log("%c  #  ·············With Tech & Love·················","color:cyan");
console.log("%c  #  ···███████╗·█████╗·██████╗·██╗·····███████╗···","color:cyan");
console.log("%c  #  ···██╔════╝██╔══██╗██╔══██╗██║·····██╔════╝···","color:cyan");
console.log("%c  #  ···███████╗███████║██████╔╝██║·····█████╗·····","color:cyan");
console.log("%c  #  ···╚════██║██╔══██║██╔══██╗██║·····██╔══╝·····","color:cyan");
console.log("%c  #  ██╗███████║██║··██║██████╔╝███████╗███████╗██╗","color:cyan");
console.log("%c  #  ╚═╝╚══════╝╚═╝··╚═╝╚═════╝·╚══════╝╚══════╝╚═╝","color:cyan");
console.log("%c  #  ················Digital Studio················","color:cyan");
