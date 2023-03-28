package silverstar_archive.programmers.java.Lv_0.특정_문자_제거하기;

class Solution {
    public String solution(String my_string, String letter) {
        return my_string.replaceAll(letter, "");
    }
}