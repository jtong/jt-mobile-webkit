/**
 * Created with JetBrains WebStorm.
 * User: twer
 * Date: 9/10/12
 * Time: 2:35 PM
 * To change this template use File | Settings | File Templates.
 */
var myScroll,
    hoverClassRegEx = new RegExp('(^|\\s)iScrollHover(\\s|$)'),
    removeClass = function () {
        if (this.hoverTarget) {
            clearTimeout(this.hoverTimeout);
            this.hoverTarget.className = this.hoverTarget.className.replace(hoverClassRegEx, '');
            this.target = null;
        }
    };

function loaded() {
    myScroll = new iScroll('wrapper', {
        onBeforeScrollStart: function (e) {
            var target = e.target;

            clearTimeout(this.hoverTimeout);

            while (target.nodeType != 1) target = target.parentNode;

            this.hoverTimeout = setTimeout(function () {
                if (!hoverClassRegEx.test(target.className)) target.className = target.className ? target.className + ' iScrollHover' : 'iScrollHover';
            }, 80);

            this.hoverTarget = target;

            e.preventDefault();
        },
        onScrollMove: removeClass,
        onBeforeScrollEnd: removeClass
    });
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false);
