### 목적
공공 데이터포털에서 "기상청_단기예보 ((구)_동네예보) 조회서비스" OpenAPI를 활용하여 필요한 지역별로 원하는 기상 정보를 DB에 저장한다
<br><br>

### 주의사항(Require)
* 공공 데이터포털에서 해당 API를 신청한 후 키를 받아 $api_key를 수정해주세요
<br><br>

### 파일 구분
* PHP/save_weather.php: crontab에 등록하여 일정 시간마다 기상 정보를 DB에 저장합니다
<br><br>

### 참고
* [선택]으로 구분되는 코드는 필요하지 않다면 삭제해도 괜찮은 코드입니다
* [수정]으로 구분되는 코드는 상황에 맞게 변경해야 하는 코드입니다.
<br><br>

### DB Table 정보
* weather_info

Field        | Data Type        | Description 
:----------: | :--------------: | ----------- 
idx          | INT(Primary key) | 고유번호     
regdate      | DATETIME         | 등록일       
