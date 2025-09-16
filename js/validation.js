


const form = document.getElementById("contactForm");
const errorMessages = document.getElementById("error-messages");
const successMessage = document.getElementById("success-message");
form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  
  errorMessages.innerHTML = "";
  errorMessages.classList.add("hidden");

  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();
  const email = document.getElementById("email").value.trim();
  const telephone = document.getElementById("telephone").value.trim();
  const codePostal = document.getElementById("code_postal").value.trim();
  const adresse = document.getElementById("adresse").value.trim();
  const sujet = document.getElementById("sujet").value.trim();
  const message = document.getElementById("message").value.trim();

  let errors = [];

  if (nom.length < 2) errors.push("Le nom doit contenir au moins 2 caractères.");
  if (prenom.length < 2) errors.push("Le prénom doit contenir au moins 2 caractères.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("L'email n'est pas valide.");
  if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(telephone)) errors.push("Le téléphone n'est pas valide.");
  if (!/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(codePostal)) errors.push("Le code postal n'est pas valide.");
  if (adresse.length < 5) errors.push("L'adresse est trop courte.");
  if (sujet.length < 3) errors.push("Le sujet est trop court.");
  if (message.length < 10) errors.push("Le message doit contenir au moins 10 caractères.");

  if (errors.length > 0) {

    errorMessages.innerHTML = "<ul class='list-disc list-inside'>" + errors.map(err => `<li>${err}</li>`).join("") + "</ul>";
    errorMessages.classList.remove("hidden");
  } else {

      successMessage.classList.remove("hidden");
  errorMessages.classList.add("hidden");
  form.reset();
    form.submit(); 
  }
});
