document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // empêcher l’envoi si erreurs
  let isValid = true;

  // Reset des erreurs
  document.querySelectorAll("span[id^='error-']").forEach(el => {
    el.textContent = "";
    el.classList.add("hidden");
  });


const nom = document.getElementById("nom");
const regexNom = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/; 

if (nom.value.trim() === "") {
  document.getElementById("error-nom").textContent = "Veuillez entrer votre nom.";
  document.getElementById("error-nom").classList.remove("hidden");
  isValid = false;
} else if (!regexNom.test(nom.value.trim())) {
  document.getElementById("error-nom").textContent = "Le nom ne doit contenir que des lettres.";
  document.getElementById("error-nom").classList.remove("hidden");
  isValid = false;
} else {
  document.getElementById("error-nom").classList.add("hidden"); 
}

const prenom = document.getElementById("prenom");
const regexPrenom = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/; 

if (prenom.value.trim() === "") {
  document.getElementById("error-prenom").textContent = "Veuillez entrer votre prénom.";
  document.getElementById("error-prenom").classList.remove("hidden");
  isValid = false;
} else if (!regexPrenom.test(prenom.value.trim())) {
  document.getElementById("error-prenom").textContent = "Le prénom ne doit contenir que des lettres.";
  document.getElementById("error-prenom").classList.remove("hidden");
  isValid = false;
} else {
  document.getElementById("error-prenom").classList.add("hidden"); 
}


  const email = document.getElementById("email");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    document.getElementById("error-email").textContent = "Adresse email invalide.";
    document.getElementById("error-email").classList.remove("hidden");
    isValid = false;
  }

  const telephone = document.getElementById("telephone");
  const telRegex = /^[0-9]{10}$/;
  if (!telRegex.test(telephone.value)) {
    document.getElementById("error-telephone").textContent = "Numéro de téléphone invalide  (ex. 5141234567).";
    document.getElementById("error-telephone").classList.remove("hidden");
    isValid = false;
  }

  const codePostal = document.getElementById("code_postal");
  const codeRegex = /^[A-Za-z0-9]{5,6}$/; 
  if (!codeRegex.test(codePostal.value)) {
    document.getElementById("error-code_postal").textContent = "Code postal invalide  Exemple : H2X 1Y4 (Canada)";
    document.getElementById("error-code_postal").classList.remove("hidden");
    isValid = false;
  }

  const adresse = document.getElementById("adresse");
  if (adresse.value.trim() === "") {
    document.getElementById("error-adresse").textContent = "Veuillez entrer votre adresse.";
    document.getElementById("error-adresse").classList.remove("hidden");
    isValid = false;
  }

  const sujet = document.getElementById("sujet");
  if (sujet.value.trim() === "") {
    document.getElementById("error-sujet").textContent = "Veuillez indiquer le sujet.";
    document.getElementById("error-sujet").classList.remove("hidden");
    isValid = false;
  }

  const message = document.getElementById("message");
  if (message.value.trim() === "") {
    document.getElementById("error-message").textContent = "Veuillez entrer un message.";
    document.getElementById("error-message").classList.remove("hidden");
    isValid = false;
  }

  // Si tout est bon
  if (isValid) {
    document.getElementById("success-message").classList.remove("hidden");
    document.getElementById("contactForm").reset();
  }
});
