// ==UserScript==
// @name         eCampus 과목 구분
// @namespace    https://uv.uy/
// @version      0.1
// @description  Add some differences between Undergraduate and master courses
// @author       Edison Jwa
// @match        https://ecampus.smu.ac.kr/
// @match        https://ecampus.seowon.ac.kr/
// @match        https://ecampus.tu.ac.kr/
// @match        https://ecampus.ut.ac.kr/
// @match        https://ecampus.konkuk.ac.kr/
// @match        https://ecampus.kookmin.ac.kr/
// @match        https://ecampus.khu.ac.kr/
// @match        https://ecampus.kangnam.ac.kr/
// @match        https://ecampus.scnu.ac.kr/
// @match        https://ecampus.pro.ac.kr/
// @match        https://ecampus.halla.ac.kr/

// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var inputs = document.getElementsByClassName('badge-coursetype-under');
    var badge = document.getElementsByClassName('badge-coursetype-re');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].innerText == "대학원"){
            var st = inputs[i].style;
            st.setProperty('color', 'salmon');
            st.setProperty('border', '1px solid salmon');
            var bd = badge[i].style;
            bd.setProperty('background-color', 'salmon');
            bd.setProperty('border', 'salmon');
        }
    }
})();
