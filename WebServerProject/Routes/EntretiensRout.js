// Importer la fonction Router
import { Router } from 'express';
import entretienRules from '../validations/validationEntretiens.js'; // Assurez-vous d'importer les règles de validation appropriées

// Importer les fonctions du contrôleur pour les entretiens
import { createEntretien, deleteEntretien, getEntretiens, updateEntretien, getEntretienById } from '../Controller/EntretiensController.js';

const Entrouter = Router();

// Définir les routes pour les entretiens
Entrouter
    .get('/', getEntretiens) // Récupérer tous les entretiens
    .get('/:id', getEntretienById) // Récupérer un entretien par son ID
    .post('/',entretienRules, createEntretien) // Créer un nouvel entretien
    .put('/:id',entretienRules, updateEntretien) // Mettre à jour un entretien par son ID
    .delete('/:id', deleteEntretien); // Supprimer un entretien par son ID

export default Entrouter;
