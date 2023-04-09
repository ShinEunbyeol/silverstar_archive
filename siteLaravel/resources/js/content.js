import * as typingLib from './library/typing.js';

const typingTextArr = ['문제 해결', '편리', '성장', '논리'];

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typingLib.typing, 1000, typingTextArr);
});