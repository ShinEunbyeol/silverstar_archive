package silverstar_archive.programmers.java.Lv_0.짝수_홀수_개수;

import java.util.stream.IntStream;

class Solution {
    public int[] solution(int[] num_list) {
        return new int[]{
            (int)IntStream.of(num_list).filter(i->i%2==0).count(),
            (int)IntStream.of(num_list).filter(i->i%2!=0).count()
        };
    }
}