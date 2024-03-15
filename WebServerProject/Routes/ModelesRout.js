// Importer la fonction Router
import { Router } from 'express';
import modeleRules from '../validations/validationMarques.js'; // Assurez-vous d'importer les règles de validation appropriées

// Importer les fonctions du contrôleur pour les modèles
import { createModele, deleteModele, getModeleById, getModeles, updateModele } from '../Controller/ModelesController.js';

const Modrouter = Router();

// Définir les routes pour les modèles
Modrouter
    .get('/', getModeles) // Récupérer tous les modèles
    .get('/:id', getModeleById) // Récupérer un modèle par son ID
    .post('/',modeleRules, createModele) // Créer un nouveau modèle
    .put('/:id',modeleRules, updateModele) // Mettre à jour un modèle par son ID
    .delete('/:id', deleteModele); // Supprimer un modèle par son ID

export default Modrouter;
