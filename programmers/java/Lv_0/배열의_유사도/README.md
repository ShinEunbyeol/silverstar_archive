# 배열의 유사도
## **[문제]**
두 배열이 얼마나 유사한지 확인해보려고 합니다.
문자열 배열 **s1**과 **s2**가 주어질 때,
같은 원소의 개수를 return 하도록 solution 함수를 완성해주세요.
<br>

## **[제한사항]**
* 1 <= s1, s2의 길이 <= 100
* 1 <= s1, s2의 원소의 길이 <= 10
* s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다.
* s1과 s2는 각각 중복된 원소를 갖지 않습니다.
<br><br>

## **[입출력 예]**
ex.1) s1=["a","b","c"] / s2=["com","b","d","p","c"]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result=2<br>
ex.2) s1=["n","omg"] / s2=["m","dot"]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;result=0<br>