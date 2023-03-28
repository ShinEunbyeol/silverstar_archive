package silverstar_archive.programmers.java.Lv_0.최댓값_만들기_1;

import java.util.*;

class Solution {
    public int solution(int[] numbers) {
        Arrays.sort(numbers);
        int cnt = numbers.length;
        return numbers[cnt-1] * numbers[cnt-2];
    }
}