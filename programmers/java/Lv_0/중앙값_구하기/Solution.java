package silverstar_archive.programmers.java.Lv_0.중앙값_구하기;

import java.util.*;

class Solution {
    public int solution(int[] array) {
        Arrays.sort(array);
        return array[array.length/2];
    }
}