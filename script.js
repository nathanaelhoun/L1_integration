/* ---------- Section 1 : Formulaire ---------- */

function sectionOne() {
  // Inputs
  let mailName = document.getElementById("data_form-mail-name");
  let mailDomain = document.getElementById("data_form-mail-domain");
  let mailLast = document.getElementById("data_form-mail-last");
  let confirmmail = document.getElementById("data_form-confirm");

  // Check values
  if (
    mailName.value != "Mon courriel" &&
    mailName.value != "" &&
    mailDomain.value != "" &&
    confirmmail.value != "Confirmer mon courriel" &&
    confirmmail.value != "" &&
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
    mailName.value = "";
    mailDomain.value = "";
    mailLast.value = "";
    confirmmail.value = "";
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


function sectionFive() {
  let answer1 = document.getElementById("q1answer3");
  let answer2 = document.getElementById("q2answer2");

  if(!answer1.checked || !answer2.checked){
    document.getElementById("q1answer1").checked = false;
    document.getElementById("q1answer2").checked = false;
    document.getElementById("q1answer4").checked = false;
    document.getElementById("q2answer1").checked = false;
    document.getElementById("q2answer3").checked = false;
    document.getElementById("q2answer4").checked = false;


    alert("Félicitations ! Vous vous êtes trompés et devez recommencer !");
  } else {
    alert("Félicitations ! Passage à l'épreuve n°5.");
  }
  document.getElementById("section_6").style.display = "block";
}
