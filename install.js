let deferredInstallPrompt = null;

// Capture de l'événement beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();             // empêche l'install automatique
  deferredInstallPrompt = e;      // stocke l'événement

  const btn = document.getElementById('installBtn');
  if (btn) btn.removeAttribute('hidden');  // affiche le bouton
});

// Fonction déclenchée au clic sur le bouton Installer
function installPWA(evt) {
  if (!deferredInstallPrompt) {
    console.log('Prompt non disponible pour l’instant');
    return;
  }

  deferredInstallPrompt.prompt();                 // affiche le prompt
  evt.currentTarget.setAttribute('hidden', true); // cache le bouton

  deferredInstallPrompt.userChoice.then(choice => {
    console.log('Choix utilisateur:', choice.outcome); // accepted ou dismissed
    deferredInstallPrompt = null;
  });
}

// Lier la fonction au bouton
const installBtn = document.getElementById('installBtn');
if (installBtn) installBtn.addEventListener('click', installPWA);


