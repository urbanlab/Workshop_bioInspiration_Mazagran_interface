/**
 * On dessine la règlette temporelle avec ses taquets.
 */
function dessinerReglette(){
    // RÉCUPÉRATION DES DONNÉES
    const hauteurBlocReglette = document.querySelector('#reglette').clientHeight
    const largeurBlocReglette = document.querySelector('#reglette').clientWidth

    // DESSIN DE LA RÉGLETTE
    const svg = d3.select("#reglette")

    // Il y a quatre lignes horizontales à dessiner légèrement espacées les unes des autres.
    svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .attr("x1", largeurBlocReglette/10)
        .attr("y1", hauteurBlocReglette/5)
        .attr("x2", largeurBlocReglette*0.9)
        .attr("y2", hauteurBlocReglette/5)
    svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .attr("x1", largeurBlocReglette/10)
        .attr("y1", hauteurBlocReglette*2/5)
        .attr("x2", largeurBlocReglette*0.9)
        .attr("y2", hauteurBlocReglette*2/5)
    svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .attr("x1", largeurBlocReglette/10)
        .attr("y1", hauteurBlocReglette*3/5)
        .attr("x2", largeurBlocReglette*0.9)
        .attr("y2", hauteurBlocReglette*3/5)
    svg.append('line')
        .style("stroke", "black")
        .style("stroke-width", 1)
        .attr("x1", largeurBlocReglette/10)
        .attr("y1", hauteurBlocReglette*4/5)
        .attr("x2", largeurBlocReglette*0.9)
        .attr("y2", hauteurBlocReglette*4/5)
    // Pour chaque ligne, on crée un taquet
    const longueurTotaleReglette = largeurBlocReglette*0.9 - largeurBlocReglette/10
    svg.append("rect")
        .attr("x", largeurBlocReglette/10 + 10) // Ne dure qu'en janvier.
        .attr("y", hauteurBlocReglette/5 - hauteurBlocReglette/10)
        .attr("width", hauteurBlocReglette/5)
        .attr("height", hauteurBlocReglette/5)
        .attr('fill', '#A26FC7')
        .on("click", function() {
            changerImageSVG('url(data/plan1.svg)')
        })
    svg.append("rect")
        .attr("x", largeurBlocReglette/10 + longueurTotaleReglette*2/12) // Dure de mars compris à octobre compris -> 8 mois.
        .attr("y", hauteurBlocReglette/5 + hauteurBlocReglette/10)
        .attr("width", longueurTotaleReglette*8/12)
        .attr("height", hauteurBlocReglette/5)
        .attr('fill', '#A26FC7')
        .on("click", function() {
            changerImageSVG('url(data/plan2.svg)')
        })
    svg.append("rect")
        .attr("x", largeurBlocReglette/10 + longueurTotaleReglette*10/12) // Dure de octobre à novembre.
        .attr("y", 2*hauteurBlocReglette/5 + hauteurBlocReglette/10)
        .attr("width", longueurTotaleReglette/12)
        .attr("height", hauteurBlocReglette/5)
        .attr('fill', '#FF955B')
        .on("click", function() {
            changerImageSVG('url(data/plan3.svg)')
        })
    svg.append("rect")
        .attr("x", largeurBlocReglette/10 + longueurTotaleReglette*8/12) // Ne dure qu'en août.
        .attr("y", 3*hauteurBlocReglette/5 + hauteurBlocReglette/10)
        .attr("width", hauteurBlocReglette/5)
        .attr("height", hauteurBlocReglette/5)
        .attr('fill', '#FF955B')
        .on("click", function() {
            changerImageSVG('url(data/plan4.svg)')
        })
}

function changerImageSVG(URI_image=''){
    const blocImage = document.getElementById('svgGraphe')
    blocImage.style.backgroundImage = URI_image
}

