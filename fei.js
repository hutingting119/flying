function addcar() {
    var offset = $("#end").offset();
    var img = $(".feiImg").attr('src');
    var flyer = $('<img class="u-flyer" src="' + img + '">');
    flyer.fly({
        start: {
            left: event.pageX,
            top: event.pageY
        },
        end: {
            left: offset.left + 10,
            top: offset.top + 10,
            width: 0,
            height: 0
        }
    });
}