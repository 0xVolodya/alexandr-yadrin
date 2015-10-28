/**
 * Created by Vova on 27.10.2015.
 */


$(document).ready(function () {
    $(".slideShow-img").on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.slideShow-item'),
            container = $this.closest('.slideShow'),
            display = container.find('.main-image'),
            path = item.find('img').attr('src'),
            duration = 300;

        if (!item.hasClass('.active')) {
            item.addClass('.active').siblings().removeClass('.active');

            display.find('img').fadeOut(duration, function () {
                $(this).attr('src', path).fadeIn(duration);
            });
        }


    })

});