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
    if ($('body').css('background-color') == "rgb(255, 255, 255)") {
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
function nbParag() {
    $(document).ready(function () {
        var paragraphe = $("p");
        alert("il y a  " + paragraphe.length + "paragraphes");
    });


}
function couleurJaune() {
    $("p").css("background-color", "yellow");

}
function pairORimpair() {
    $(document).ready(function () {

        var paragraphe = $(".exemple p");
        console.log(paragraphe)
        var i = 0;
        paragraphe.each(function () {
            if (i % 2 == 0) {
                $(this).css("background-color", "red");
            } else {
                $(this).css("background-color", "yellow");
            }
            i++;
        })


        /*var paragraphe = $(" p");
        console.log(paragraphe)
       for(var i=0; i< paragraphe.length-1;i++){
           if(i %2==0 ){
            paragraphe[i].css("background-color", "red");
           } else {
            paragraphe[i].css("background-color", "yellow");
            }
       }*/
    });



}
function rougeImpair() {
    var paragraphe = $(".exemple p");
    console.log(paragraphe)
    var i = 0;
    paragraphe.each(function () {
        if (i % 2 != 0) {
            $(this).hide();
        }
        i++;
    })

}

function nouveauParag() {
    $('p').last().after('<p>Bonjour</p>');
}
function go() {
    $("#mot").val();
    var paragraphe = $(" p");
    var i = 0;
    

    paragraphe.each(function () {
        var mot = document.getElementById("mot").value;
        var mot_modif = "<span class='selection'>" + mot + "</span>";
        var p = document.getElementsByTagName("p");
        for (i=0; i<p.length; i++)
        {
            var s = p[i].textContent;
            var regex = new RegExp(mot, 'g');
    
            p[i].innerHTML = s.replace(regex, mot_modif);
        }
    });
}