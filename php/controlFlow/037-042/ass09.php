<?php
    $help_num = 3;
    $nums = [4, 5, 6, 1, 2, 3];
    $names = ["Ahmed", "Sayed", "Osama", "Mahmoud", "Gamal"];
    
    echo $names[$nums[$help_num]];
    echo "<br>" . $names[$nums[++$help_num]];