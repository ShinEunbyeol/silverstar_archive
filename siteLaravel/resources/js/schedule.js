import { transition_tzdateToYmd } from "./common";

// 캘린더 객체
let calendar;
const Calendar = tui.Calendar;

document.addEventListener("DOMContentLoaded", function() {
    // 캘린더 생성
    create_calendar();

    // 캘린더 상단 설정값에 따라 초기 세팅
    change_calendarType();

    // 연도-월 선택으로 캘린더 날짜 변경
    const tag_calendarDate = document.getElementById('calendar_date');
    tag_calendarDate.addEventListener("change", function() {
        const changeDate = this.value;
        change_calendarDate("specific", changeDate);
    });
    
    // 캘린더 이동하기
    const tag_dateController = document.querySelectorAll('.dateController');
    tag_dateController.forEach((target) => target.addEventListener("click", function() {
        const type = this.getAttribute('changeType');
        let changeDate = '';
        if(type == "specific") {
            changeDate = this.value;
        }        
        change_calendarDate(type, changeDate);
    }));

    // 캘린더 종류 변경
    const tag_calendarType = document.getElementById('calendar_type');
    tag_calendarType.addEventListener("change", function() {
        change_calendarType();
    })

    // 주말 포함 여부
    const tag_onlyWorkDay = document.getElementById('contain_weekend');
    tag_onlyWorkDay.addEventListener("change", function() {
        change_calendarType();
    });
});

/**
 * 캘린더 생성
 */
function create_calendar() {
    // 캘린더 언어 배열
    const calendarLanguage = {
        "dayname": ["일", "월", "화", "수", "목", "금", "토"],
        "subject": "일정명",
        "content": "설명",
        "allday": "종일",
        "save": "저장",
        "edit": "수정",
        "delete": "삭제"
    };

    // 캘린더 생성
    const tag_calendar = document.getElementById('calendar');
    const calendarConfig = {
        defaultView: "month",					// day, week, month
        taskView: false,						// true, false, milestone, task
        scheduleView: true,						// true, false, allday, time
        month: {
            isAlways6Week: false				// 해당 월에 맞춰서 줄 수 생성함(true이면 월이 며칠까지 있는 가에 상관없이 무조건 6줄씩 표시함)
        },
        useCreationPopup: false,				// 제공되는 일정 생성 팝업 사용 여부
        useDetailPopup: true,					// 제공되는 일정 상세보기 팝업 사용 여부
        timezone: {
            zones: [	                        // 타임존을 추가할 경우, 주/일 캘린더에서 왼쪽에 추가로 시간 정보가 표시된다(첫번째로 작성한 것이 default(primary))
                {
                    timezoneName: 'Asia/Seoul',
                    displayLabel: 'GMT+09:00',
                    tooltip: 'Seoul'
                }
            ]
        },
        template: {
            allday: "하루",
            time: "시간",
            monthDayname: function(dayname) {   // 월 단위 달력에서 요일 단어 표시(한글화)
                return calendarLanguage['dayname'][dayname.day];
            },
            weekDayname: function(dayname) {    // 주 단위 달력에서 날짜&요일 단어 표시(한글화)
                return "<span class='tui-full-calendar-dayname-date'>" +
                           dayname.date +
                        "</span>" +
                        "&nbsp;&nbsp;" +
                        "<span class='tui-full-calendar-dayname-name'>" +
                            calendarLanguage['dayname'][dayname.day] +
                        "</span>";
            },
            alldayTitle: function() {   // 달력에서 "All Day" 한글화
                return "<span class='tui-full-calendar-left-content'>" + calendarLanguage['allday'] + "</span>";
            },
            popupEdit: function() {     // 상세정보 팝업창 "Edit" 한글화
                return calendarLanguage['edit'];
            },
            popupDelete: function() {   // 상세정보 팝업창 "Delete" 한글화
                return calendarLanguage['delete'];
            }
        }
    };
    calendar = new Calendar(tag_calendar, calendarConfig);
    
    // 현재 날짜 정보 표시
    display_dateInfo();
}

/**
 * 캘린더의 현재 날짜 정보 표시
 */
function display_dateInfo() {
    const todayYm = transition_tzdateToYmd(calendar.getDate(), 'ym');
    document.getElementById('calendar_date').value = todayYm;
}

/**
 * 캘린더 날짜 이동
 * @param {String} changeType 캘린더의 날짜를 변경할 방법
 *                            prev: 이전 월(주)으로 이동
 *                            next: 다음 월(주)으로 이동
 *                            today: 오늘 날짜가 있는 캘린더로 이동
 *                            specific: 특정 날짜가 있는 캘린더로 이동
 * @param {String | TZDate} setDate 변경할 특정 날짜값(changeType==specific일 때 입력)
 */
function change_calendarDate(changeType, setDate) {
    setDate = typeof setDate !== 'undefined' ? setDate : '';

    switch(changeType) {
        case 'prev':
            calendar.prev();
            break;
        case 'next':
            calendar.next();
            break;
        case 'today':
            calendar.today();
            break;
        case 'specific':
            calendar.setDate(new Date(setDate));
            break;
    }
}

/**
 * 캘린더 표시 종류 변경
 */
function change_calendarType() {
    let changeConfig = {};

    // 캘린더 표시 범위(월 / 1주 / 2주)
    const tag_calendarType = document.getElementById('calendar_type');
    const valarr_calendarType = tag_calendarType.options[tag_calendarType.selectedIndex].value.split('_');
    const viewRangeType = valarr_calendarType[0];
    const viewRangeCnt = typeof valarr_calendarType[1] !== 'undefined' ? valarr_calendarType[1] : '';

    // 주말 포함 여부
    const checked_containWeekend = document.getElementById('contain_weekend').checked;

    // 위 정보에 맞게 캘린더 설정 변경
    changeConfig.month = {
        'visibleWeeksCount': viewRangeCnt,
        'workweek': checked_containWeekend
    };
    changeConfig.week = {
        'workweek': checked_containWeekend
    }

    // 캘린더 표시 변경
    calendar.setOptions(changeConfig);
    calendar.changeView(viewRangeType);
}