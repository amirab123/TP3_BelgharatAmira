let deferredInstallPrompt = null;

// ------------------------
// Capture de l'événement beforeinstallprompt
// ------------------------
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();               // Empêche l'installation automatique
  deferredInstallPrompt = e;        // Stocke l'événement pour plus tard

  const btn = document.getElementById('installBtn');
  if (btn) btn.removeAttribute('hidden'); // Affiche le bouton
  console.log('beforeinstallprompt déclenché');
});

// ------------------------
// Fonction pour déclencher le prompt au clic
// ------------------------
function installPWA(evt) {
  if (!deferredInstallPrompt) {
    console.log('Prompt non disponible pour l’instant');
    return;
  }

  // Affiche le prompt
  deferredInstallPrompt.prompt();

  // Cache le bouton
  if (evt.currentTarget) evt.currentTarget.setAttribute('hidden', true);

  // Récupère le choix de l’utilisateur
  deferredInstallPrompt.userChoice.then(choice => {
    console.log('Choix utilisateur :', choice.outcome); // accepted ou dismissed
    deferredInstallPrompt = null; // Réinitialise
  });
}

// ------------------------
// Lier la fonction au bouton
// ------------------------
document.addEventListener('DOMContentLoaded', () => {
  const installBtn = document.getElementById('installBtn');
  if (installBtn) installBtn.addEventListener('click', installPWA);
});
