<?php
$acumulador = 0
$max = 200
$contador = 0

for ($i = 0; $i < 10; $i++) {
    $contador = i
    echo $i
    if ( $acumulador + ($i*$i) > $max){
        break
    }
    $acumulador +=  ($i*$i)
}
echo $acumulador. ',' .$contador)