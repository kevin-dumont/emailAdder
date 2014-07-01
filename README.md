# emailAdder : Plugin jQuery

Auteur : **DUMONT Kevin**  
License MIT  
[Démo de emailAdder](http://projets.kevindumont.fr/emailAdder/ "Démo de email adder")


## Description

Plugin jQuery pour créer un champ de type input[text] qui permet 
d'ajouter/supprimer destinataires de façon ergonomique.

**Mise en fonction :**  
Entrez un e-mail dans le champs (e-mail valide) puis mettez un espace, un point un underscore ou une virgule pour passer au mail suivant. A ce moment, l'e-mail choisi s'insérera dans la liste. Vous pourrez alors en ajouter d'autres et/ou les supprimer.

## Installation

Pour l'installer, téléchargez d'abord l'archive, puis dans votre code html, avant la fin du `<body>`, importez **jQuery** ainsi que **emailAdder.jquery.min.js**, comme ceci :

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
    <script type="text/javascript" src="emailAdder.jquery.min.js"></script>

## Utilisation

Créez un input de type text :

    <input type="text" id="emailAdder" >

Et en dessous des imports de script : 

    <script type="text/javascript">
        $(document).ready(function(){
            $("#emailAdder").emailAdder();
        });
    </script>

Bien entendu, adaptez l'id ou le selecteur à votre cas.

### Mettre une/des valeurs par défaut

Afin d'afficher par défaut un ou plusieurs e-mail, il suffira de mettre un attribut **data-default** à votre input. Il contiendra les e-mails séparés par des virgules.  
Exemple :

    <input type="text" id="emailAdder" data-default="example@ex.ex, kevin@dumont.fr" >

Note : seuls les mails valides seront affichés.

### Récupération de données

#### En Javascript

Les données issues des champs emailAdder se récupèrent en javascript via la fonction jQuery **emailAdderData()** qui retournera un tableau contenant les emails entrés.

#### En PHP

En PHP, aucune difficulté, un tableau contenant les données est disponible dans $_POST, l'index est l'attribut name de votre champ.
