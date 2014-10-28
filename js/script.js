$("button").click(function () {
    if ($(this).attr("id") === "one") {
        $(".container").css("background-image", 'url(http://i283.photobucket.com/albums/kk301/brandi_bgb/pretty%20photography/sunset-glow-trees-beautiful-scenery.jpg)');
    }
    else if ($(this).attr("id") === "two") {
        $(".container").css("background-image", 'url(http://media-cdn.tripadvisor.com/media/photo-s/01/12/9f/fd/most-beach-scenery.jpg)');
    }
    else if ($(this).attr("id") === "three") {
        $(".container").css("background-image", 'url(http://2.bp.blogspot.com/-fV8JB5dszyQ/UMIBOIMIdGI/AAAAAAAAOsk/1tKlZLfaJx8/s1600/Beautiful+Autumn+Scenery+Wallpapers+09.jpg)');
    }
    else if ($(this).attr("id") === "four") {
        $(".container").css("background-image", 'url(http://www.incredible-overberg.co.za/wp-content/uploads/2012/04/Switzerland_Splendid-scenery_2618.jpg)');
    }
});