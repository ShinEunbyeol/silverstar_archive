<?php 
    /*
        Description: 격자무늬 테이블을 그린다
        Parameter: 
            $row_line_cnt(INT): 행 라인 개수
            $col_line_cnt(INT): 열 라인 개수 
            $larger_row_cell_cnt(INT): 크게 잡은 행 라인 개수
            $larger_col_cell_cnt (INT): 크게 잡은 열 라인 개수
    */

    function draw_lattice($row_line_cnt, $col_line_cnt, $larger_row_cell_cnt="", $larger_col_cell_cnt=""){
        echo "<table class='lattice' cellspacing='0'>";

        for($tr=1; $tr<=$row_line_cnt; $tr++){
            $tr_style = "";
            echo "<tr {$tr_style}>";

            for($td=1; $td<=$col_line_cnt; $td++){
                $td_style = "";
                if($tr % $larger_row_cell_cnt == 0){
                    $td_style .= " border-bottom: 2px solid black; ";
                }
                if($td % $larger_col_cell_cnt == 0){
                    $td_style .= " border-right: 2px solid black; ";
                }

                echo "<td style='{$td_style}'>";
                echo "</td>";
            }

            echo "</tr>";
        }

        echo "</table>";
    }
?>