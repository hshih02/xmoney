$("#sidebar2").click( function(){
    $('#quickConvert').hide();
    $('#graph').hide();
    $('#language').show();
});

$("#sidebar1").click( function(){
    $('#language').hide();
    $('#graph').hide();
    $('#quickConvert').show();
});

$("#sidebar3").click( function(){
    $('#quickConvert').hide();
    $('#language').hide();
    $('#graph').show();
});