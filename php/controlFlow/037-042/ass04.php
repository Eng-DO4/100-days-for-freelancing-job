<?php
    $start = 10;
    $end = 0;
    $stop = 3;
    for(; $start>=$stop; $start--) {
        echo str_pad($start, 2, $end, STR_PAD_LEFT);
        echo '<br>';
    }