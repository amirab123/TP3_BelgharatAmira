// install.js

let deferredPrompt;
const installButton = document.getElementById("installButton");


if (installButton) {
  installButton.style.display = "none";
}


window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;


  if (installButton) {
    installButton.style.display = "block";
  }
});


if (installButton) {
  installButton.addEventListener("click", async () => {
    if (!deferredPrompt) {
      return;
    }
 
    deferredPrompt.prompt();

   
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Résultat installation : ${outcome}`);

    // Réinitialiser la variable
    deferredPrompt = null;

    // Cacher le bouton après l’installation
    installButton.style.display = "none";
  });
}
