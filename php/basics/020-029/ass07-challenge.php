<?php
    $a = 10;
    $b = 20;
    
    echo str_pad(($a + $b) * ($a + $b), 4, '0') + ($a * $a * $a); // 10000