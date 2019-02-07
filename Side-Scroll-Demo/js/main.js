$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

    var horizontalMoveTL = new TimelineMax();
    horizontalMoveTL.to('.horizontal-container', 1, { x: '-100%', ease:Linear.easeNone });
    
    var pinMainScene = new ScrollMagic.Scene({
        triggerElement: '#main',
        triggerHook: 0,
        duration: '400%',
    })
    .setTween(horizontalMoveTL)
    .setPin('#main')
    .addTo(controller);
    
    
    
    
    
});


















