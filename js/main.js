lazyload();
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/player_api";
	var fst = document.getElementsByTagName('script')[0];
	fst.parentNode.insertBefore(tag, fst);

	function onYouTubeIframeAPIReady() {
		$('.alisatm-vid').inViewAutoplay({
			autohide: 1,
			modestbranding: 1,
			rel: 0,
			quality: 'hd720'
		});
	}

	//var done = false;

	//function onPlayerStateChange(event) {
		//console.log(event.data);
		// if (event.data == YT.PlayerState.PLAYING && !done) {
		// 	setTimeout(stopVideo, 6000);
		// 	done = true;
		// }
	//}
	
	//function stopVideo() {
		//player.stopVideo();
	//}

	var options = {
	    "particles": {
	        "number": {
	            "value": 40,
	            "density": {
	                "enable": true,
	                "value_area": 800
	            }
	        },
	        "color": {
	            "value": "#3eb5f1"
	        },
	        "opacity": {
	            "value": 0.5,
	            "random": false,
	            "anim": {
	                "enable": false,
	                "speed": 1,
	                "opacity_min": 0.1,
	                "sync": false
	            }
	        },
	        "size": {
	            "value": 5,
	            "random": true,
	            "anim": {
	                "enable": false,
	                "speed": 40,
	                "size_min": 0.1,
	                "sync": false
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "distance": 250,
	            "color": "#3eb5f1",
	            "opacity": 0.4,
	            "width": 1
	        },
	        "move": {
	            "enable": true,
	            "speed": 4,
	            "direction": "none",
	            "random": false,
	            "straight": false,
	            "out_mode": "out",
	            "attract": {
	                "enable": false,
	                "rotateX": 600,
	                "rotateY": 1200
	            }
	        }
	    },
	    "interactivity": {
	        "detect_on": "canvas",
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "grab"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            },
	            "resize": true
	        },
	        "modes": {
	            "grab": {
	                "distance": 400,
	                "line_linked": {
	                    "opacity": 0.5
	                }
	            },
	            "bubble": {
	                "distance": 400,
	                "size": 40,
	                "duration": 2,
	                "opacity": 8,
	                "speed": 3
	            },
	            "repulse": {
	                "distance": 200
	            },
	            "push": {
	                "particles_nb": 4
	            },
	            "remove": {
	                "particles_nb": 2
	            }
	        }
	    },
	    "retina_detect": true
	};

	$(function() {
		var ismob = false;

		$(window).on('resize', function() {
	        //$owl.trigger('refresh.owl.carousel');
	        //offset = $('#header').height() + 10;
	        //$('#main').css('margin-top', offset - 10);

	        if($(window).width() < 800) {
	            //$('.menu').addClass('open'); 
	            ismob = true;
	        } else {
	            $('.nav').removeClass('open');
	            $('.hamb').removeClass('close');
	            ismob = false;
	        }
	    });

	    $('.hamb').on('click', function () {
	        if(!ismob) {
	            $('.nav').addClass('open');
	            $(this).addClass('close');
	            ismob = true;
	        } else {
	            $('.nav').removeClass('open');
	            $(this).removeClass('close');
	            ismob = false;
	        }
	    });

		$('.get-c, .demo').magnificPopup({
			items: {
			  src: '#mod-consultation',
			  type: 'inline'
			},
			removalDelay: 300,
		  	mainClass: 'mfp-zoom-in'
		});

		$('.pr').magnificPopup({
			items: {
			  src: '#mod-problem',
			  type: 'inline'
			},
			removalDelay: 300,
		  	mainClass: 'mfp-zoom-in'
		});

		$('.thanks').magnificPopup({
			items: {
			  src: '#mod-thanks',
			  type: 'inline'
			},
			removalDelay: 300,
		  	mainClass: 'mfp-zoom-in'
		});

		$('.more a').magnificPopup({
			items: {
			  src: '#mod-more',
			  type: 'inline'
			},
			removalDelay: 300,
		  	mainClass: 'mfp-zoom-in'
		}).on('click', function(event){

			$('#mod-more .a-info').text($(this).parents('li').find('.pr-text').text());
			$('#mod-more .a-text').text($(this).data("text"));
		});

		$('.fl1 li').on('click', function(event){
			$(this).find('.acc').slideToggle();
			$(this).find('.button').toggleClass('open');
		});
  
		var head = $(".header"), nav_offset_top = 40; //head.height();
	    var pscroll = 0;

	    function navbarFixed() {
	        head.length && $(window).scroll(function() {
	            var scroll = $(window).scrollTop();
	            scroll >= nav_offset_top && (
	                head.removeClass("alpha"), 
	                scroll > pscroll ? head.addClass("is-hidden").removeClass("is-visible") : head.addClass("is-visible").removeClass("is-hidden"), 
	                pscroll = scroll
	            );
	            70 >= scroll && head.addClass("alpha");
	        });
	    };

	    navbarFixed();

	    var cs = $(".company-slider"), tl = $(".tasks-list"), wl = $(".works-list"), el = $(".emp-list"), 
	    navs = ['<span class="icon-arrowleft"></span>', '<span class="icon-arrowright"></span>'];;

		cs.owlCarousel({
			stagePadding: 0,
			loop: true,
			lazyLoad: true,
			nav: true,
			navText: navs,
			dots: false,
			items: 5,
			autoWidth: false,
			singleItem: false,
			autoplay: false,
			navSpeed: 800,
			responsive:{
		        0:{
		            items: 1
		        },
		        480:{
		            items: 2
		        },
		        600:{
		            items: 3
		        },
		        1000:{
		            items: 5
		        }
		    }
    	});

		tl.owlCarousel({
			stagePadding: 0,
			loop: true,
			lazyLoad: true,
			nav: true,
			navText: navs,
			dots: false,
			items: 1,
			autoWidth: false,
			singleItem: true,
			autoplay: false,
			navSpeed: 800
    	});

    	/*wl.owlCarousel({
			stagePadding: 0,
			loop: false,
			lazyLoad:true,
			nav: true,
			navText: navs,
			dots: false,
			items: 4,
			autoWidth: false,
			singleItem: false,
			autoplay: false,
			navSpeed: 800,
			responsive:{
		        0:{
		            items: 1
		        },
		        600:{
		            items: 2
		        },
		        900:{
		            items: 3
		        },
		        1200:{
		            items: 4
		        }
		    }
    	});*/

    	el.owlCarousel({
			stagePadding: 0,
			center: true,
			loop: true,
			lazyLoad: true,
			nav: true,
			navText: navs,
			navContainer: ".emp-nav",
			dots: false,
			items: 5,
			autoWidth: false,
			singleItem: false,
			autoplay: false,
			navSpeed: 800,
			onChange: function (elem) {
		      //var current = this.currentItem;
		      //var src = elem.find(".owl-item").eq(current).find("img").attr('src');
		      //console.log( $(elem.target).find(".owl-item.center").find(".emp-item").attr('data-src'));
		    },
		    onInitialize: function (e) {
		    	//console.log(e);
		    },
		    responsive:{
		        0:{
		            items: 1,
		            singleItem: true,
		            //autoWidth: true
		        },
		        600:{
		            items: 1,
		            singleItem: true,
		            //autoWidth: true
		        },
		        900:{
		            items: 3
		        },
		        1200:{
		            items: 5
		        }
		    }
    	});




		// function cloneCanvas(oldCanvas) {
		//     var newCanvas = document.createElement('canvas');
		//     var context = newCanvas.getContext('2d');
		//     newCanvas.width = oldCanvas.width;
		//     newCanvas.height = oldCanvas.height;
		//     context.drawImage(oldCanvas, 0, 0);
		//     return newCanvas;
		// }

		$('.pjs').each(function (e) {
			$(this).attr('id', 'lf_e-' + e);
			//setTimeout(function() { particlesJS('lf_e-' + e, options); }, e*1000);
			
			//var nc = cloneCanvas(document.querySelector("#particles-js canvas"));
			//$(this).append(nc);

			//pJSDom[0].pJS.particles.move.enable = true;
			//pJSDom[0].pJS.fn.particlesRefresh();
		})

		//particlesJS('pjs', options);

	});
