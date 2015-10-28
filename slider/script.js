/**
 * Created by Vova on 27.10.2015.
 */


$(document).ready(function () {

    console.log("asgddd");

    $('.slider-control-btn').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
            container = $this.closest('.slider'),
            list = container.find('.slider-list'),
            items = container.find('.slider-item'),
            activeSlide = items.filter('.active'),
            nextSlide = activeSlide.next(),
            prevSlide = activeSlide.prev(),
            firstSlide = items.first(),
            lastSlide = items.last(),
            sliderOffset = container.offset().left,
            regPos = 0;

        if ($this.hasClass('slider-control-btn-prev')) {

            if (prevSlide.length) {
                findRegPos(prevSlide);
                removeActiveClass(prevSlide);

            }
            else {
                findRegPos(lastSlide);
                removeActiveClass(lastSlide);
            }
        } else {

            if (nextSlide.length) {
                findRegPos(nextSlide);
                removeActiveClass(nextSlide);

            }
            else {
                findRegPos(firstSlide);
                removeActiveClass(firstSlide);
            }
        }

        list.css('left', '-=' + regPos + 'px');

        function removeActiveClass(regSlide) {
            regSlide.addClass('active').siblings().removeClass('active');
        }

        function findRegPos(slide) {
            regPos = slide.offset().left - sliderOffset;
        }

    });

});