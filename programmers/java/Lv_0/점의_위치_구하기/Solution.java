package silverstar_archive.programmers.java.Lv_0.점의_위치_구하기;

class Solution {
    public int solution(int[] dot) {        
        int quarter = 0;
        if(dot[0] > 0) {
            if(dot[1] > 0) {
                quarter = 1;
            }else {
                quarter = 4;
            }
        }else {
            if(dot[1] > 0) {
                quarter = 2;
            }else {
                quarter = 3;
            }
        }

        return quarter;
    }
}