package silverstar_archive.programmers.java.Lv_0.배열의_평균값;

import java.util.stream.*;

class Solution {
    public double solution(int[] numbers) {
        return (double)IntStream.of(numbers).sum() / numbers.length;
    }
}