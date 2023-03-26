<?php
    $mix = [1, 2, "A", "B", "C", 3, 4];

    $ignored = 0;
    for($i=0; $i<sizeof($mix); $i++) {
        if(gettype($mix[$i]) === 'integer') {
            echo $mix[$i];
            echo '<br>';
        } else {
            $ignored++;
        }
    }
    echo sizeof($mix)-$ignored . " Numbers Printed<br>";
    echo "$ignored Letters Ignored";