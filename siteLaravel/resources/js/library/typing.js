/**
 * HTML ex)
 *      <span class="typingContainer">
 *          <span class='typingText'></span>
 *          <span class="typingCursor"></span>
 *      </span>
 */

var span_typingText;
var span_typingCursor;
document.addEventListener("DOMContentLoaded", function() {
    span_typingText = document.querySelector('.typingText');
    span_typingCursor = document.querySelector('.typingCursor');
});

// const textArray = ['welcome', 'to', 'my', 'wolrd'];
const typingDelay = 200;            // 글자 입력 후에 다시 입력되기까지의 딜레이
const erasingDelay = 100;           // 글자 지우기 후에 다시 지우기까지의 딜레이 
const beforeErasingDelay = 2000;    // 단어 입력 완료 후 지우기까지의 딜레이
const beforeNewTypingDelay = 1000;  // 단어 지우기 완료 후 다음 단어를 입력하기까지의 딜레이

let idx_textArray = 0;  // 입력해야 하는 단어의 인덱스(ex. 'my' => idx_textArray=2)
let idx_letter = 0;     // 입력 중인 현재 글자 위치 인덱스

/**
 * 타이핑 애니메이션을 적용하는 것에서 글자 입력을 담당하는 함수
 * call ex) setTimeout(typing, 1000, typingTextArr);
 * @param {Array} textArray 타이핑할 문자열 배열
 */
export function typing(textArray) {
    const count_currentWord = textArray[idx_textArray].length;    // 입력해야 하는 단어의 길이
    if(idx_letter < count_currentWord) {
        // 글자 입력
        const notBlink = span_typingCursor.classList.contains('typing');
        if(!notBlink) {
            span_typingCursor.classList.add('typing');
        }
        span_typingText.textContent += textArray[idx_textArray].charAt(idx_letter);
        idx_letter ++;

        setTimeout(typing, typingDelay, textArray);
    }else {
        // 글자 입력 완료, 지우기 실행
        span_typingCursor.classList.remove('typing');
        setTimeout(erasing, beforeErasingDelay, textArray);
    }
}

/**
 * 타이핑 애니메이션을 적용하는 것에서 글자 제거를 담당하는 함수
 * @param {Array} textArray 타이핑할 문자열 배열
 */
function erasing(textArray) {
    if(idx_letter > 0) {
        // 글자 지우기
        const notBlink = span_typingCursor.classList.contains('typing');
        if(!notBlink) {
            span_typingCursor.classList.add('typing');
        }
        span_typingText.textContent = textArray[idx_textArray].substring(0, idx_letter - 1);
        idx_letter --;

        setTimeout(erasing, erasingDelay, textArray);
    }else {
        // 글자 지우기 완료, 다음 단어 입력 실행
        span_typingCursor.classList.remove('typing');
        idx_textArray ++;

        const count_textArray = textArray.length;
        if(idx_textArray >= count_textArray) {
            idx_textArray = 0;
        }

        setTimeout(typing, beforeNewTypingDelay, textArray);
    }
}