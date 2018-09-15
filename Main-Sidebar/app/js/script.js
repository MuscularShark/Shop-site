
function isotope_init() {
    var $grid = $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('.filter-button-group').on('click', 'button', function(){
        $('.is-checked')[0].classList.remove('is-checked');
        $(this)[0].classList.add('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    })
}

$(document).ready(function(){
    isotope_init();
    $(".owl-carousel").owlCarousel({
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1180:{
                items:4
            }
        },
        autoplay: true,
        autoplayTimeout: 1000,
        autoplaySpeed: 500,
        autoplayHoverPause: true,
        dots: true,
        loop: true
    });
});

//PriceRange
 $( function() {
	 var handle = $( "#custom-handle" );
	 var handle_2 = $( "#custom-handle_2" );

    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 800,
      values: [ 0, 600 ],
			create: function() {
        handle.append($("<span/>").text( $( this ).slider( "values", 0 ) ));
				handle_2.append($("<span/>").text( $( this ).slider( "values", 1 ) ));
      },
			slide: function( event, ui ) {
        $( "#custom-handle span" ).text( ui.values[0]);
				 $( "#custom-handle_2 span" ).text( ui.values[1]);
      }
    });
});


$(".fa-star-o").onclick(function(e) {
  e.preventDefault();
  $(".fa-star-o").addClass('marked');
})














	