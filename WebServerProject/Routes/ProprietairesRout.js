// Importer la fonction Router
import { Router } from 'express';
import propriétaireRules from '../validations/validationProprietaires.js'; // Assurez-vous d'importer les règles de validation appropriées

// Importer les fonctions du contrôleur pour les propriétaires
import { createProprietaire, deleteProprietaire, getProprietaireById, getProprietaires, updateProprietaire } from '../Controller/ProprietairesController.js';

const Proprouter = Router();

// Définir les routes pour les propriétaires
Proprouter
    .get('/', getProprietaires) // Récupérer tous les propriétaires
    .get('/:id', getProprietaireById) // Récupérer un propriétaire par son ID
    .post('/',propriétaireRules, createProprietaire) // Créer un nouveau propriétaire
    .put('/:id',propriétaireRules, updateProprietaire) // Mettre à jour un propriétaire par son ID
    .delete('/:id', deleteProprietaire); // Supprimer un propriétaire par son ID

export default Proprouter;
