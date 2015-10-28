/**
 * Created by Vova on 27.10.2015.
 */

$(document).ready(function () {
    $(".accodrion-trigger").on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.accordion-item'),
            list = $this.closest('.accordion-list'),
            items = list.find('.accordion-item'),
            content = item.find('.accordion-inner'),
            otherContent = list.find('.accordion-inner'),
            duration = 300;

        if (!item.hasClass('.active')) {
            items.removeClass('.active');
            item.addClass('.active');
            otherContent.stop(true).slideUp(duration);
            content.stop(true).slideDown(duration);
        }
        else{
            content.slideUp(duration);
            item.removeClass('.active');

        }

    })

});
