<?php
$a = intval(readline());
$b = intval(readline());

if ($a > $b) {
   $ans = $a;
}
if ($b > $a) {
   $ans = $b;
}
echo $ans;
?>