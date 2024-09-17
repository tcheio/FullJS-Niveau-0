const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const dbName = "tournament-team-manager";
const collectionName = "team";

async function connectToMongo() {
    const client = new MongoClient(uri);
    try {
      await client.connect();
      console.log("Connecté à MongoDB");
      return client.db(dbName).collection(collectionName);
    } catch (error) {
      console.error('Erreur de connexion à MongoDB:', error);
      throw error;
    }
  }
  
  async function getAllTeams() {
    try {
      const collection = await connectToMongo(); 
      const teams = await collection.find().toArray();
      return teams;
    } catch (error) {
      console.error('Erreur lors de la récupération des équipes:', error);
      throw error;
    }
  }


module.exports = { connectToMongo, getAllTeams }