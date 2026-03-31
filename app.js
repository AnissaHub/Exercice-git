// Fonction pour choisir le type de jeu
function choisirPhraseOuMots(){
    let choix = ""
    while (choix !== "mots" && choix !== "phrases"){
        choix = prompt("Voulez-vous jouer avec la liste de mots ou la liste de phrases ?")       
    }   
    return choix
}