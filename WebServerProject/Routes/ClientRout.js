// Importer la fonction Router
import { Router } from 'express';
import ClientRules from '../validations/validationClient.js'; // Assurez-vous d'importer les règles de validation appropriées

// Importer les fonctions du contrôleur pour les clients
import { createClient, deleteClient, getClientById, getClients, updateClient } from '../Controller/ClientController.js';

const ClientRouter = Router();

// Définir les routes pour les clients
ClientRouter
    .get('/', getClients) // Récupérer tous les clients
    .get('/:id', getClientById) // Récupérer un client par son ID
    .post('/', ClientRules, createClient) // Créer un nouveau client
    .put('/:id', ClientRules, updateClient) // Mettre à jour un client par son ID
    .delete('/:id', deleteClient); // Supprimer un client par son ID

export default ClientRouter;
