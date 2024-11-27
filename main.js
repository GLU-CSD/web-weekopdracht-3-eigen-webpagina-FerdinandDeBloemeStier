// alert("Hello WRLD!");

// Selecteer de knoppen
const spelersButton = document.getElementById('spelers-btn');
const geschiedenisButton = document.getElementById('geschiedeis-btn');
const muziekButton = document.getElementById('muziek-btn');
const prijzenButton = document.getElementById('prijzen-btn');

// Selecteer het element waar de tekst moet worden weergegeven
const tekstElement = document.getElementById('tekst');


// Voeg een klik-event toe aan de knoppen
spelersButton.addEventListener('click', () => {
  tekstElement.innerHTML = 'Dit is informatie over spelers.';
});

geschiedenisButton.addEventListener('click', () => {
  tekstElement.innerHTML = 'Dit is informatie over geschiedenis.';
});

muziekButton.addEventListener('click', () => {
  tekstElement.innerHTML = 'Dit is informatie over muziek.';
});

prijzenButton.addEventListener('click', () => {
  tekstElement.innerHTML = 'Dit is informatie over prijzen.';
});