const form = document.querySelector('form');
const errorBox = document.getElementById('error-messages');

function showErrors(errors) {
  if (errors.length > 0) {
    errorBox.innerHTML = errors.map(err => `<p>⚠️ ${err}</p>`).join("");
    errorBox.classList.remove("hidden");
  } else {
    errorBox.classList.add("hidden");
  }
}

// Les fonctions validateName, validatePhone, etc. restent les mêmes...

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('telephone').value;
  const code_postal = document.getElementById('code_postal').value;
  const sujet = document.getElementById('sujet').value;
  const message = document.getElementById('message').value;

  let valid = true;
  let errors = [];

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
    showErrors(errors);
  } else {
    errorBox.classList.add("hidden");
    form.submit();
  }
});
