import * as common from './common.js';

const activeMenuClass = 'activeMenu';  // 활성화된 메인 메뉴 클래스
// const max_browserHeight = screen.availHeight - (window.outerHeight - window.innerHeight);   // 브라우저의 최대 높이

const arr_url = location.href.split('/');   // URL
const cnt_arr_url = arr_url.length;

document.addEventListener("DOMContentLoaded", function() {
    // 활성화된 메뉴 적용하기
    check_activeMenu(arr_url[cnt_arr_url-1]);

    // 스크롤 인식
    const tag_body = document.querySelector('body');
    tag_body.addEventListener('mousewheel', function() {    // scroll
        let scrollY = this.scrollTop;

        // 해당 구역에 맞는 메뉴 활성화
        let id_activeMainMenu = document.querySelector('#header').querySelector('.activeMenu').getAttribute('id');
        let areaList = document.querySelectorAll('.contentContainer')
        for(let area of areaList) {
            let top_area = area.getBoundingClientRect().top + scrollY;
            
            if(scrollY >= top_area) {
                let id_currentArea = area.getAttribute('id');
                check_activeMenu(id_activeMainMenu+'-'+id_currentArea);
            }
        }
    });

    // 메인/사이드 메뉴 클릭
    const tag_menu = document.querySelectorAll('.eachMenu');
    tag_menu.forEach((target) => target.addEventListener('click', function() {
        console.log('click');
        let id_currentMenu = target.getAttribute('id');
        if(id_currentMenu == 'api' || id_currentMenu == 'htmlcss') {
            swal({
                'text': '준비 중입니다 :)',
                'icon': 'warning'
            });
            return false;
        }

        // 활성화된 메뉴 적용하기
        check_activeMenu(id_currentMenu);

        // 클릭한 구역으로 이동하기
        move_menu(id_currentMenu);
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

    const tag_currentActiveMenu = document.querySelectorAll('.'+activeMenuClass);  // 이전에 선택된 메인/사이드 메뉴 노드
    const tag_mainMenu = document.getElementById(mainMenuId);                       // 선택된 메인 메뉴 노드
    const tag_sideMenuContainer = document.getElementById(mainMenuId+'-side');      // 선택된 사이트 메뉴 컨테이너 노드

    if(typeof sideMenuId == 'undefined') {
        sideMenuId = common.get_firstChild(tag_sideMenuContainer).getAttribute('id');
    }
    const tag_sideMenu = document.getElementById(sideMenuId);


    // 메인/사이드 메뉴 활성 변경
    for(let tag_cam of tag_currentActiveMenu) {
        tag_cam.classList.remove(activeMenuClass);
    }    
    tag_mainMenu.classList.add(activeMenuClass);
    tag_sideMenuContainer.classList.add(activeMenuClass);
    tag_sideMenu.classList.add(activeMenuClass);
}

/**
 * 메뉴 클릭 시 구역 이동하는 함수
 * @param {string} menuId 활성화된 메뉴 id ([메인메뉴]-[사이드메뉴])
 */
function move_menu(menuId) {
    // if(menuId.indexOf('-') != -1) { }else { }

    let pageType = document.getElementById(menuId).getAttribute('data-page');
    if(pageType == 'blank') {
        // 페이지 이동
        let url = "/" + menuId;
        // if(menuId.indexOf('-') != -1) {
        //     url = "/" + menuId.replace('-', '/');
        // }
        location.href = url;
    }else {
        // 영역 스크롤
        // 클릭한 메뉴 아이디에서 이동할 구역의 아이디 가져오기
        let areaId = menuId.split('-')[1];
    
        // 해당 구역으로 이동
        let tag_area =  document.querySelector('#'+areaId);
        tag_area.scrollIntoView({
            'behavior': 'smooth'
        });
    }
}