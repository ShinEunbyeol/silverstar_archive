package silverstar_archive.programmers.java.Lv_0.짝수는_싫어요;

import java.util.*;

class Solution {
    public int[] solution(int n) {
        return IntStream.rangeClosed(1, n).filter(i -> i%2 != 0).toArray();
    }
}