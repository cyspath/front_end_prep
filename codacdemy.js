
$(document).ready(function () {

    $('ol').sortable()

   $('#button').click(function () {
       var toAdd = $('input[name=checkListItem]').val()
       // item = '<div class="item">' + toAdd + '</div>'
       $('.list').append('<div class="item">' + toAdd + '</div>')

   })

   $(document).on('click', '.item', function () {
       this.remove()
   })


    $('div.planet').click(function () {
        $(this).fadeOut('fast')
    })

    $('div.planet').hover(function () {
        $(this).toggleClass('red')
    })

    // $(document).keydown(function () {
    //     $('div.planet').animate({left: '+=200px'}, 500)
    // })

    $('div.planet').click(function () {
        $(this).effect('explode')
    })

    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
  			// Left arrow key pressed
  			case 37:
  				$('img').animate({left: "-=10px"}, 'fast');
  				break;
  			// Up Arrow Pressed
  			case 38:
  				$('img').animate({top: "-=10px"}, 'fast');
  				break;
  			// Right Arrow Pressed
  			case 39:
  				$('img').animate({left: "+=10px"}, 'fast');
  				break;
  			// Down Arrow Pressed
  			case 40:
  				$('img').animate({top: "+=10px"}, 'fast');
  				break;
  		  }
  	});



})
