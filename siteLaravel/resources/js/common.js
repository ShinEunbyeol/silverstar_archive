export function test() {
    console.log(test);
}

/**
 * firstChild 리턴값을 Text타입에서 Element타입으로 변경하는 함수
 * @param {Element} element 첫번째 자식 노드를 가져오려는 부모 노드
 * @returns Element타입의 첫번째 자식 노드
 */
export function get_firstChild(element) {
    let firstChild = element.firstChild;
    while(firstChild != null && firstChild.nodeType == 3) {
        firstChild = firstChild.nextSibling;
    }

    return firstChild;
}

/**
 * TZDate를 문자열(배열) 형식으로 변경
 * @param {TZDate} date TZDate 형식의 날짜 값
 * @param {String} type 리턴할 날짜의 형식
 *                      date: Y-m-d
 *                      datetime: Y-m-d H:i:s
 *                      ym: y-m
 *                      md: m-d
 *                      element: 각 연,월,일,시,분,초의 문자열 배열
 * @returns 문자열 또는 문자열 배열의 날짜 리턴
 */
export function transition_tzdateToYmd(date, type) {
    type = typeof type !== 'undefined' ? type : 'datetime';

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    let result;
    switch(type) {
        case 'date':
            result = year + '-' + month + '-' + day;
            break;
        case 'datetime':
            result = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
            break;
        case 'ym':
            result = year + '-' + month;
            break;
        case 'md':
            result = month + '-' + day;
            break;
        case 'element':
            result = {
                'year': year,
                'month': month,
                'day': day,
                'hour': hour,
                'minute': minute,
                'second': second
            }
            break;
    }

    return result;
}