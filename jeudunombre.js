var NombreEssais = 10;

/* Générer le chiffre de l'IA */

var IA = Math.ceil(Math.random()*100 + 0.001);
console.log(IA);

/* Masquer le bouton "Rejouer" de base et indiquer le nombre d'essais */
document.getElementById("Reinitialiser").style.opacity = "0" ;
document.getElementById("NombreEssai").innerHTML = ("Nombre d'essais restants" + " " + ":" + " " + "10");




    /* récupérer les propositions du joueur */

    document.getElementById("bouton").addEventListener("click", function () {

        var joueur = document.getElementById("proposition").value;

    if (joueur !== "") {

        /* Comparaison des nombres */

        if (IA > joueur) {
            if (NombreEssais === 0) {
                alert("Partie Terminée !");
                document.getElementById("Reinitialiser").style.opacity = "1";
                document.getElementById("Affiche").innerHTML = "";
            } else {
                alert("Perdu, le chiffre est plus grand.");
                console.log(joueur);
                NombreEssais--;
                document.getElementById("NombreEssai").innerHTML = ("Nombre d'essais restants" + " " + ":" + " " + NombreEssais);
                document.getElementById("Affiche").innerHTML += joueur + "," + " ";
            }
        }
        else if (IA < joueur) {
            if (NombreEssais === 0) {
                alert("Partie Terminée !");
                document.getElementById("Reinitialiser").style.opacity = "1";
                document.getElementById("Affiche").innerHTML = "";
            } else {
                alert("Perdu, le chiffre est plus petit.");
                console.log(joueur);
                NombreEssais--;
                document.getElementById("NombreEssai").innerHTML = ("Nombre d'essais restants" + " " + ":" + " " + NombreEssais);
                document.getElementById("Affiche").innerHTML += joueur + "," + " ";
            }
        }
        else {
            alert("Bravo ! Vous avez trouvé le nombre" + " " + IA);
            console.log(joueur);
            document.getElementById("NombreEssai").innerHTML = ("Nombre d'essai" + " " + ":" + NombreEssais);
            document.getElementById("Reinitialiser").style.opacity = "1";
            document.getElementById("Affiche").innerHTML += joueur + "," + " ";
        }
        }
    else {
            alert ("Veuillez entrer un nombre compris entre 1 et 100.");
        }
    });


    /* Fonction du bouton Rejouer */
document.getElementById("Reinitialiser").addEventListener("click", function() {
    NombreEssais = 10;
    document.getElementById("NombreEssai").innerHTML = ("Nombre d'essais restants" + " " + ":" + " " + "10");
    document.getElementById("Reinitialiser").style.opacity = "0";
});
