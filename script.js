function biggerTitle() {
    // $("#titre").css("font-size", "28px");
    //$("#titre").css("font-size") != "28px" ? $("#titre").css("font-size", "28px") : $("#titre").css("font-size", "20px");
    if ($("#titre").css("font-size") != "28px") {
        $("#titre").css("font-size", "28px");
    } else {
        $("#titre").css("font-size", "20px");
    }
}
function changeFond() {
    if ( $('body').css('background-color')=="rgb(255, 255, 255)") {
        $('body').css('background-color', '#181818');
        $('p,span').css('color', 'white');
        $('#change .fa').attr('class', 'fa fa-sun-o');
    }
    else {
        $('body').css('background-color', 'white');
        $('p,span').css('color', 'black');
        $('#change .fa').attr('class', 'fa fa-moon-o');

    }


}