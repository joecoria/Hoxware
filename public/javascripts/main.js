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

			if($.scrollify.current().attr('data-section-name') === 'daños'){
				console.log('daños');
			} else if($.scrollify.current().attr('data-section-name') === 'protección'){
				console.log('protección');
				$(document).ready(function(){
					var numOfLines = 8;
			    var delay = 800;
			    var fadeTime = 800;
			    for (i = 0; i < numOfLines + 1; i++) {
			       $('.dtext' + i).delay(delay * i).fadeIn(fadeTime);
			    }
				});
			} else {
				console.log('otra');
				var numOfLines = 8;
				var delay = 300;
				var fadeTime = 300;
				for (i = 0; i < numOfLines + 1; i++) {
					 $('.dtext' + i).delay(delay * i).fadeOut(fadeTime);
				}
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
    $('.logo').show("puff", 600);
  }
	if (Math.round($(window).scrollTop()) == 3) {
		$( "#hoxware" ).show("pulsate", 100);
    $('.logo').hide("puff", 200);
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
    } else {
      console.log('¡Está mal!');
    }
  });
	// validación de textarea
	$(thisName).keyup(function () {
		var filled = $(thisName).val();
		if (filled == "") {
			console.log('Falta texto');
		} else {
			$(thisSend).prop("disabled", false);
		};
	});
	$(thisSend).click(function(e) {
		e.preventDefault();
		var email = $(thisEmail).val();
		var name = $(thisName).val();
		console.log(name);
		console.log(email);
		$(this).parents("form").addClass('escondido');
	  $(this).parents("form").siblings(bro).addClass('animated bounce').removeClass('escondido');

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
