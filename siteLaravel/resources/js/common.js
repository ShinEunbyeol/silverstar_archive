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