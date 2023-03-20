<?php
    $name = "elzero";
    $$name = "Web";

    # 1
    echo $$name;
    echo '<br>';
    # 2
    echo $elzero;
    echo '<br>';
    # 3
    echo "$elzero";
    echo '<br>';
    # 4
    echo "${$name}";
    echo '<br>';
    # 5
    echo "Web";