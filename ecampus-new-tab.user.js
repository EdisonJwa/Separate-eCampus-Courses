// ==UserScript==
// @name         eCampus new tab
// @namespace    https://uv.uy/
// @version      1.0.0
// @description  Open Courses and attachments in new tab
// @author       Edison Jwa
// @match        https://ecampus.kookmin.ac.kr/
// @match        https://ecampus.kookmin.ac.kr/course/view.php?id=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var courses = document.getElementsByClassName('course-link');
    for (var c = 0; c < courses.length; c++) {
        courses[c].setAttribute('target', '_blank')
    }
    var attachment = document.getElementsByClassName('aalink ');
    for (var d = 0; d < attachment.length; d++) {
        attachment[d].setAttribute('target', '_blank')
    }
})();

