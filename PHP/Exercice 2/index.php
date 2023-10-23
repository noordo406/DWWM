<?php

echo "1)\n";
echo "Entrez un nombre : ";
$nb = fgets( STDIN );
echo $nb * $nb;

echo "\n\n2)\n";
echo "Entrez votre prénom : ";
$nom = fgets( STDIN );
echo "Bonjour, " . $nom;

echo "\n\n3)\n";
echo "Entrez le prix HT de l'article : ";
$prix = fgets( STDIN );
echo "Entrez la quantité : ";
$quantite = fgets( STDIN );
echo "Entrez le taux de TVA (en pourcent) : ";
$tva = fgets( STDIN );
echo "Prix total TTC : " . $prix * $quantite * (1 + $tva * 0.01) . "€";