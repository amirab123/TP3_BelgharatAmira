// install.js

let deferredPrompt;
  const installBtn = document.getElementById("installBtn");
  const iosMessage = document.getElementById("iosMessage");

  // Détection iOS + Safari
  const isIos = /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  const isInStandaloneMode = ("standalone" in window.navigator) && window.navigator.standalone;

  if (isIos && !isInStandaloneMode) {
    // Afficher l’aide spécifique pour iOS
    iosMessage.style.display = "block";
  }

 
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
  
    installBtn.style.display = "inline-block";
  });

  installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Choix utilisateur : ${outcome}`);
    deferredPrompt = null;
    installBtn.style.display = "none";
  });
