package silverstar_archive.programmers.java.Lv_0.머쓱이보다_키_큰_사람;

import java.util.*;

class Solution {
    public int solution(int[] array, int height) {
        return (int)Arrays.stream(array).filter(i -> i > height).count();
    }
}