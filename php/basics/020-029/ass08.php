<?php
    // Code 1
    $a = @$b or die('var not found');

    // Code 2
    $f = @file("Not_A_File") or die('file not found');

    // Code 3
    @include("Not_A_File") or die('file not exist');