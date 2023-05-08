@extends('index')

@section('pageTitle', '일정 관리')

@section('css')
    {{-- tui.calendar style --}}
    <link rel="stylesheet" type="text/css" href="https://uicdn.toast.com/tui-calendar/latest/tui-calendar.css" />
    {{-- If you use the default popups, use this --}}
    <link rel="stylesheet" type="text/css" href="https://uicdn.toast.com/tui.date-picker/latest/tui-date-picker.css" />
    <link rel="stylesheet" type="text/css" href="https://uicdn.toast.com/tui.time-picker/latest/tui-time-picker.css" />

    <link rel="stylesheet" type="text/css" href="{{ url('css/schedule.css'); }}">
@endsection

@section('js')
    {{-- tui.calendar script --}}
    <script src="https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js"></script>
    <script src="https://uicdn.toast.com/tui.time-picker/latest/tui-time-picker.min.js"></script>
    <script src="https://uicdn.toast.com/tui.date-picker/latest/tui-date-picker.min.js"></script>
    <script src="https://uicdn.toast.com/tui-calendar/latest/tui-calendar.js"></script>

    <script type="text/javascript" src="{{ url('js/schedule.js'); }}"></script>
@endsection

@section('content')
    {{-- 캘린더 상단 --}}
    <div id="calendar_header">
        {{-- 캘린더 연월 선택 --}}
        <div id="today_date">
            <input type="month" id="calendar_date" class="dateController" changeType="specific">
        </div>

        {{-- 캘린더 이동 컨트롤 --}}
        <div class="changeDateContainer">
            <div id="prev_date" class="arrowShape dateController" changeType="prev">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
            <div id="next_date" class="arrowShape dateController" changeType="next">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
            <div id="to_today" class="dateController" changeType="today">
                Today
            </div>
        </div>

        {{-- 주말 포함 여부 --}}
        <div class="containWeekendContainer">
            <label><input type="checkbox" id="contain_weekend"> 주말 포함</label>
        </div>

        {{-- 캘린더 종류 --}}
        <div class="calendarTypeContainer">
            <select name="calendar_type" id="calendar_type">
                <option value="month">월</option>
                <option value="month_1">1주</option>
                <option value="month_2">2주</option>
            </select>
        </div>
    </div>

    {{-- 캘린더 --}}
    <div id="calendar"></div>
@endsection