@extends('index')

@section('pageTitle', 'Eunbyeol Shin')

@section('css')
    <link rel="stylesheet" href="{{ url('css/content.css'); }}">
@endsection

@section('js')
    <script src="{{ url('js/content.js'); }}"></script>
@endsection

@section('content')
    <div id="eunbyeolShin">
        <div class="greeting">
            안녕하세요!<br>
            <br>
            <span id='favorite_thing' class='blue1'>문제 해결</span>을 좋아하는<br>
            개발자 <span class='blue1'>신은별</span>입니다。
        </div>
        <div class="introduce mt200">
            [예시]<br>
            완벽한 것은 존재하지 않다고 생각하기에 개선 요소를 찾으려고 노력하는 풀스택 4년차 개발자 신은별 입니다.<br>
            <br>
            사람의 기억은 완벽하지 않습니다.<br>
            그렇기에 배운 것을 기술 블로그에 포스팅하는 것으로 완벽하지 않은 기억을 보충하며 비슷한 어려움을 겪을 수 있는 사람들에게 공유를 하고 있습니다.<br>
            <br>
            데이터를 기반으로 사용자가 원하는 정보를 전달해줄 수 있는 로직을 만드는 개발자가 되는 것이 목표입니다.
        </div>
    </div>
@endsection 