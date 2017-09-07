// Scrollify!
if ($(window).width() < 993) {
	// console.log('chico..?');
	$('.typed').typeIt({
		strings: ["El daño operativo puede ocasionar incumplimiento en compromisos y servicios.",
		"El daño económico se sufre al perder clientes y pagar multas de regulaciones comerciales.",
		"El daño de imagen genera desconfianza y mala reputación de tu organización."],
		speed: 80,
		breakLines: false,
		loopDelay: 3500,
		deleteDelay: 3500,
		autoStart: true,
		loop: true
	});
	$.scrollify.destroy();
} else {
	// console.log('grande?');
	$.scrollify({
		section:".panel",
		scrollSpeed:900,
		overflowScroll: true,
	  before:function(i,panels) {
	    var ref = panels[i].attr("data-section-name");
	    $(".vnav .active").removeClass("active");
	    $(".vnav").find("a[href=\"#" + ref + "\"]").addClass("active");
			$.scrollify.update();
			if($.scrollify.current().attr('data-section-name') === 'danos'){
				$('.typed').typeIt({
					strings: ["El daño operativo puede ocasionar incumplimiento en compromisos y servicios.",
					"El daño económico se sufre al perder clientes y pagar multas de regulaciones comerciales.",
					"El daño de imagen genera desconfianza y mala reputación de tu organización."],
					speed: 80,
					breakLines: false,
					loopDelay: 3500,
					deleteDelay: 3500,
					autoStart: true,
					loop: true
				});
				$('.userinfo:first-child').addClass('moved');
				$('.userinfo:first-child p.line1, .userinfo:first-child p span.cursor1, .userinfo:first-child p.line2, .userinfo:first-child p span.cursor2, .userinfo:first-child p.line3, .userinfo:first-child p span.cursor3, .userinfo:first-child p.line4, .userinfo:first-child p span.cursor4').addClass('animate');
				function sube2(){
					$('.userinfo:nth-child(2)').addClass('moved');
					$('.userinfo:nth-child(2) p.line1, .userinfo:nth-child(2) p span.cursor1, .userinfo:nth-child(2) p.line2, .userinfo:nth-child(2) p span.cursor2, .userinfo:nth-child(2) p.line3, .userinfo:nth-child(2) p span.cursor3, .userinfo:nth-child(2) p.line4, .userinfo:nth-child(2) p span.cursor4').addClass('animate');
				}
				setTimeout(sube2, 3000);
				function sube3(){
					$('.userinfo:nth-child(3)').addClass('moved');
					$('.userinfo:nth-child(3) p.line1, .userinfo:nth-child(3) p span.cursor1, .userinfo:nth-child(3) p.line2, .userinfo:nth-child(3) p span.cursor2, .userinfo:nth-child(3) p.line3, .userinfo:nth-child(3) p span.cursor3, .userinfo:nth-child(3) p.line4, .userinfo:nth-child(3) p span.cursor4').addClass('animate');
				}
				setTimeout(sube3, 6000);
				function sube4(){
					$('.userinfo:nth-child(4)').addClass('moved');
					$('.userinfo:nth-child(4) p.line1, .userinfo:nth-child(4) p span.cursor1, .userinfo:nth-child(4) p.line2, .userinfo:nth-child(4) p span.cursor2, .userinfo:nth-child(4) p.line3, .userinfo:nth-child(4) p span.cursor3, .userinfo:nth-child(4) p.line4, .userinfo:nth-child(4) p span.cursor4').addClass('animate');
				}
				setTimeout(sube4, 9000);
				$('#damagemore').click(function() {
					$('.userinfo p.line1, .userinfo p span.cursor1, .userinfo p.line2, .userinfo p span.cursor2, .userinfo p.line3, .userinfo p span.cursor3, .userinfo p.line4, .userinfo p span.cursor4').toggleClass('animate');
					$('.userinfo').toggleClass('moved');
				});
			} else if($.scrollify.current().attr('data-section-name') === 'proteccion'){
				$('#masdedamage.show').removeClass('show');
				$('.userinfo p.line1, .userinfo p span.cursor1, .userinfo p.line2, .userinfo p span.cursor2, .userinfo p.line3, .userinfo p span.cursor3, .userinfo p.line4, .userinfo p span.cursor4').removeClass('animate');
				$('.userinfo').removeClass('moved');
				$('#shieldmore').click(function() {
					$('#last').toggle();
				});
				$('.bin01').typeIt({
					strings: ['01100001 <span>01101100</span> 01101100 01111001', '01101111 01110101 01110010 01100010', '01100001 01110011 01100101 01100001', '01110010 01100101 01100010 01100101', '01101100 01101111 01101110 01100111', '01110100 01101111 01110101 01110011'],
					speed: 50,
					startDelay: 500,
					autoStart: true
				});
				$('.bin02').typeIt({
					strings: ['01100001 01101100 01101100 01111001', '01101111 01110101 01110010 01100010', '01100001 01110011 01100101 01100001', '<span>01110010</span> 01100101 01100010 01100101', '01101100 01101111 01101110 01100111', '01110100 01101111 01110101 01110011'],
					speed: 50,
					startDelay: 3000,
					autoStart: true
				});
				$('.bin03').typeIt({
					strings: ['01100001 <span>01101100</span> 01101100 01111001', '01101111 01110101 01110010 01100010', '01100001 01110011 01100101 01100001', '01110010 01100101 <span>01100010</span> 01100101', '01101100 01101111 01101110 01100111', '01110100 01101111 01110101 01110011'],
					speed: 50,
					startDelay: 6000,
					autoStart: true
				});
			} else if($.scrollify.current().attr('data-section-name') === 'contacto'){
				$('#masproteccion.show').removeClass('show');
			} else {
				$('#masinfo.show').removeClass('show');
				$('#masdedamage.show').removeClass('show');
				$('.userinfo p.line1, .userinfo p span.cursor1, .userinfo p.line2, .userinfo p span.cursor2, .userinfo p.line3, .userinfo p span.cursor3, .userinfo p.line4, .userinfo p span.cursor4').removeClass('animate');
				$('.userinfo').removeClass('moved');
			}
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
    $('.logo').show("puff", 200);
  }
	if (Math.round($(window).scrollTop()) == 3) {
		$( "#hoxware" ).show("pulsate", 200);
    $('.logo').hide("puff", 100);
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

// slideToggle
// $('.box').mouseover(function() {
// 	$divid = $(this).parents('div');
// 	pid = $divid.attr('id');
//  	product = '#' + pid;
// 	box = '#' + pid + ' .box';
// 	red = '#' + pid + ' .red';
// 	// $(box).mouseover(function() {
// 	// 	console.log(product);
// 	// 	$(box).hide('slideUp');
// 	// 	$(red).show('slideUp');
// 	// 	$(red).mouseout(function() {
// 	// 		$(red).hide('slideUp');
// 	// 		$(box).show('slideUp');
// 	// 	});
// 	// });
// });

// parallax?
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
var shieldscene = document.getElementById('shieldscene');
var parallax = new Parallax(shieldscene);

// products

// form
var miid = '';
$("input").on('focus', function(event) {
  event.preventDefault();
  $form=$(this).parents("form");
  miid = $form.attr('id');
  console.log(miid);
  // valido miid form
  var validEmail = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  var thisEmail = '#' + miid + ' input[type="email"]';
  var thisName = '#' + miid + '  input[type="text"]';
	var thisSend = '#' + miid + ' button';
	var bro = 'div.' + miid;
  $(thisEmail).keyup(function (e) {
    e.preventDefault();
    var isValid = this.value.match(validEmail);
    if(isValid) {
      console.log('¡Está bien!');
			$(this).siblings('label').addClass('escondido');
			$(thisSend).prop("disabled", false);
    } else {
      console.log('¡Está mal!');
			$(this).siblings('label').removeClass('escondido');
    }
  });
	// validación de nombre
	$(thisName).keyup(function (e) {
    e.preventDefault();
		var filled = $(thisName).val();
		if (filled == "") {
			console.log('Falta texto');
			$(this).siblings('label').removeClass('escondido');
		} else {
			$(this).siblings('label').addClass('escondido');
		};
	});
	$(thisSend).click(function(e) {
		e.preventDefault();
		var email = $(thisEmail).val();
		var name = $(thisName).val();
		console.log(name);
		console.log(email);
		$(this).parents("form").addClass('escondido');
	  $(this).parents("form").siblings(bro).addClass('animated pulse').removeClass('escondido');

    $.get("/send",{name:name,email:email},function(data){
      if(data=="sent"){
        console.log("enviado");
      }else{
        console.log("no enviado");
      }
    });

	})
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
