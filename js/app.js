$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
    // play hadouken sound
    	playHadouken();
    	$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	// finish method completes all currently running animations on an event
    	$('.hadouken').finish().show().animate(
    		//animate so its left value is 1020px (500px to the right)
    		{'left': '1020px'},
    		// 500 milliseconds is how long the animation will take
    		500,
    		// will hide hadouken when the animation finishes, and set its left property back to original 520px
    		function() {
    			$(this).hide();
    			$(this).css('left', '520px');
    		}
    		);
  	})
  	.mouseup(function() {
    // ryu goes back to his ready position when mouse leaves
    	$('.ryu-throwing').hide();
    	$('.ryu-ready').show();
  });
    // keydown "x" to show cool pose
    $("body").keydown(function(e) {
      if(e.which == 88) {
        // hide everything and only show ryu-cool
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.hadouken').hide();
        $('.ryu-cool').show();
      }
    })

    // release "x" to go back to ryu-still
    $("body").keyup(function(e) {
      if(e.which == 88) {
        $('.ryu-ready').hide();
        $('.ryu-cool').hide();
        $('.hadouken').hide();
        $('.ryu-still').show();
      }
    })
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}