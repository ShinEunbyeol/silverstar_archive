@extends('index')

@section('pageTitle', 'Eunbyeol Shin')

@section('css')
    <link rel="stylesheet" href="{{ url('css/library/typing.css') }}">
    <link rel="stylesheet" href="{{ url('css/content.css'); }}">
@endsection

@section('js')
    <script src="{{ url('js/content.js'); }}"></script>
@endsection

@section('content')
    <div id="eunbyeolShin" class="contentContainer verticalCenterParent">
        <div class="verticalCenterChildren">
            <div class="greeting">
                안녕하세요!<br>
                <br>
                <span class="typingContainer">
                    <span id="favorite_thing" class="typingText blue1"></span>
                    <span class="typingCursor"></span>을 좋아하는<br>
                </span>
                개발자 <span class="blue1">신은별</span>입니다。
            </div>
            <div class="introduce widthPer100 mt125">
                완벽한 것은 존재하지 않다고 생각하기에 개선 요소를 찾으려고 노력하는 풀스택 4년차 개발자 신은별 입니다.<br>
                <br>
                사람의 기억은 완벽하지 않습니다.<br>
                그렇기에 배운 것을 기술 블로그에 포스팅하는 것으로 완벽하지 않은 기억을 보충하며 비슷한 어려움을 겪을 수 있는 사람들에게 공유를 하고 있습니다.<br>
                <br>
                데이터를 기반으로 사용자가 원하는 정보를 전달해줄 수 있는 로직을 만드는 개발자가 되는 것이 목표입니다.
            </div>
        </div>
    </div>

    <div id="skill" class="contentContainer verticalCenterParent">
        <div class="relative verticalCenterChildren">
            <div id="php" class="skillBlock">
                <div class="star_1">
                    <i class="fa-solid fa-star"></i>
                </div>
                PHP
            </div>
            <div id="laravel" class="skillBlock">
                <div class="star_2">
                    <i class="fa-solid fa-star"></i>
                </div>
                Laravel
            </div>
            <div id="codeigniter" class="skillBlock">
                <div class="star_3">
                    <i class="fa-solid fa-star"></i>
                </div>
                CodeIgniter
            </div>
            <div id="linux" class="skillBlock">
                <div class="star_2">
                    <i class="fa-solid fa-star"></i>
                </div>
                Linux
            </div>
            <div id="aws" class="skillBlock">
                <div class="star_1">
                    <i class="fa-solid fa-star"></i>
                </div>
                AWS
            </div>
            <div id="mysql" class="skillBlock">
                <div class="star_1">
                    <i class="fa-solid fa-star"></i>
                </div>
                MySQL
            </div>
            <div id="git" class="skillBlock">
                <div class="star_2">
                    <i class="fa-solid fa-star"></i>
                </div>
                Git
            </div>
            <div id="html_css" class="skillBlock">
                <div class="star_3">
                    <i class="fa-solid fa-star"></i>
                </div>
                HTML/CSS
            </div>
            <div id="scss" class="skillBlock">
                <div class="star_2">
                    <i class="fa-solid fa-star"></i>
                </div>
                SCSS
            </div>
            <div id="javascript" class="skillBlock">
                <div class="star_2">
                    <i class="fa-solid fa-star"></i>
                </div>
                JavaScript
            </div>
            <div id="jquery" class="skillBlock">
                <div class="star_3">
                    <i class="fa-solid fa-star"></i>
                </div>
                jQuery
            </div>
        </div>
    </div>

    <div id="career" class="contentContainer verticalCenterParent">
        <div class="verticalCenterChildren">
            <div id="career_graph" class="widthPer100 textCenter">
                {{-- === 그래프 위치 === --}}
            </div>
            <div class="fontTooBig mt50">
                Graduation
            </div>
            <div class="line row">
                <div class="col-4">
                    2018
                </div>
                <div class="col-8">
                    동양미래대학교 컴퓨터정보공학과 졸업
                </div>
            </div>
            <div class="line row">
                <div class="col-4">
                    2016
                </div>
                <div class="col-8">
                    동양미래대학교 컴퓨터정보공학과 입학
                </div>
            </div>
            <div class="line row">
                <div class="col-4">
                    2016
                </div>
                <div class="col-8">
                    정왕고등학교 졸업
                </div>
            </div>
            <div class="fontTooBig mt50">
                Work
            </div>
            <div class="line row">
                <div class="col-4">
                    2022.01 - 2023.01
                </div> 
                <div class="col-8">
                    렛츠밀란커머스 / 개발팀 매니저
                </div>
            </div>
            <div class="line row">
                <div class="col-4">
                    2018.11 - 2021.06
                </div>
                <div class="col-8">
                    토리랩 / 개발팀 연구원
                </div>
            </div>
        </div>
    </div>

    <div id="contact" class="contentContainer verticalCenterParent">
        <div class="verticalCenterChildren">
            <div class="row">
                <a class="col-4 contactType" href="https://estrella13.tistory.com/" target="_blank">
                    <img class="contactImg" src="{{ url('image/tistory.png'); }}" alt="티스토리">
                    블로그
                </a>
                <a class="col-4 contactType" href="https://github.com/ShinEunbyeol" target="_blank">
                    <img class="contactImg" src="{{ url('image/github.png'); }}" alt="깃허브">
                    GitHub
                </a>
                <a class="col-4 contactType" href="mailto:silverbyeol97@gmail.com" target="_blank">
                    <img class="contactImg" src="{{ url('image/gmail.png'); }}" alt="지메일">
                    Gmail
                </a>
            </div>
            <div class="contactDownload widthPer100 textCenter">
                <div class="mt50">
                    <a href="{{ url('file/resume_eunbyeolShin.pdf'); }}" target="_blank">이력서 파일</a>
                </div>
                <div class="mt30">
                    <a href="{{ url('file/careerDescription_eunbyeolShin.pdf'); }}" target="_blank">경력기술서 파일</a>
                </div>
            </div>
        </div>
    </div>
    
    <div id="astronaut">
        <img src="{{ url('image/astronaut.png') }}">
    </div>
@endsection 