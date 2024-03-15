import { Router } from 'express';
import { createAchat, deleteAchat, getAchatById, getAchats, updateAchat } from '../Controller/AchatsController.js';
import achatRules from '../validations/validationAchats.js'; // Assurez-vous d'importer les règles de validation appropriées

const Achatrouter = Router();

Achatrouter
    .get('/', getAchats) // Liste tous les achats
    .post('/', achatRules, createAchat) // Crée un nouvel achat en appliquant les règles de validation
    .put('/:id', achatRules, updateAchat) // Met à jour un achat par son ID en appliquant les règles de validation
    .delete('/:id', deleteAchat) // Supprime un achat par son ID
    .get('/:id', getAchatById); // Récupère un achat par son ID

export default Achatrouter;
