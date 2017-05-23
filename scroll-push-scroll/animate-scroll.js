$(document).ready(function () {
    $('.card').on('click', function () {
        // $('.parent').append($('.parent div:first'));

        $('.card:first-child').css('transform','translateY(400px)');
        $('.card:first-child').one('transitionrun webkitTransitionrun oTransitionrun MSTransitionrun', function () {
            $('.card:last-child').css('transform','translateY(0px)');
        });
        $('.card:first-child').one('transitionend webkitTransitionend oTransitionend MSTransitionend', function () {
            $('.card:not(:first-child)').css('transform','translateX(-150px)');
            $('.card:not(:first-child)').one('transitionend webkitTransitionend oTransitionend MSTransitionend', function () {
                $('.parent').append($('.parent div:first'));
            });
        });
    });
});