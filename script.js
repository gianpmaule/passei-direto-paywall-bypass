// ==UserScript==
// @name         Script for passeidireto.com paywall removal
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remove paywall
// @author       shenzuni
// @match        *://www.passeidireto.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    window.addEventListener('load', () => setInterval(() => {
        let textBlurs = document.querySelectorAll('[style="filter: blur(10px);"]');
        textBlurs.forEach(textBlur => {
            textBlur.removeAttribute("style");
        });
        let unlocks = document.querySelectorAll('.limitation-unlock-rewards, .mv-content-limitation-fake-page');
        unlocks.forEach(unlock => {
            unlock.remove();
        });
    }, 1000));
})();