<?php
    $start = 0;
    $mix = [1, 2, 3, "A", "B", "C", 4];
    
    for(; $start<sizeof($mix); $start++) {
        if(gettype($mix[$start]) === 'integer' and $start != 0) {
            echo $mix[$start];
            echo '<br>';
        }
    }