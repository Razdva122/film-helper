  $( function() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 10,
      value: 5,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
    $( "#slider-vertical2" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 10,
      value: 5,
      slide: function( event, ui ) {
        $( "#amount2" ).val( ui.value );
      }
    });
    $( "#amount2" ).val( $( "#slider-vertical2" ).slider( "value" ) );
        $( "#slider-vertical3" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 10,
      value: 5,
      slide: function( event, ui ) {
        $( "#amount3" ).val( ui.value );
      }
    });
    $( "#amount3" ).val( $( "#slider-vertical3" ).slider( "value" ) );
    $( "#slider-vertical4" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 10,
      value: 5,
      slide: function( event, ui ) {
        $( "#amount4" ).val( ui.value );
      }
    });
    $( "#amount4" ).val( $( "#slider-vertical4" ).slider( "value" ) );
    $( "#slider-vertical5" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 10,
      value: 5,
      slide: function( event, ui ) {
        $( "#amount5" ).val( ui.value );
      }
    });
    $( "#amount5" ).val( $( "#slider-vertical5" ).slider( "value" ) );
  } );