// var album = 



// function switchPic(album) {
//     if (album.pic1.id == 1) {
//         return album.pic2.src;
//     } else {
//         return album.pic1.src;
//     }
// }


function slideUpDown(times, x) {
    if(times==0) {
        return;
    }
    $(x).slideUp(200, function() {
        $(x).slideDown(200, function () {
            slideUpDown(times-1, x);
        });
    });
}



$('#container').ready(function() {

    $('#header-button').click(function() {
        $('#header-img').show(2500, function( ) {
            $('#container').prepend("<img class='crown' src='crown.png'>")
        });
    });

    $('#gal-button').click(function() {
        $('.gal-img').fadeIn("slow", function() {
            $('#gal-button-div').html( "<button id='gal-button2'>What else?</button>");
            $('#gal-button2').click(function() {
                $('.gal-img').fadeOut("slow", function() {
                    $('.gal-frames').html( "<img class='gal-img2' src='donuts.jpg'>" );
                    $('.gal-img2').fadeIn(2000);
                    $('#gal-button2').hide();
                    $('#gallery').append("<img class='crown' src='crown.png'>");
                });
            });
        });
    });

    $('#fun').click(function() {
        slideUpDown(8, '#party');
    });

    $('.pink-text-div').click(function() {
        $('.pink-text-box').toggle();
        $('.pink-text-div').before("<div class='pink-text-div'></div>");
        $('.pink-text-div').after("<div class='pink-text-div'></div>");
    });

    $('#hide-pink').click(function() {
        $('#good-times').slideToggle(500);
    });
    
    


});

// $('.gal-frames').html( "<img class='gal-img' src='mtn1.jpg'>" );