function modifierDescriptif(){
    switch (document.getElementById('svgGraphe').style.backgroundImage) {
        case 'url("data/plan1.svg")':
            insererDescription(donneesBrutes[0].nom, donneesBrutes[0].descriptif, donneesBrutes[0].acteurs, donneesBrutes[0].date_debut, donneesBrutes[0].date_fin)
            break;
        case 'url("data/plan2.svg")':
            insererDescription(donneesBrutes[1].nom, donneesBrutes[1].descriptif, donneesBrutes[1].acteurs, donneesBrutes[1].date_debut, donneesBrutes[1].date_fin)
            break;
        case 'url("data/plan3.svg")':
            insererDescription(donneesBrutes[2].nom, donneesBrutes[2].descriptif, donneesBrutes[2].acteurs, donneesBrutes[2].date_debut, donneesBrutes[2].date_fin)
            break;
        case 'url("data/plan4.svg")':
            insererDescription(donneesBrutes[3].nom, donneesBrutes[3].descriptif, donneesBrutes[3].acteurs, donneesBrutes[3].date_debut, donneesBrutes[3].date_fin)
            break;
        default:
            break
    }
}

function insererDescription(titre='', descriptif='', acteurs='', dateDebut='', dateFin=''){
    const blocDescription = document.getElementById('blocGauche')

    // Nom
    const nomEvent = document.createElement('p')
    nomEvent.id = 'titreEvent'
    const textenomEvnt = document.createTextNode(titre)
    nomEvent.appendChild(textenomEvnt)
    // Descriptif
    const descrEvent = document.createElement('p')
    descrEvent.id = 'descrEvent'
    const texteDescrEvnt = document.createTextNode(descriptif)
    descrEvent.appendChild(texteDescrEvnt)
    // Dates
    const datesEvent = document.createElement('p')
    datesEvent.id = 'datesEvent'
    const texteDatesEvnt = document.createTextNode(dateDebut + " → " + dateFin)
    datesEvent.appendChild(texteDatesEvnt)
    // Acteurs
    const contenuCompletActeurs = document.createElement('div')
    contenuCompletActeurs.id='contenuCompletActeurs'
    /* -> D'abord le titre*/
    const titreActeurs = document.createElement('h4')
    titreActeurs.id = 'titreActeurs'
    const texteTitreActeurs = document.createTextNode('Projet co-construit par :')
    titreActeurs.appendChild(texteTitreActeurs)
    contenuCompletActeurs.appendChild(titreActeurs)
    /* -> Puis un acteur au pif*/
    const boutonActeur1 = document.createElement('button')
    boutonActeur1.class='boutonActeur'
    const texteBoutonActeur1 = document.createTextNode('Métropole de Lyon')
    texteBoutonActeur1.class='boutonAct'

    boutonActeur1.appendChild(texteBoutonActeur1)
    contenuCompletActeurs.appendChild(boutonActeur1)

    const boutonActeur2 = document.createElement('button')
    boutonActeur2.class='boutonActeur'
    const texteBoutonActeur2 = document.createTextNode('GLH bailleur social')
    boutonActeur2.appendChild(texteBoutonActeur2)
    texteBoutonActeur2.class='boutonAct'
    contenuCompletActeurs.appendChild(boutonActeur2)

    const boutonActeur3 = document.createElement('button')
    boutonActeur1.class='boutonActeur'
    const texteBoutonActeur3 = document.createTextNode('Ville de Lyon')
    texteBoutonActeur3.class='boutonAct'
    boutonActeur3.appendChild(texteBoutonActeur3)
    contenuCompletActeurs.appendChild(boutonActeur3)

    const boutonActeur4 = document.createElement('button')
    boutonActeur4.class='boutonActeur'
    const texteBoutonActeur4 = document.createTextNode('Conseil de quartier la Guillotière')
    texteBoutonActeur4.class='boutonAct'
    boutonActeur4.appendChild(texteBoutonActeur4)
    contenuCompletActeurs.appendChild(boutonActeur4)


    blocDescription.replaceChildren(
        nomEvent,
        descrEvent,
        datesEvent,
        contenuCompletActeurs
    )
}