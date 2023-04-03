@extends('index')

@section('pageTitle', '페이지이름')

@section('css')
    <link rel="stylesheet" href="{{ asset('css/main.css') }}" />
@endsection

@section('js')

@endsection

@section('content')
    <div id="like_button_container">
        인트로
    </div>
    
    {{-- React 실행 --}}
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

    {{-- 만든 React 컴포넌트를 실행 --}}
    <script src="{{ asset('js/reactTest.js') }}"></script>
@endsection 