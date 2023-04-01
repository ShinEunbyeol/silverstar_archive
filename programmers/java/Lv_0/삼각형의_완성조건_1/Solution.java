package silverstar_archive.programmers.java.Lv_0.삼각형의_완성조건_1;

import java.util.*;

class Solution {
    public int solution(int[] sides) {
        Arrays.sort(sides);
        return sides[2] < sides[0] + sides[1] ? 1 : 2;
    }
}