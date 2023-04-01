package silverstar_archive.programmers.java.Lv_0.배열_뒤집기;

import java.util.*;

class Solution {
    public int[] solution(int[] num_list) {
        List<Integer> answer = Arrays.stream(num_list).boxed().collect(Collectors.toList());
        Collections.reverse(answer);
        return answer.stream().mapToInt(i -> i).toArray();
    }
}