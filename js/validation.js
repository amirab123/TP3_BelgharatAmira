// Sélection du formulaire
const form = document.querySelector('form');

// Regex et fonctions de validation
function validateName(name) {
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
  return regex.test(name.trim());
}

function validatePhone(phone) {
  // Format canadien : (123) 456-7890 ou 123-456-7890 ou 1234567890
  const regex = /^(\(?\d{3}\)?[\s-]?)?\d{3}[\s-]?\d{4}$/;
  return regex.test(phone.trim());
}

function validatePostalCode(postal) {
  // Format canadien : A1A 1A1
  const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  return regex.test(postal.trim());
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

function validateSubject(subject) {
  return /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(subject.trim());
}

function validateMessage(message) {
  // Vérifie si le message contient au moins 50 mots
  return message.trim().split(/\s+/).length >= 50;
}

// Écoute de la soumission du formulaire
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi par défaut

  // Récupération des valeurs
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('telephone').value;
  const code_postal = document.getElementById('code_postal').value;
  const sujet = document.getElementById('sujet').value;
  const message = document.getElementById('message').value;

  let valid = true;
  let errors = [];

  // Validation des champs
  if (!validateName(nom)) {
    errors.push("Nom : uniquement lettres.");
    valid = false;
  }
  if (!validateName(prenom)) {
    errors.push("Prénom : uniquement lettres.");
    valid = false;
  }
  if (!validateEmail(email)) {
    errors.push("Email invalide.");
    valid = false;
  }
  if (!validatePhone(telephone)) {
    errors.push("Téléphone canadien invalide.");
    valid = false;
  }
  if (!validatePostalCode(code_postal)) {
    errors.push("Code postal canadien invalide.");
    valid = false;
  }
  if (!validateSubject(sujet)) {
    errors.push("Sujet : uniquement lettres.");
    valid = false;
  }
  if (!validateMessage(message)) {
    errors.push("Message : minimum 50 mots.");
    valid = false;
  }


  if (!valid) {
    alert(errors.join("\n"));
  } else {
    form.submit();
  }
});
