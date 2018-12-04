/* PrognRoll | https://mburakerman.github.io/prognroll/ | @mburakerman | License: MIT */
(function($) {
    $.fn.prognroll = function(options) {

        var settings = $.extend({
            height: 5, //Progress bar height
            throttle: 0,
            trailing: false,
            leading: false,
            //color: "#50bcb6", //Progress bar background color
            custom: false, //If you make it true, you can add your custom div and see it's scroll progress on the page.
            class: null
        }, options);

        return this.each(function() {
            if ($$(this).data('prognroll')) {
                return false;
            }
            $$(this).data('prognroll', true);

            var $span = $$("<span>", {
            });
            $$(this).prepend($span);

            $span.css({
                //position: "fixed",
                //top: 0,
                //left: 0,
                width: 0,
                height: settings.height,
                //backgroundColor: settings.color,
                //zIndex: 9999999
            });

            $span.addClass(settings.class);

            if (settings.custom === false) {

                $$(window).on("scroll", _.throttle(function(e) {
                    e.preventDefault();
                    var windowScrollTop = $$(window).scrollTop(),
                        windowHeight = $$(window).outerHeight(),
                        bodyHeight = $$(document).height(),
                        total = (windowScrollTop / (bodyHeight - windowHeight)) * 100;

                    $$(".scroll-progress").css("width", total + "%");
                }, settings.throttle, {trailing: $throttleTrail, leading: $throttleLeading} ));

            } else {

                $$(this).on("scroll", _.throttle(function(e) {
                    e.preventDefault();
                    var customScrollTop = $$(this).scrollTop(),
                        customHeight = $$(this).outerHeight(),
                        customScrollHeight = $$(this).prop("scrollHeight"),
                        total = (customScrollTop / (customScrollHeight - customHeight)) * 100;

                    $$(".bar").css("width", total + "%");
                }, settings.throttle, {trailing: settings.trailing, leading: settings.leading} ));

            }

            /* Get scroll position on page load */
            $$(window).on('hashchange', function(e) {
                e.preventDefault();
                console.log($$(window).scrollTop());
            });
            $$(window).trigger('hashchange');

            var windowScrollTop = $$(window).scrollTop(),
                windowHeight = $$(window).outerHeight(),
                bodyHeight = $$("body").outerHeight(),
                total = (windowScrollTop / (bodyHeight - windowHeight)) * 100;

            $$(".scroll-progress").css("width", total + "%");
            /* Get scroll position on on page load */

        });
    };
})(jQuery);