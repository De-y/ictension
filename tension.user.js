// ==UserScript==
// @name         Infinite Campus Tension
// @namespace    *.infinitecampus.org/campus/nav-wrapper
// @version      1.0
// @description  Basically SPYxFamily OST music "front lines" plays when you run infinite campus.
// @author       De-y
// @match        https://*.infinitecampus.org/campus/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=infinitecampus.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("𝘐𝘯𝘪𝘵𝘪𝘢𝘭𝘪𝘻𝘦𝘥. 𝘞𝘢𝘪𝘵𝘪𝘯𝘨 𝘧𝘰𝘳 𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭 𝘳𝘰𝘶𝘵𝘦.");
    var audioPlayed = false;
    function checkURLAndPlayAudio() {
        if (window.location.href.indexOf("/nav-wrapper/") > -1 && !audioPlayed) {
            console.log("𝘛𝘦𝘯𝘴𝘪𝘰𝘯 𝘔𝘶𝘴𝘪𝘤 𝘗𝘭𝘢𝘺𝘴");
            var audio = new Audio('https://avnce.org/audios/frontline.mp3');
            audio.loop = true;
            audio.play();
            audioPlayed = true;
        }
    }
    setInterval(checkURLAndPlayAudio, 2000);
})();
