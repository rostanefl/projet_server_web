// Importer la fonction Router
import { Router } from 'express';
import marqueRules from '../validations/validationMarques.js'; // Assurez-vous d'importer les règles de validation appropriées

// Importer les fonctions du contrôleur pour les marques
import { createMarque, deleteMarque, getMarqueById, getMarques, updateMarque } from '../Controller/MarquesController.js';

const Marrouter = Router();

// Définir les routes pour les marques
Marrouter
    .get('/', getMarques) // Récupérer toutes les marques
    .get('/:id', getMarqueById) // Récupérer une marque par son ID
    .post('/',marqueRules, createMarque) // Créer une nouvelle marque
    .put('/:id',marqueRules, updateMarque) // Mettre à jour une marque par son ID
    .delete('/:id', deleteMarque); // Supprimer une marque par son ID

export default Marrouter;
