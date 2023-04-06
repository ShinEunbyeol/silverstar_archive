const class_activeMenu = 'activeMenu';  // 활성화된 메인 메뉴

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelectorAll('.eachMenu');
    menu.forEach((target) => target.addEventListener('click', function() {
        check_activeMenu(target.getAttribute('id'));
    }));
});

/**
 * 활성화된 메뉴에 따라서 자동으로 적용해주는 함수
 * @param {string} mainMenu 활성화된 메인 메뉴 id
 */
function check_activeMenu(mainMenu) {
    const tag_currentActiveMenu = document.querySelectorAll('.'+class_activeMenu);
    const tag_mainMenu = document.getElementById(mainMenu);
    const tag_sideMenu = document.getElementById(mainMenu+'-side');

    // 메인/사이드 메뉴 활성 변경
    for(let tag_cam of tag_currentActiveMenu) {
        tag_cam.classList.remove(class_activeMenu);
    }    
    tag_mainMenu.classList.add(class_activeMenu);
    tag_sideMenu.classList.add(class_activeMenu);
}