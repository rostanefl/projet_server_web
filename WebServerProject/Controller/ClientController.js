import { Client } from "../models/Relations.js";
import { validationResult } from "express-validator";

// Récupérer tous les clients
export const getClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        console.log("Liste des clients récupérée avec succès :", clients);
        res.status(200).json({ data: clients });
    } catch (error) {
        console.error("Erreur lors de la récupération des clients :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des clients." });
    }
}

// Récupérer un client par son ID
export const getClientById = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            console.log("Client introuvable pour l'ID :", req.params.id);
            res.status(404).json({ message: "Client introuvable." });
        } else {
            console.log("Client récupéré avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: client });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération du client pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du client." });
    }
}

// Créer un nouveau client
export const createClient = async (req, res) => {
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la création d'un client :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouveauClient = await Client.create(req.body);
        console.log("Client créé avec succès :", nouveauClient);
        res.status(201).json({ data: nouveauClient, message: "Client créé avec succès." });
    } catch (error) {
        console.error("Erreur lors de la création du client :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création du client." });
    }
}

// Mettre à jour un client par son ID
export const updateClient = async (req, res) => {
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la mise à jour d'un client :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            console.log("Client introuvable pour la mise à jour pour l'ID :", req.params.id);
            res.status(404).json({ message: "Client introuvable." });
        } else {
            await client.update(req.body);
            console.log("Client mis à jour avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: client, message: "Client mis à jour avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour du client pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour du client." });
    }
}

// Supprimer un client par son ID
export const deleteClient = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            console.log("Client introuvable pour la suppression pour l'ID :", req.params.id);
            res.status(404).json({ message: "Client introuvable." });
        } else {
            await client.destroy();
            console.log("Client supprimé avec succès pour l'ID :", req.params.id);
            res.status(200).json({ message: "Client supprimé avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression du client pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression du client." });
    }
}
