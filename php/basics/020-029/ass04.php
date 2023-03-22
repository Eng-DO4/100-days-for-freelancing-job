<?php
    $a = 10;
    $b = 20;
    $c = 15;
    
    var_dump($a <= $b);
    echo '<br>';
    var_dump($c >= $a);
    echo '<br>';
    var_dump($a < $b);
    echo '<br>';
    var_dump($a != $b);
    echo '<br>';
    var_dump($c > $a);
    echo '<br>';
    var_dump($a <> $c);
    echo '<br>';
    var_dump(gettype($a) == gettype($b));
    echo '<br>';
    var_dump(gettype($a) === gettype($b));
    echo '<br>';
    var_dump(gettype((float) $a) != gettype($b));