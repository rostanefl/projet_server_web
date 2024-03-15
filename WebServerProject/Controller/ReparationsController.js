import { Reparation } from "../models/Relations.js"; // Import du modèle Reparation depuis relations.js
import { validationResult } from "express-validator";

// Récupérer toutes les réparations
export const getReparations = async (req, res) => {
    try {
        const reparations = await Reparation.findAll(); // Utilisation du modèle Reparation pour récupérer toutes les réparations
        console.log("Liste des réparations récupérée avec succès :", reparations);
        res.status(200).json({ data: reparations });
    } catch (error) {
        console.error("Erreur lors de la récupération des réparations :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des réparations." });
    }
}

// Récupérer une réparation par son ID
export const getReparationById = async (req, res) => {
    try {
        const reparation = await Reparation.findByPk(req.params.id); // Utilisation du modèle Reparation pour récupérer une réparation par son ID
        if (!reparation) {
            console.log("Réparation introuvable pour l'ID :", req.params.id);
            res.status(404).json({ message: "Réparation introuvable." });
        } else {
            console.log("Réparation récupérée avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: reparation });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de la réparation pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de la réparation." });
    }
}

// Créer une nouvelle réparation
export const createReparation = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la création d'une réparation :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouvelleReparation = await Reparation.create(req.body); // Utilisation du modèle Reparation pour créer une nouvelle réparation
        console.log("Réparation créée avec succès :", nouvelleReparation);
        res.status(201).json({ data: nouvelleReparation, message: "Réparation créée avec succès." });
    } catch (error) {
        console.error("Erreur lors de la création de la réparation :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de la réparation." });
    }
}

// Mettre à jour une réparation par son ID
export const updateReparation = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la mise à jour d'une réparation :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const reparation = await Reparation.findByPk(req.params.id); // Utilisation du modèle Reparation pour récupérer une réparation par son ID
        if (!reparation) {
            console.log("Réparation introuvable pour la mise à jour pour l'ID :", req.params.id);
            res.status(404).json({ message: "Réparation introuvable." });
        } else {
            await reparation.update(req.body);
            console.log("Réparation mise à jour avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: reparation, message: "Réparation mise à jour avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour de la réparation pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de la réparation." });
    }
}

// Supprimer une réparation par son ID
export const deleteReparation = async (req, res) => {
    try {
        const reparation = await Reparation.findByPk(req.params.id); // Utilisation du modèle Reparation pour récupérer une réparation par son ID
        if (!reparation) {
            console.log("Réparation introuvable pour la suppression pour l'ID :", req.params.id);
            res.status(404).json({ message: "Réparation introuvable." });
        } else {
            await reparation.destroy();
            console.log("Réparation supprimée avec succès pour l'ID :", req.params.id);
            res.status(200).json({ message: "Réparation supprimée avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de la réparation pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de la réparation." });
    }
}
