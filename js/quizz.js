    // Liaison entre l'animation et le chemin SVG
    const highlight = document.querySelector('.highlight');
    const path = document.querySelector('#blood-path');

    // Configuration de l'animation sur le chemin
    highlight.style.offsetPath = `path('${path.getAttribute('d')}')`;
    highlight.style.offsetDistance = '0%'; // Démarre à 0

// Liste des organes avec émoji et positions
const organs = [
    { emoji: '🧠', top: '50px', left: '250px' },   // Cerveau
    { emoji: '❤️', top: '75px', left: '290px' },   // Cœur   
    { emoji: '🫁', top: '180px', left: '260px' },   // Poumon
    // Ajoutez d'autres organes ici si nécessaire
  ];
  
  let currentOrgan = 0; // Organe initial (Cerveau)
  
  // Fonction pour changer l'organe
  function changeOrgan() {
    // Passer à l'organe suivant
    currentOrgan = (currentOrgan + 1) % organs.length; 
  
    const organData = organs[currentOrgan]; // Récupérer les données de l'organe
    const organEmoji = document.getElementById('organ-emoji');
    const organDiv = document.getElementById('organ');
  
    // Mettre à jour l'émoji de l'organe
    organEmoji.textContent = organData.emoji;
  
    // Mettre à jour la position de l'organe
    organDiv.style.top = organData.top;
    organDiv.style.left = organData.left;
  }
  
  // Ajouter un événement au bouton pour changer l'organe
  document.getElementById('changeOrganBtn').addEventListener('click', changeOrgan);
  