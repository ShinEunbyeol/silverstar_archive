package silverstar_archive.programmers.java.Lv_0.배열_두_배_만들기;

class Solution {
    public int[] solution(int[] numbers) {
        for(int i=0; i<numbers.length; i++) {
            numbers[i] *= 2;
        }
        return numbers;
    }
}