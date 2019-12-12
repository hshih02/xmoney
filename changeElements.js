$("#sidebar1").click( function(){
    $('#language').hide();
    $('#graph').hide();
    $('#quickConvert').fadeIn();
});

$("#sidebar2").click( function(){
    $('#quickConvert').hide();
    $('#language').hide();
    $('#graph').fadeIn();
});
