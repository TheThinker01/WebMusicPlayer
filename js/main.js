var audio;

$('#pause').hide();

// Initializer - Play Song
initAudio($('#playlist li:first-child'));

function initAudio(element){
    var song = element.attr('song');
    var title = element.text();
    var cover = element.attr('cover');
    var artist = element.attr('artist');

    // Create a New Audio Object
    audio = new Audio('media/'+song);

    if(!audio.currentTime)
    {
        $('#duration').html('0.00');
    }

    $('#audio-info .artist').text(artist);
    $('#audio-info .title').text(title);

    // Insert the Cover Image into the Player
    $('img.cover').attr('src','img/covers/'+cover);

    $('#playlist li').removeClass('active');
    element.addClass('active');

}

// Play Button
$('#play').click(function(){
    audio.play();
    $('#play').hide();
    $('#pause').show();
    $('#duration').fadeIn(400);
    showDuration();
});

// Pause Button
$('#pause').click(function(){
    audio.pause();
    $('#pause').hide();
    $('#play').show();

});

// Stop Button
$('#stop').click(function(){
    audio.pause();
    $('#pause').hide();
    $('#play').show();
    audio.currentTime = 0;
});



