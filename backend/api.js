const express = require('express');
const { connectToMongo, getAllTeams } = require('./mongoDbConnect');  
const app = express();
const port = 3000;
const collection = "Teams";


app.get('/teams', async (req, res) => {
  try {
    const teams = await getAllTeams();
    res.json(teams);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des équipes' });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
