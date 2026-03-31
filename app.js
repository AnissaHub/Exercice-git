// Fonction pour choisir le type de jeu
function choisirPhraseOuMots() {
    let choix = ""
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Voulez-vous jouer avec la liste de mots ou la liste de phrases ? (tapez 'mots' ou 'phrases')")
        if (choix !== "mots" && choix !== "phrases") {
            alert("Veuillez entrer 'mots' ou 'phrases' uniquement.")
        }
    }
    return choix
}
// Fonction pour lancer la boucle du jeu
function lancerBoucleJeu(liste){
    let score = 1
    for (let i = 0; i < liste.length; i++){
        let motUtilisateur = prompt(`Retapez : ${liste[i]}`)
        if (motUtilisateur === liste[i]) {
            score++
        } 
    }
    return score
}
