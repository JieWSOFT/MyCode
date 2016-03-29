/**
 * Created by wj on 2016/3/28.
 */
require(['jquery', 'knockout', 'indexViewModel'], function ($, ko, indexViewModel) {
    window.indexViewModel = new indexViewModel();
    $(document).ready(function () {
        ko.applyBindings(indexViewModel, document.getElementById('index'));
        $('#myContent').fullpage({
            css3: true,
            scrollingSpeed: 400,
            anchors: ['page1', 'page2', 'page3', 'page4'],
            menu: "#menu",
            loopBottom: true,
            loopTop: true,
            verticalCentered: true,
            resize: true,
            "afterRender": function () {
                //页面主体内容自动垂直居中
                $("#menu").css({"top": ($("body").height() - $("#menu").height()) / 2});
                $("#resume1").css({"padding-top": ($("body").height() - $("#resume1").height()) / 3});
                $("#about").css({"padding-top": ($("body").height() - $("#about").height()) / 3});
                $("#skill").css({"padding-top": ($("body").height() - $("#skill").height()) / 3});
                $("#experience").css({"padding-top": ($("body").height() - $("#experience").height()) / 6});
            }
        });
        $('#banner').unslider({
            speed: 500
        });
    });
});