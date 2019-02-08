

//(function () {
//    "use strict";
//    var hamburger_links = document.querySelector(".hamburger_menu");
//    var close_link = document.querySelector(".fullscreenmenu");
//    
//    function close_popup_afterClick() {
//        close_link.classList.toggle("hide");
//    }
//    
//    hamburger_links.addEventListener("click", close_popup_afterClick);
//
//})();


// (function() {

  
    
//   // SECOND AVANGERS SECTION
//   var $$ = function(selector, context) {
//     var context = context || document;
//     var elements = context.querySelectorAll(selector);
//     return [].slice.call(elements);
//   };

//   function _fncSliderInit($slider, options) {
//     var prefix = ".fnc-";

//     var $slider = $slider;
//     var $slidesCont = $slider.querySelector(prefix + "slider__slides");
//     var $slides = $$(prefix + "slide", $slider);
//     var $controls = $$(prefix + "nav__control", $slider);
//     var $controlsBgs = $$(prefix + "nav__bg", $slider);
//     var $progressAS = $$(prefix + "nav__control-progress", $slider);

//     var numOfSlides = $slides.length;
//     var curSlide = 1;
//     var sliding = false;
//     var slidingAT = +parseFloat(getComputedStyle($slidesCont)["transition-duration"]) * 1000;
//     var slidingDelay = +parseFloat(getComputedStyle($slidesCont)["transition-delay"]) * 1000;

//     var autoSlidingActive = false;
//     var autoSlidingTO;
//     var autoSlidingDelay = 5000; // default autosliding delay value
//     var autoSlidingBlocked = false;

//     var $activeSlide;
//     var $activeControlsBg;
//     var $prevControl;

//     function setIDs() {
//       $slides.forEach(function($slide, index) {
//         $slide.classList.add("fnc-slide-" + (index + 1));
//       });

//       $controls.forEach(function($control, index) {
//         $control.setAttribute("data-slide", index + 1);
//         $control.classList.add("fnc-nav__control-" + (index + 1));
//       });

//       $controlsBgs.forEach(function($bg, index) {
//         $bg.classList.add("fnc-nav__bg-" + (index + 1));
//       });
//     };

//     setIDs();

//     function afterSlidingHandler() {
//       $slider.querySelector(".m--previous-slide").classList.remove("m--active-slide", "m--previous-slide");
//       $slider.querySelector(".m--previous-nav-bg").classList.remove("m--active-nav-bg", "m--previous-nav-bg");

//       $activeSlide.classList.remove("m--before-sliding");
//       $activeControlsBg.classList.remove("m--nav-bg-before");
//       $prevControl.classList.remove("m--prev-control");
//       $prevControl.classList.add("m--reset-progress");
//       var triggerLayout = $prevControl.offsetTop;
//       $prevControl.classList.remove("m--reset-progress");

//       sliding = false;
//       var layoutTrigger = $slider.offsetTop;

//       if (autoSlidingActive && !autoSlidingBlocked) {
//         setAutoslidingTO();
//       }
//     };

//     function performSliding(slideID) {
//       if (sliding) return;
//       sliding = true;
//       window.clearTimeout(autoSlidingTO);
//       curSlide = slideID;

//       $prevControl = $slider.querySelector(".m--active-control");
//       $prevControl.classList.remove("m--active-control");
//       $prevControl.classList.add("m--prev-control");
//       $slider.querySelector(prefix + "nav__control-" + slideID).classList.add("m--active-control");

//       $activeSlide = $slider.querySelector(prefix + "slide-" + slideID);
//       $activeControlsBg = $slider.querySelector(prefix + "nav__bg-" + slideID);

//       $slider.querySelector(".m--active-slide").classList.add("m--previous-slide");
//       $slider.querySelector(".m--active-nav-bg").classList.add("m--previous-nav-bg");

//       $activeSlide.classList.add("m--before-sliding");
//       $activeControlsBg.classList.add("m--nav-bg-before");

//       var layoutTrigger = $activeSlide.offsetTop;

