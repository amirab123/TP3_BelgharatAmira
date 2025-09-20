// install.js

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Empêche l’affichage automatique
  e.preventDefault();
  deferredPrompt = e;

  // Affiche ton bouton "Installer"
  const installBtn = document.getElementById("installBtn");
  installBtn.style.display = "block";

  installBtn.addEventListener("click", async () => {
    installBtn.style.display = "none";

    // Affiche la bannière manuellement
    deferredPrompt.prompt();

    // Attend la réponse de l’utilisateur
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Résultat de l’installation : ${outcome}`);

    deferredPrompt = null;
  });
});
