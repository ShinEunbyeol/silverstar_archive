package silverstar_archive.programmers.java.Lv_0.중복된_숫자_개수;

import java.util.*;

class Solution {
    public int solution(int[] array, int n) {
        return (int)IntStream.of(array).filter(i -> i == n).count();
    }
}