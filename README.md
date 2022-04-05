# Workshop_bioInspiration_Mazagran_interface

Cette application est un prototype permettant de visualiser les avancées d'un
projet sur un plan.

Les auteurs :
- CÔTE Lucile (design)
- RACINE Pierre-Alexandre (développement)

Une démo est visible [ici](https://mazagran-interface.projets.erasme.org/).


## Utilisation

L'interface principale se trouve sur l'url de base du serveur.

- Un clic sur un des taquets/curseurs en bas du plan change ce plan
- Un clic sur ce nouveau plan affiche la description correspondante sur le bloc
de gauche

## Installation

Un serveur (apache), PHP et une bibliothèque javascript (d3.js) sont nécessaires
pour faire fonctionner l'application. L'installation de la bibliothèque d3.js
peut se faire via un simple import de dépendance js déclaré dans le `header` du
code HTML.

### Installation automatisée

Un `Dockerfile` est disponible. Suivez ces étapes :

```bash
# Clonage du dépôt
git clone https://github.com/urbanlab/Workshop_bioInspiration_Mazagran_interface.git ~/Projets/mazagran
# Déplacement dans notre code
cd ~/Projets/mazagran
# Construction de l'image
docker build -t mazagran .
# Lancement du conteneur.
docker run -d -p 5000:80 --name mazagran mazagran
```

Une fois ce conteneur actif, vous pouvez y accéder [ici](http://localhost:5000/).

## Administration ERASME

Il est possible de pousser sur dockerhub une image qui pourrait être facilement
réutilisée.
```bash
# Connectez-vous à docker en ligne de commande
docker login --username=erasme
# Récupérez l'identifiant de l'image construite (remplacez 12charcode avec)  
docker tag 12charcode erasme/mazagran_interface
# Envoyez l'image sur docker
sudo docker push erasme/mazagran_interface
```