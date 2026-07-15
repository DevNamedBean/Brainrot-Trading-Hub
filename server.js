const express = require('express');
const path = require('path');
const app = express();

// Serveer alle bestanden in de hoofdmap (inclusief index.html)
app.use(express.static(__dirname));

// Stuur bezoekers altijd naar de index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Render geeft automatisch een PORT mee, anders gebruiken we 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server draait succesvol op poort ${PORT}`);
});
