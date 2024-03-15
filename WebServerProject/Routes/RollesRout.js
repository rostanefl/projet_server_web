// Importer la fonction Router
import { Router } from 'express';
import RolleRules from '../validations/validationRolles.js'; // Assurez-vous d'importer les règles de validation appropriées

// Importer les fonctions du contrôleur pour les caractéristiques
import { createRole, deleteRole, getRoleById, getRoles, updateRole } from '../Controller/RollesController.js';

const Rollerouter = Router();

// Définir les routes pour les caractéristiques
Rollerouter
    .get('/', getRoles) // Récupérer toutes les caractéristiques
    .get('/:id', getRoleById) // Récupérer une caractéristique par son ID
    .post('/',RolleRules, createRole) // Créer une nouvelle caractéristique
    .put('/:id',RolleRules, updateRole) // Mettre à jour une caractéristique par son ID
    .delete('/:id', deleteRole); // Supprimer une caractéristique par son ID

export default Rollerouter;
