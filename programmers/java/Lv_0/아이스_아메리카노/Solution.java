package silverstar_archive.programmers.java.Lv_0.아이스_아메리카노;

class Solution {
    public int[] solution(int money) {
        int americanoPrice = 5500;
        return new int[]{
            money / americanoPrice,
            money % americanoPrice
        };
    }
}