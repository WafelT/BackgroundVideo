// Logo animation (Optional)

$('#logo').hide();
$('#logo').fadeIn(1000);

//Ataching our video to our header
$(window).on('load', function() {
    $('#header').vide('./assets/fireplace', {
        bgColor : '#eaeaea'
    })
});