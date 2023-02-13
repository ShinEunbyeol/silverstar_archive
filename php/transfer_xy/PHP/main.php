<?php
    // 원본 좌표 관련
    $original_target_size = 500;

    $x = rand(0, $original_target_size);
    $y = rand(0, $original_target_size);

    // 눈금자 바탕
    $each_line_cell_cnt = 25;
    $larger_cell_cnt = sqrt($each_line_cell_cnt);
    $cell_size = $original_target_size / $each_line_cell_cnt;

    // ======================================================================

    // 변환 좌표 관련
    $target_A_size = 375;

    // 눈금자 바탕
    $target_A_cell_size = $target_A_size / $each_line_cell_cnt;
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>좌표 변환하기</title>

    <link rel="stylesheet" href="../CSS/style.css">
    <link rel="stylesheet" type="text/css" href="../../lattice/CSS/style.css">
    <script src="https://code.jquery.com/jquery-latest.min.js"></script>
    <script type="text/javascript" src="../JS/transfer_xy.js"></script>
    <?php 
        // Include
        include_once "../../lattice/PHP/library.php";
    ?>
    
    <style>
        body{
            padding: 20px;
        }

        .targetShape{
            display: inline-block;
            position: relative;
            border: 2px solid;
        }
        .targetShape:nth-child(n+2){
            margin-top: 20px;
        }

        #original_target .lattice{
            width: <?=$original_target_size?>px;
            height: <?=$original_target_size?>px;
        }
        #original_target .lattice td{
            width: <?=$cell_size?>px;
            height: <?=$cell_size?>px;
        }
        #target_A .lattice{
            width: <?=$target_A_size?>px;
            height: <?=$target_A_size?>px;
        }
        #target_A .lattice td{
            width: <?=$target_A_cell_size?>px;
            height: <?=$target_A_cell_size?>px;
        }

        #original_target .points{
            top: <?=$y?>px;
            left: <?=$x?>px;
        }
        .point_description{
            position: absolute;
            z-index: 3;
            font-size: 10pt;
            background-color: white;
        }
        #original_target .point_description{
            top: <?=$y-20?>px;
            left: <?=$x-27?>px;
        }
    </style>

    <script>
        $(document).ready(function(){
            // target_A에 좌표 표시
            var original_point_info = {"x": $("#original_target .points").data("x"), "y":$("#original_target .points").data("y")};
            var target_A_xy = get_point_xy(
                                $("#original_target").innerWidth(), 
                                original_point_info,
                                $("#target_A").innerWidth(),
                                $("#target_A"),
                                $(".points").innerWidth(),
                                true
                            );
            $("#target_A .point_description")
                .css({"top": (target_A_xy['y']-20)+"px", "left": (target_A_xy['x']-27)+"px"})
                .text("("+target_A_xy['x']+","+target_A_xy['y']+")");
        });
    </script>
</head>
<body>
    <div id="original_target" class="targetShape">
        <!-- 눈금자 -->
        <?php draw_lattice($each_line_cell_cnt, $each_line_cell_cnt, $larger_cell_cnt, $larger_cell_cnt);?>
        
        <div class="point_description">
            (<?=$x?>, <?=$y?>)
        </div>
        <div class="points" data-x="<?=$x?>" data-y="<?=$y?>"></div>
    </div>

    <br>

    <div id="target_A" class="targetShape">
        <!-- 눈금자 -->
        <?php draw_lattice($each_line_cell_cnt, $each_line_cell_cnt, $larger_cell_cnt, $larger_cell_cnt);?>
        
        <div class="point_description"></div>
    </div>
</body>
</html>