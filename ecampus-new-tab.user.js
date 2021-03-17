// ==UserScript==
// @name         eCampus new tab
// @namespace    https://uv.uy/
// @version      0.1
// @description  Open Course in new tab
// @author       Edison Jwa
// @match        https://ecampus.kookmin.ac.kr/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var courses = document.getElementsByClassName('course-link');
    for (var c = 0; c < courses.length; c++) {
        courses[c].setAttribute('target', '_blank')
    }
})();
