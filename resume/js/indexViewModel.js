/**
 * Created by wj on 2016/3/29.
 */
define(['knockout', 'jquery'], function (ko, $) {
    function indexViewModel() {
        var self = this;
        self.goToGame = function (data, e) {
            location.href = $(e.target).attr('data-game');
        };
    }

    return indexViewModel;
});