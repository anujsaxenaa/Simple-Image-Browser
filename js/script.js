$("button").click(function () {
    if ($(this).attr("id") === "one") {
        $(".container").css("background-image", 'url(http://i283.photobucket.com/albums/kk301/brandi_bgb/pretty%20photography/sunset-glow-trees-beautiful-scenery.jpg)');
    }
    if ($(this).attr("id") === "two") {
        $(".container").css("background-image", 'url(http://media-cdn.tripadvisor.com/media/photo-s/01/12/9f/fd/most-beach-scenery.jpg)');
    }
    if ($(this).attr("id") === "three") {
        $(".container").css("background-image", 'url(http://p1.pichost.me/i/40/1638707.jpg)');
    }
    if ($(this).attr("id") === "four") {
        $(".container").css("background-image", 'url(http://upload.wikimedia.org/wikipedia/commons/4/46/Greenland_scenery.jpg)');
    }
});