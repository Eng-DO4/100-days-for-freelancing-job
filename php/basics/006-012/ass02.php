<?php
    // Method One
    echo gettype(100);
    echo '<br>';

    // Method Two
    print gettype((int)"100");
    echo '<br>';

    // Method Three => Optional
    print gettype((integer)100.00);