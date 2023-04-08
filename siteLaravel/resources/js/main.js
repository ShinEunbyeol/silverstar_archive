import * as common from './common.js';

const class_activeMenu = 'activeMenu';  // 활성화된 메인 메뉴

document.addEventListener("DOMContentLoaded", function() {
    // 메인/사이드 메뉴 클릭
    const tag_menu = document.querySelectorAll('.eachMenu');
    tag_menu.forEach((target) => target.addEventListener('click', function() {
        check_activeMenu(target.getAttribute('id'));
    }));
});

/**
 * 활성화된 메뉴에 따라서 자동으로 적용해주는 함수
 * @param {string} menuId 활성화된 메뉴 id ([메인메뉴]-[사이드메뉴])
 */
function check_activeMenu(menuId) {
    let mainMenuId;     // 메인 메뉴 id
    let sideMenuId;     // 사이드 메뉴 id
    if(menuId.indexOf('-') != -1) {
        let split_menuId = menuId.split('-');
        mainMenuId = split_menuId[0];
        sideMenuId = menuId;
    }else {
        mainMenuId = menuId;
    }

    const tag_currentActiveMenu = document.querySelectorAll('.'+class_activeMenu);  // 이전에 선택된 메인/사이드 메뉴 노드
    const tag_mainMenu = document.getElementById(mainMenuId);                       // 선택된 메인 메뉴 노드
    const tag_sideMenuContainer = document.getElementById(mainMenuId+'-side');      // 선택된 사이트 메뉴 컨테이너 노드

    if(typeof sideMenuId == 'undefined') {
        sideMenuId = common.get_firstChild(tag_sideMenuContainer).getAttribute('id');
    }
    const tag_sideMenu = document.getElementById(sideMenuId);


    // 메인/사이드 메뉴 활성 변경
    for(let tag_cam of tag_currentActiveMenu) {
        tag_cam.classList.remove(class_activeMenu);
    }    
    tag_mainMenu.classList.add(class_activeMenu);
    tag_sideMenuContainer.classList.add(class_activeMenu);
    tag_sideMenu.classList.add(class_activeMenu);
}