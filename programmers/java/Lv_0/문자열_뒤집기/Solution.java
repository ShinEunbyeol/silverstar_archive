package silverstar_archive.programmers.java.Lv_0.문자열_뒤집기;

import java.util.*;

class Solution {
    public String solution(String my_string) {
        List <Character> list = my_string.chars().mapToObj(e->(char)e).collect(Collectors.toList());
        Collections.reverse(list);
        return list.stream().map(String::valueOf).collect(Collectors.joining());
    }
}