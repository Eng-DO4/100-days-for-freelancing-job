<?php
    $a = "10";

    // 1
    echo +$a;
    echo '<br>';
    echo gettype(+$a);
    echo '<br>';
    echo '<br>';

    // 2
    echo $a + 0;
    echo '<br>';
    echo gettype($a - 0);
    echo '<br>';
    echo '<br>';

    echo $a * 1;
    echo '<br>';
    echo gettype($a / 1);
    echo '<br>';
    echo '<br>';

    echo $a ** 1;
    echo '<br>';
    echo gettype($a % 1);
    echo '<br>';
    echo '<br>';

    echo $a * true;
    echo '<br>';
    echo gettype($a - false);
    echo '<br>';
    echo '<br>';

    // 3
    echo (int)$a;
    echo '<br>';
    echo gettype((int)$a);
    echo '<br>';
    echo '<br>';

    // 4
    echo intval($a);
    echo '<br>';
    echo gettype(intval($a));
    echo '<br>';
    echo '<br>';

    // 5
    echo json_decode($a);
    echo '<br>';
    echo gettype(json_decode($a));
    echo '<br>';
    echo '<br>';

    // 6
    settype($a, 'integer');
    echo $a;
    echo '<br>';
    echo gettype($a);