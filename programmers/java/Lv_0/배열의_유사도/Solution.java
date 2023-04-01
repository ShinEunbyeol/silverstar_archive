package silverstar_archive.programmers.java.Lv_0.배열의_유사도;

import java.util.*;

class Solution {
    public int solution(String[] s1, String[] s2) {
        ArrayList<String> list1 = new ArrayList<>(Arrays.asList(s1));
        list1.retainAll(Arrays.asList(s2));
        return list1.size();
    }
}