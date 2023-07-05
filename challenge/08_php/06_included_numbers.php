<?php
$aList = explode(" ", trim(fgets(STDIN)));
$bList = explode(" ", trim(fgets(STDIN)));

$found = true;
foreach ($bList as $num) {
    if (!in_array($num, $aList)) {
        $found = false;
        break;
    }
}

if ($found) {
    echo "Yes";
} else {
    echo "No";
}
?>