//       $activeSlide.classList.add("m--active-slide");
//       $activeControlsBg.classList.add("m--active-nav-bg");

//       setTimeout(afterSlidingHandler, slidingAT + slidingDelay);
//     };



//     function controlClickHandler() {
//       if (sliding) return;
//       if (this.classList.contains("m--active-control")) return;
//       if (options.blockASafterClick) {
//         autoSlidingBlocked = true;
//         $slider.classList.add("m--autosliding-blocked");
//       }

//       var slideID = +this.getAttribute("data-slide");

//       performSliding(slideID);
//     };

//     $controls.forEach(function($control) {
//       $control.addEventListener("click", controlClickHandler);
//     });

//     function setAutoslidingTO() {
//       window.clearTimeout(autoSlidingTO);
//       var delay = +options.autoSlidingDelay || autoSlidingDelay;
//       curSlide++;
//       if (curSlide > numOfSlides) curSlide = 1;

//       autoSlidingTO = setTimeout(function() {
//         performSliding(curSlide);
//       }, delay);
//     };

//     if (options.autoSliding || +options.autoSlidingDelay > 0) {
//       if (options.autoSliding === false) return;
      
//       autoSlidingActive = true;
//       setAutoslidingTO();
      
//       $slider.classList.add("m--with-autosliding");
//       var triggerLayout = $slider.offsetTop;
      
//       var delay = +options.autoSlidingDelay || autoSlidingDelay;
//       delay += slidingDelay + slidingAT;
      
//       $progressAS.forEach(function($progress) {
//         $progress.style.transition = "transform " + (delay / 1000) + "s";
//       });
//     }
    
//     $slider.querySelector(".fnc-nav__control:first-child").classList.add("m--active-control");

//   };

//   var fncSlider = function(sliderSelector, options) {
//     var $sliders = $$(sliderSelector);

//     $sliders.forEach(function($slider) {
//       _fncSliderInit($slider, options);
//     });
//   };

//   window.fncSlider = fncSlider;
// }());

// /* not part of the slider scripts */

// /* Slider initialization
// options:
// autoSliding - boolean
// autoSlidingDelay - delay in ms. If audoSliding is on and no value provided, default value is 5000
// blockASafterClick - boolean. If user clicked any sliding control, autosliding won't start again
// */
// fncSlider(".example-slider", {autoSlidingDelay: 4000});

// var $demoCont = document.querySelector(".demo-cont");

// [].slice.call(document.querySelectorAll(".fnc-slide__action-btn")).forEach(function($btn) {
//   $btn.addEventListener("click", function() {
//     $demoCont.classList.toggle("credits-active");
//   });
// });

// document.querySelector(".demo-cont__credits-close").addEventListener("click", function() {
//   $demoCont.classList.remove("credits-active");
// });

// document.querySelector(".js-activate-global-blending").addEventListener("click", function() {
//   document.querySelector(".example-slider").classList.toggle("m--global-blending-active");
// });
// $(document).ready(function(){
        
    
//   //Variables 
//   var controller,
//       $slides = $('.fullpage .section'),
//       $slideIn = $('.section.active'),
    
//       $navItems = $('.links');
//     ;  
// //    console.log($navItems);
// //    console.log($slideIn);
// //    console.log($slides);
// //
// //    console.log(window.location.toString());
// //    console.log("hoy");
    
    
    
    
//     var firstSlideIntroTL,
//         skillsSlideTL,
//         projectsSLideTL,
//         contactsSlideTL;
    
    
// //    rotation = TweenMax.to($('.polygon2'), 15, {
// //        css:
// //        {
// //            rotation:360
// //        },
// //        // remove default easing for seamless loop
// //        ease:Linear.easeNone,
// //        repeat: -1,
// //        paused: false
// //    })
// //    
// //    controller.add(rotation);
// //    
    
    
    
   
//     $(window).on('load', function() {
//         if(window.location.hash) {
//             var hash = window.location.hash.substring(1);
// //            console.log(hash);


//             firstSlideIntroTL = new TimelineMax();

//         }
//     });

//     $(window).on('hashchange', function() {
    
   
       
    
    
