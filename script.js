/* ---------- Section 1 : Formulaire ---------- */

function sectionOne() {
    // Inputs
    let mailName = document.getElementById("data_form-mail-name");
    let mailDomain = document.getElementById("data_form-mail-domain");
    let mailLast = document.getElementById("data_form-mail-last");
    let confirmmail = document.getElementById("data_form-confirm");

    // Check values
    if(
        mailName.value != "Mon courriel"
            &&
        mailName.value != ""
            &&
        mailDomain.value != ""
            &&
        confirmmail.value != "Confirmer mon courriel"
            &&
        confirmmail.value != ""
            &&
        mailName.value + "@" + mailDomain.value + "." + mailLast.value == confirmmail.value
    ) {
        // Success message
        document.getElementById("section_2").style.display = "block";
        alert("Félicitations ! Passage à l'épreuve n°2.");
    } else {
        // Error message
        alert("#ERREUR : Attention il y a des erreurs dans le formulaire");
        alert("Peut-être avez-vous mal écrit l'adresse mail ?");
        alert("Ou alors le problème vient de la confirmation d'adresse mail ...");
        alert("Autrement, veuillez débrancher l'ordinateur et rechancher après 3 secondes.  ");
    }
}

/* ---------- Section 2 : Bouton ---------- */

function sectionTwo() {
    // Success message
    document.getElementById("section_3").style.display = "block";
    alert("Félicitations ! Passage à l'épreuve n°3.");

    // Next section
    setTimeout(sectionThree, 15000)
}

/* ---------- Section 3 : Chargement ---------- */

function sectionThree() {
    // Text changement
    let currentSection = document.getElementById('section_3');
    let currentSubtitle = currentSection.getElementsByTagName("h3")[0];
    currentSubtitle.innerHTML = "Bon... Visiblement ça ne charge pas...";

    // Success message
    setTimeout(sectionThreeNext, 2000)
}

function sectionThreeNext() {
    // Success message
    document.getElementById("section_4").style.display = "block";
    alert("Félicitations ! Passage à l'épreuve n°4.");
}