<?php

// php -S localhost:3000

$A = 1;
$B = 3 + $A;
$A = 3;

echo "1)<br>";
echo "A = " . $A . "<br>";
echo "B = " . $B . "<br>";

$A = 5;
$B = 3;
$C = $A + $B;
$A = 2;
$C = $B - $A;

echo "<br>2)<br>";
echo "A = " . $A . "<br>";
echo "B = " . $B . "<br>";
echo "C = " . $C . "<br>";

$A = 3;
$B = 10;
$C = $A + $B;
$B = $A + $B;
$A = $C;

echo "<br>3)<br>";
echo "A = " . $A . "<br>";
echo "B = " . $B . "<br>";
echo "C = " . $C . "<br>";

echo "<br>4)<br>";
$X = 54;
$Y = 102;
echo "Valeurs initiales :<br>";
echo "X = " . $X . "<br>";
echo "Y = " . $Y . "<br>";
$Y = $X;
$X = $Y;
echo "Algo :<br>";
echo "X = " . $X . "<br>";
echo "Y = " . $Y . "<br>";

$X = 54;
$Y = 102;
$Z = $Y;
$Y = $X;
$X = $Z;
echo "Après correction :<br>";
echo "X = " . $X . "<br>";
echo "Y = " . $Y . "<br>";


echo "<br>5)<br>";
$A = 1;
$B = 2;
$C = 3;
echo "A = " . $A . "<br>";
echo "B = " . $B . "<br>";
echo "C = " . $C . "<br>";

$D = $C;
$C = $B;
$B = $A;
$A = $D;

echo "Après transfert de valeurs :<br>";
echo "A = " . $A . "<br>";
echo "B = " . $B . "<br>";
echo "C = " . $C . "<br>";

echo "<br>6)<br>";
$A = "423";
$B = "12";
$C = $A . $B;
echo "Résultat = " . $C . "<br>";