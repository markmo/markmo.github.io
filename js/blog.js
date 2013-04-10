$(function () {
    $('.post')
        .hover(function () {
            $(this).find('.plus-wrapper').css('display', 'block');
        })
        .mouseleave(function () {
            $(this).find('.plus-wrapper').hide();
        });
});
