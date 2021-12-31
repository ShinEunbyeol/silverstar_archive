/*
    Description: 원본에서 기록된 좌표를 변경된 사이즈 화면에서의 좌표값을 리턴한다
    Parameter:
        original_target_width(INT): 실제 원본의 바탕 가로 사이즈(px)
        original_point_info(Array): 실제 좌표의 정보 배열([x:'', y:''])
        target_width(INT): 현재 표시하려는 바탕의 가로 사이즈(px)
        target_ele(Element): 현재 표시하려는 바탕 요소($(''))
        point_width(INT): (좌표점을 표시할 때 좌표점의 크기가 1px 이상일 때) 좌표점 도형의 가로 사이즈(px) => 좌표의 대상을 도형의 영점이 아닌 도형의 중심으로 맞추기 위해 사용됨
        print_point_flag(true/false): true이면 좌표값을 리턴하고 target_ele에 좌표점 표시까지 구현, false이면 x,y 좌표값만 리턴함
        point_number(INT): 좌표점의 고유번호
    Refer: 
        1) 좌표점 요소를 표시할 경우 point_ele 변수를 확인 후 수정해주세요
        2) 좌표점은 원형이나 정사각형을 권장합니다
        3) 좌표에 대해 추가적인 정보가 있을 경우 original_point_info 파라미터를 참고하여 수정해주세요
*/
function get_point_xy(original_target_width, original_point_info, target_width, target_ele, point_width="", print_point_flag=false, point_number=""){
    var original_point_x = original_point_info['x'];     // 실제 x좌표
    var original_point_y = original_point_info['y'];     // 실제 y좌표
    
    // var target_x = target_ele.offset().left;    // 현재 바탕의 영점(0,0)의 x좌표(가로)
    // var target_y = target_ele.offset().top;     // 현재 바탕의 영점(0,0)의 y좌표(세로)
    var target_x = 0;   // 현재 바탕의 영점(0,0)의 x좌표(가로)
    var target_y = 0;   // 현재 바탕의 영점(0,0)의 y좌표(세로)

    // 실제 바탕 사이즈에서 현재 바탕 사이즈로의 변환 비율
    var target_transfer_ratio = target_width / original_target_width;

    // 변환되는 좌표값
    var point_x = target_x + (original_point_x * target_transfer_ratio);
    var point_y = target_y + (original_point_y * target_transfer_ratio);
    
    // 좌표점의 크기가 1보다 크면 좌표의 대상을 좌표점 도형의 중심으로 설정함
    //* 좌표점이 원형이나 정사각형이 아닌 경우 완전한 중심이 아닐 수 있음
    if(point_width > 1){
        var point_half_width = point_width/2;
        point_x -= point_half_width;
        point_y -= point_half_width;
    }

    if(print_point_flag){
        // 좌표점을 표시한다
        var point_ele = $("<div id='point"+point_number+"' class='points'></div>");
        point_ele.offset({top: point_y, left: point_x});

        target_ele.append(point_ele);
    }
    
    // 좌표값을 리턴한다
    var result = {"x": point_x, "y": point_y};
    return result;
}