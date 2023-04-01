package silverstar_archive.programmers.java.Lv_0.배열_자르기;

import java.util.*;

class Solution {
    public int[] solution(int[] numbers, int num1, int num2) {
        return Arrays.copyOfRange(numbers, num1, num2+1);
    }
}