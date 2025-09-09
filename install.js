const installButton = document.getElementById('installBtn');
if (installButton) {
  installButton.addEventListener('click', installPWA);
} else {
  console.error('Le bouton d’installation est introuvable !');
}


let deferredInstallPrompt = null;

// Capture beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();             // empêche l'install automatique
  deferredInstallPrompt = e;      // stocke l'événement
  const btn = document.getElementById('installBtn');
  btn.removeAttribute('hidden');  // affiche le bouton
});

// Bouton Installer
function installPWA(evt) {
  if (!deferredInstallPrompt) {
    console.log('Prompt non disponible pour l’instant');
    return;
  }

  deferredInstallPrompt.prompt();
  evt.srcElement.setAttribute('hidden', true);

  deferredInstallPrompt.userChoice.then(choice => {
    console.log('Choix utilisateur:', choice.outcome);
    deferredInstallPrompt = null;
  });
}


