/*
(function(){

    var special = jQuery.event.special,
        uid1 = 'D' + (+new Date()),
        uid2 = 'D' + (+new Date() + 1);

    special.scrollstart = {
        setup: function () {

            var timer,
                handler =  function(evt) {

                    var _self = this,
                        _args = arguments;

                    if (timer) {
                        clearTimeout(timer);
                    } else {
                        evt.type = 'scrollstart';
                        jQuery.event.dispatch.apply(_self, _args);
                    }

                    timer = setTimeout( function(){
                        timer = null;
                    }, special.scrollstop.latency);

                };

            jQuery(this).bind('scroll', handler).data(uid1, handler);

        },
        teardown: function () {
            jQuery(this).unbind('scroll', jQuery(this).data(uid1));
        }
    };

    special.scrollstop = {
        latency: 150,
        setup: function () {

            var timer,
                handler = function (evt) {

                    var _self = this,
                        _args = arguments;

                    if (timer) {
                        clearTimeout(timer);
                    }

                    timer = setTimeout(function(){

                        timer = null;
                        evt.type = 'scrollstop';
                        jQuery.event.dispatch.apply(_self, _args);

                    }, special.scrollstop.latency);

                };

            jQuery(this).bind('scroll', handler).data(uid2, handler);

        },
        teardown: function() {
            jQuery(this).unbind( 'scroll', jQuery(this).data(uid2));
        }
    };

})();*/

$(function () {
//    var height = $(window).height() - 41;
//    var sections = $('section>.container');
//    var curSection = $(sections[0]);
//    sections.css('height', height);

//    sections.waypoint(function (direction) {
//        curSection = $(this);
//    }, {offset: '80%'});

//    $(window).bind('scrollstop', function () {
//        $('html, body').stop().animate({scrollTop: curSection.offset().top}, 250);
//    });

    $(function () {
        var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);

        if (!isMobile) {
            $.stellar({
                horizontalScrolling: false,
                responsive: false
            });
        }

        var setSectionHeight = function () {
            var windowHeight = $(window).height();
            $('section').css('height', windowHeight + 'px');
        };

        $(window).resize(function () {
            setSectionHeight();
        });

        setSectionHeight();
    });

    $('section')[0].scrollIntoView();

    $('#accordion1')
        .on('show', function () {
            $(this).find('i').removeClass('icon-chevron-right').addClass('icon-chevron-down');
        })
        .on('hide', function () {
            $(this).find('i').removeClass('icon-chevron-down').addClass('icon-chevron-right');
        });
});
