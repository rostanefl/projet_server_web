// Importer la fonction Router
import { Router } from 'express';
import reparationRules from '../validations/validationEntretiens.js'; // Assurez-vous d'importer les règles de validation appropriées

// Importer les fonctions du contrôleur pour les réparations
import { createReparation, deleteReparation, getReparationById, getReparations, updateReparation } from '../Controller/ReparationsController.js';

const Reprouter = Router();

// Définir les routes pour les réparations
Reprouter
    .get('/', getReparations) // Récupérer toutes les réparations
    .get('/:id', getReparationById) // Récupérer une réparation par son ID
    .post('/',reparationRules, createReparation) // Créer une nouvelle réparation
    .put('/:id',reparationRules, updateReparation) // Mettre à jour une réparation par son ID
    .delete('/:id', deleteReparation); // Supprimer une réparation par son ID

export default Reprouter;
