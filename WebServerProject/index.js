// Import des modules nécessaires
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import Achatrouter from './Routes/AchatsRout.js'; // Importer votre routeur Achat
import AutontificationRout from './Routes/AutontificationRout.js';
import ClientRouter from './Routes/ClientRout.js';
import Entrouter from './Routes/EntretiensRout.js'; // Importer votre routeur Entretien
import Marrouter from './Routes/MarquesRout.js'; // Importer votre routeur Marque
import Modrouter from './Routes/ModelesRout.js'; // Importer votre routeur Modele
import Proprouter from './Routes/ProprietairesRout.js'; // Importer votre routeur Proprietaire
import Reprouter from './Routes/ReparationsRout.js'; // Importer votre routeur Reparation
import Rollerouter from './Routes/RollesRout.js'; // Importer votre routeur Caracteristique
import Voirouter from './Routes/VoituresRout.js'; // Importer votre routeur Voiture
import database from './config/connexion.js';
import achatRules from './validations/validationAchats.js'; // Importer les règles de validation des achats
import ClientRules from './validations/validationClient.js';
import entretienRules from './validations/validationEntretiens.js'; // Importer les règles de validation des entretiens
import marqueRules from './validations/validationMarques.js'; // Importer les règles de validation des marques
import modeleRules from './validations/ValidationModeles.js'; // Importer les règles de validation des modeles
import proprietaireRules from './validations/validationProprietaires.js'; // Importer les règles de validation des proprietaires
import reparationRules from './validations/validationReparations.js'; // Importer les règles de validation des reparations
import RolleRules from './validations/validationRolles.js'; // Importer les règles de validation des caracteristiques
import voitureRules from './validations/validationVoitures.js'; // Importer les règles de validation des voitures


// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Synchroniser avec la base de données
database.sync();

// Création de l'application Express
const app = express();

// Utilisation des modules importés
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes pour les contrôleurs
app.use('/achats', Achatrouter, achatRules);
app.use('/Rolles', Rollerouter, RolleRules);
app.use('/entretiens', Entrouter, entretienRules);
app.use('/marques', Marrouter, marqueRules);
app.use('/modeles', Modrouter, modeleRules);
app.use('/proprietaires', Proprouter, proprietaireRules);
app.use('/Client',ClientRouter , ClientRules);
app.use('/reparations', Reprouter, reparationRules);
app.use('/voitures', Voirouter, voitureRules);
app.use('/login', AutontificationRout);

// Définition du port
const port = process.env.PORT || 5000;

// Lancement du serveur
app.listen(port, () => console.log(`Le serveur est lancé sur le port ${port}`));
