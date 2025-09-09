if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/TP3_BelgharatAmira/sw.js')
      .then(reg => console.log('SW enregistré', reg))
      .catch(err => console.log('Erreur SW', err));
  });
}
