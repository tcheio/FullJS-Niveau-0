const express = require('express');
const { connectToMongo, getAllTeams, addTeam, deleteTeam } = require('./mongoDbConnect');  
const app = express();
const port = 4000;

app.use(express.json());

app.get('/teams', async (req, res) => {
  try {
    const teams = await getAllTeams();
    res.json(teams);
  } catch (error) {
    console.error('Erreur lors de la récupération des équipes:', error);
    res.status(500).json({ message: 'Erreur lors de la récupération des équipes' });
  }
});

app.post('/add-team', async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Le nom de l\'équipe est requis' });
  }

  try {
    const teamId = await addTeam(name);
    res.status(201).json({ _id: teamId, name });
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'équipe:', error);
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'équipe' });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
