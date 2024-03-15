// Importer la fonction Router
import { Router } from 'express';
import voitureRules from '../validations/validationVoitures.js'; // Assurez-vous d'importer les règles de validation appropriées

// Importer les fonctions du contrôleur pour les voitures
import { createVoiture, deleteVoiture, getVoitureById, getVoitures, updateVoiture } from '../Controller/VoituresController.js';

const Voirouter = Router();

// Définir les routes pour les voitures
Voirouter
    .get('/', getVoitures) // Récupérer toutes les voitures
    .get('/:id', getVoitureById) // Récupérer une voiture par son ID
    .post('/',voitureRules, createVoiture) // Créer une nouvelle voiture
    .put('/:id',voitureRules, updateVoiture) // Mettre à jour une voiture par son ID
    .delete('/:id', deleteVoiture); // Supprimer une voiture par son ID

export default Voirouter;
