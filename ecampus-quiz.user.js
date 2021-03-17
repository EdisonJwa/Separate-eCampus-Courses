// ==UserScript==
// @name         eCampus 퀴즈 오답 표시
// @namespace    https://uv.uy/
// @version      0.1
// @description  Review 할 때 오답 부분 표시
// @author       Edison Jwa
// @match        https://ecampus.kookmin.ac.kr/mod/quiz/review.php?attempt=*&cmid=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var score = document.getElementsByClassName('grade');
    var info = document.getElementsByClassName('info');
    var answer = document.getElementsByClassName('outcome clearfix');
    var trafficlight = document.getElementsByClassName('trafficlight');
    for (var a = 0; a < score.length; a++) {
        var infoCard = info[a].style;
        var answerTab = answer[a].style;
        var trafficlightColor = trafficlight[a].style;
        var scoreGot = parseInt(score[a].innerText.split(" ")[1],10);
        var scoreMax = parseInt(score[a].innerText.split(" ")[4],10);
        if (scoreGot < scoreMax ){
            infoCard.setProperty('background-color', 'lavenderblush');
            answerTab.setProperty('background-color', 'lavenderblush');
            answerTab.setProperty('border-color', 'indianred');
            answerTab.setProperty('color', 'darkred');
            trafficlightColor.setProperty('background-color', 'palevioletred');
        }
    }
})();
