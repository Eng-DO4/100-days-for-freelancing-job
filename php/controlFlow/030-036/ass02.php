<?php
    $a = 100;
    $b = 200;
    $c = 300;

    // $a = 200;
    // $b = 100;
    // $c = 300;

    // $a = 200;
    // $b = 200;
    // $c = 100;

    if ($a > $b) {
        echo 'A Is Larger Than B';
    } elseif ($a > $c) {
        echo 'A Is Larger Than C';
    } else {
        echo 'A Is Not Larger Than B Or C';
    }