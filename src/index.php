<?php

/*
 * On doit suivre ces étapes :
 * - lire les données
 * - normaliser les données
 * - bâtir le html/js avec les données en question
 */

// ÉTAPE 1 : Lire les données
$handle = fopen('data/mazagran.csv','r');
// ÉTAPE 2 : Normaliser les données
$count=0;
$evenements=array();
while ( ($data = fgetcsv($handle) ) !== FALSE ) {
    if ($count>0) { // La première ligne est l'en-tête.
        $evenement = array();
        //var_dump($data);
        $evenement['nom']=$data[0];
        $evenement['descriptif']=$data[1];
        $evenement['acteurs']=$data[2];
        $evenement['date_debut']=$data[3];
        $evenement['date_fin']=$data[4];
        $evenement['fond_image']=$data[5];
        $evenement['pos_x']=$data[11];
        $evenement['pos_y']=$data[12];
        $evenement['couleur']=$data[8];
        $evenement['forme']=$data[9];
        $evenement['taille']=$data[10];

        array_push($evenements, $evenement);
    }
    $count++;
}



// ÉTAPE 3 : Générer le HTML/CSS/js correspondant
echo enTete() . corpsDePage($evenements) . piedDePage();

function enTete(): string
{
    return '<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>Mazagran</title>
        
        <!-- Fake favicon, to avoid extra request to server -->
        <link rel="icon" href="data:;base64,iVBORw0KGgo=">
        
        <link rel="stylesheet" type="text/css" href="mazagran.css">
        <script src="mazagran.js"></script>
        
        <script src="https://d3js.org/d3.v7.min.js"></script>
        
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap" rel="stylesheet"> 
    </head>';
}

function corpsDePage($evenements=array()): string
{
    /*
     * Le corps de page se compose :
     * -> d'un bloc vertical à gauche
     * -> d'un bloc principal à gauche constitué de:
     *      -> d'un bloc en haut affichant une image
     *      -> d'un bloc en bas contenant une réglette
     */
    $codeHTML = '
    <body onload="dessinerReglette()">
        <div id="blocGauche">
        </div>
        <div id="blocDroit">
            <div id="blocDroitHaut">
                <div id="blocBouton"><a href="https://mazagran-workshop.projets.erasme.org/"><button id="boutonCarte">+ Cartographie des acteurs</button></a></div>
                <svg id="svgGraphe" xmlns="http://www.w3.org/2000/svg" onclick="modifierDescriptif()" ></svg>
            </div>
            
            <div id="blocDroitBas">
                <svg id="reglette"></svg>
            </div>
        </div>';
    return $codeHTML . scriptsJS($evenements) . '
    </body>';
}

function scriptsJS($evenements=array()){
    return '
        <script>
            const donneesBrutes = '  . json_encode($evenements) . '
        </script>';
}

function piedDePage(): string
{
    return '
</html>';
}