# Roadmap
Le site web doit à terme rassembler :
- le projet sur Gourlier
- le projet sur les PV 1839-1840
- une prosopograhpie de l’architecture publique
- une bibliographie de l’architecture publique
- conbavil / atlas ?
- un répertoire de sources sur les bâtiments civils
- sources numérisées en histoire de l’architecture

Le projet pourrait prendre la forme d’une métabibliothèque sur l’architecture publique.

Les contenus peuvent prendre la forme de fichiers XML-TEI, être distribués dans différents formats par l’intermédiaire d’une API, ou plus simplement structurés en md.
Essayer de tirer au maximum parti de fichiers structurés en n’utilisant la bdd seulement pour les contenus dynamique et en investissant dans un client riche pour toutes les interactions utilisateur. Svelte paraît intéressant dans ce scénario car il permet de générer des fichiers statiques.

## Arborescence 

text.archi
public.archi

|-- Accueil
|-- Projets
|   |-- Choix
|   |-- PV
|   |-- Ledoux --> http://www.ledoux-architecture.fr
|   |-- text.archi
|-- Ressources
|   |-- Biblio
|   |-- Sources
|   |-- Prosopo
|   |-- bdd visuel
|-- À propos
|   |-- Équipe
|   |-- Crédits
|   |-- Colophon (parties techniques)