//     if(window.location.hash) {
//         var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
        
        
//         switch(hash) {
//             case 'page0': 
// //                console.log("maa mu deba tva e pyrvi slaid");
//                 break;
//             case 'page1': 
// //                console.log("maa mu deba tva e vtori slaid");
//                 break;
//             case 'page2':
// //                console.log("maa mu deba tva e treti slaid");
//                 break;
//             case 'page3':
// //                console.log("dree mi bachka");
//                 break;
//             case 'page4':
// //                console.log("keke");
//                 break;
//         }
        
//     // hash found
//     } else {
//       // No hash found
//     }
// });
    
    
//     controller = new ScrollMagic.Controller();

    
    
//     function init(){

// //			setTimeout(function(){
// //
// //				//prevents body from flickering
// ////				TweenMax.set(, {autoAlpha: 1});
// //
// //				// animate first slide in
// //				animationIn($slideIn);
// //
// //			}, 500);
			
// 		}

// //		init();

    
//       /* Demo purposes only */
//       $("figure").mouseleave(
//         function() {
//           $(this).removeClass("hover");
//         }
//       );
//     function skillsTrigger() {
//             jQuery('.progress-bar').each(function() {
//               jQuery(this).find('.progress-content').animate({
//                 width:jQuery(this).attr('data-percentage')
//               },2000);
//               jQuery(this).find('.progress-number-mark').animate(
//                 {left:jQuery(this).attr('data-percentage')},
//                 {
//                  duration: 2000,
//                  step: function(now, fx) {
//                    var data = Math.round(now);
//                    jQuery(this).find('.percent').html(data + '%');
//                  }
//               });  
//             });
//         }
    
    
//   //CrossFade   =============================================  
//   $('.hidden').css('display','none');

//   $( "#filter button" ).each(function() {

//     $(this).on("click", function(){

//       var filter = $(this).attr('class');         

//       if ( $(this).attr('class') == 'all' ) {
//          $('.hidden').contents().appendTo('#posts').hide().show('slow');
//          $( "#filter button" ).removeClass('active');
//          $(this).addClass('active');
//          $("#filter button").attr("disabled", false);
//          $(this).attr("disabled", true);
//       }
//       else {
//          $('.post').appendTo('.hidden');
//          $('.hidden').contents().appendTo('#posts').hide().show('slow');
//          $('.post:not(.' + filter + ')').appendTo('.hidden').hide('slow');
//          $( "#filter button" ).removeClass('active');
//          $(this).addClass('active');
//          $("#filter button").attr("disabled", false);
//          $(this).attr("disabled", true);
//       };
      
//       });

//    }); 

    
// });
// // typing animation
//   (function($) {
//     $.fn.writeText = function(content) {
//         var contentArray = content.split(""),
//             current = 0,
//             elem = this;
//         setInterval(function() {
//             if(current < contentArray.length) {
//                 elem.text(elem.text() + contentArray[current++]);
//             }
//         }, 80);
//     };
    
//   })(jQuery);
// // input text for typing animation 
//   $("#holder").writeText("FRONT-END DEVELOPER");
// //  $("#holder2").writeText("and");
// //  $("#holder3").writeText("FRONT-END DEVELOPER");
// function checkWidth() {
//   var windowWidth = $(window).width();
//   var left = "left";
//   var bottom = "bottom";
//   var returnWidth = windowWidth < 400 ? bottom : left;
//   //            return returnWidth;
//   console.log(returnWidth);
//   return returnWidth;
// }
// $(document).ready(function() {
//   $('#fullpage').fullpage({
//       anchors: [
//           'page0',
//           'page1',
//           'page2',
//           'page3',
//           'page4'
//       ],
//       sectionsColor: [
//           'transparent',
//           'transparent',
//           'transparent',
//           'transparent'
//       ],
//       menu: '#menu',
//       navigation: true,
//       navigationPosition: checkWidth(),
//       navigationTooltips: ['First page', 'Second page', 'Third and last page', 'Not so fast', 'Got ya!']
//   });
// });



