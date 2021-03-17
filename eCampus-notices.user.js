// ==UserScript==
// @name         eCampus 공지 위치 변경
// @namespace    https://uv.uy/
// @version      0.2
// @description  Relocate the notices
// @author       Edison Jwa
// @match        https://ecampus.kookmin.ac.kr/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var notice = document.getElementsByClassName('modal-ubboard-notice');
    for (var j = 0; j < notice.length; j++) {
        var nt = notice[j].style;
        var resizeNotice = 500;
        if (self.innerWidth <= 1200 ){
            nt.setProperty('width', '300px');
            nt.setProperty('min-width', 'auto');
            resizeNotice = 300;
        }
        if (self.innerWidth <= 800 ){
            nt.setProperty('height', '50px');
            nt.setProperty('min-height', 'auto');
            var smMax = window.innerWidth - resizeNotice - 20 + 'px';
            nt.setProperty('left', smMax);
            var smTop = window.innerHeight - ((notice.length - j) * 50) - 5 + 'px';
            nt.setProperty('top', smTop);
        } else {
            var max = window.innerWidth - resizeNotice - ((notice.length - j + 1) * 20) + 'px';
            nt.setProperty('left', max);
        }
    }
})();
