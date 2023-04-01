# 배열 자르기
## **[문제]**
정수 배열 **numbers**와 정수 **num1**, **num2**가 매개변수로 주어질 때,<br>
**numbers**의 **num1**번째 인덱스부터 **num2**번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해주세요.<br>
<br>

## **[제한사항]**
* 2 <= numbers의 길이 <= 30
* 0 <= numbers의 원소 <= 1,000
* 0 <= num1 < num2 < numbers의 길이
<br><br>

## **[입출력 예]**
ex.1) numbers=[1,2,3,4,5] / num1=1 / num2=3<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result=[2,3,4]<br>
ex.2) numbers=[1,3,5] / num1=1 / num2=2<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result=[3,5]<br>