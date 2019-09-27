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


//* ---------- Section 2 : Quizz (1) ---------- */

function sectionTwo() {
  let goodAnswer = document.getElementById("super_quizz_c");

  if (goodAnswer.checked == true) {
    alert("C'est une très bonne réponse ! (Même s'il est important de préférer le JS au C)");
    alert("Félicitations ! Passage à l'preuve n°3");
    document.getElementById("section_3").style.display = "block";
  } else {
    alert("C'est une très bonne réponse ! En revanche ce n'est pas la réponse qu'il fallait cocher... C'est pas grave, tu peux encore essayer ...");
  }
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


//* ---------- Section 4 : Quizz (2) ---------- */

function sectionFour() {
  let answer1 = document.getElementById("q1answer3");
  let answer2 = document.getElementById("q2answer2");

  if (!answer1.checked || !answer2.checked) {
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
  document.getElementById("section_5").style.display = "block";
}

/* ---------- Section 5 : Bouton ---------- */

function sectionFive() {
  // Success message
  document.getElementById("section_6").style.display = "block";
  alert("Félicitations ! Passage à l'épreuve n°6.");

}


function sectionSix() {
  if (document.getElementById("noAnswer11").checked ||
    document.getElementById("noAnswer12").checked ||
    document.getElementById("noAnswer13").checked ||
    document.getElementById("noAnswer14").checked ||
    document.getElementById("noAnswer21").checked ||
    document.getElementById("noAnswer22").checked ||
    document.getElementById("noAnswer23").checked ||
    document.getElementById("noAnswer24").checked ||
    document.getElementById("noAnswer31").checked ||
    document.getElementById("noAnswer32").checked ||
    document.getElementById("noAnswer33").checked ||
    document.getElementById("noAnswer34").checked ||
    document.getElementById("noAnswer41").checked ||
    document.getElementById("noAnswer42").checked ||
    document.getElementById("noAnswer43").checked ||
    document.getElementById("noAnswer44").checked ||
    document.getElementById("noAnswer51").checked ||
    document.getElementById("noAnswer52").checked ||
    document.getElementById("noAnswer53").checked ||
    document.getElementById("noAnswer54").checked ||
    document.getElementById("noAnswer61").checked ||
    document.getElementById("noAnswer62").checked ||
    document.getElementById("noAnswer63").checked ||
    document.getElementById("noAnswer64").checked ||
    document.getElementById("noAnswer65").checked ||
    document.getElementById("noAnswer66").checked ||
    document.getElementById("noAnswer71").checked ||
    document.getElementById("noAnswer72").checked ||
    document.getElementById("noAnswer73").checked ||
    document.getElementById("noAnswer74").checked) {
      alert("Félicitations ! Vous ne savez <em>PAS</em>lire une consigne ! Recommencez tout !");
      noAnswer11
      document.getElementById("noAnswer12").checked = false;
      document.getElementById("noAnswer13").checked = false;
      document.getElementById("noAnswer14").checked = false;
      document.getElementById("noAnswer21").checked = false;
      document.getElementById("noAnswer22").checked = false;
      document.getElementById("noAnswer23").checked = false;
      document.getElementById("noAnswer24").checked = false;
      document.getElementById("noAnswer31").checked = false;
      document.getElementById("noAnswer32").checked = false;
      document.getElementById("noAnswer33").checked = false;
      document.getElementById("noAnswer34").checked = false;
      document.getElementById("noAnswer41").checked = false;
      document.getElementById("noAnswer42").checked = false;
      document.getElementById("noAnswer43").checked = false;
      document.getElementById("noAnswer44").checked = false;
      document.getElementById("noAnswer51").checked = false;
      document.getElementById("noAnswer52").checked = false;
      document.getElementById("noAnswer53").checked = false;
      document.getElementById("noAnswer54").checked = false;
      document.getElementById("noAnswer61").checked = false;
      document.getElementById("noAnswer62").checked = false;
      document.getElementById("noAnswer63").checked = false;
      document.getElementById("noAnswer64").checked = false;
      document.getElementById("noAnswer65").checked = false;
      document.getElementById("noAnswer66").checked = false;
      document.getElementById("noAnswer71").checked = false;
      document.getElementById("noAnswer72").checked = false;
      document.getElementById("noAnswer73").checked = false;
      document.getElementById("noAnswer74").checked = false;
    } else {
      alert("Félicitations ! Vous savez lire une consigne. Passage à l'épreuve prochaine.");
      document.getElementById("section_7").style.display = "block";
    }
}
