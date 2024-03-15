import { Voiture } from "../models/Relations.js"; // Import du modèle Voiture depuis relations.js
import { validationResult } from "express-validator";

// Récupérer toutes les voitures
export const getVoitures = async (req, res) => {
    try {
        const voitures = await Voiture.findAll(); // Utilisation du modèle Voiture pour récupérer toutes les voitures
        console.log("Liste des voitures récupérée avec succès :", voitures);
        res.status(200).json({ data: voitures });
    } catch (error) {
        console.error("Erreur lors de la récupération des voitures :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des voitures." });
    }
}

// Récupérer une voiture par son ID
export const getVoitureById = async (req, res) => {
    try {
        const voiture = await Voiture.findByPk(req.params.id); // Utilisation du modèle Voiture pour récupérer une voiture par son ID
        if (!voiture) {
            console.log("Voiture introuvable pour l'ID :", req.params.id);
            res.status(404).json({ message: "Voiture introuvable." });
        } else {
            console.log("Voiture récupérée avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: voiture });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de la voiture pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de la voiture." });
    }
}

// Créer une nouvelle voiture
export const createVoiture = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la création d'une voiture :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouvelleVoiture = await Voiture.create(req.body); // Utilisation du modèle Voiture pour créer une nouvelle voiture
        console.log("Voiture créée avec succès :", nouvelleVoiture);
        res.status(201).json({ data: nouvelleVoiture, message: "Voiture créée avec succès." });
    } catch (error) {
        console.error("Erreur lors de la création de la voiture :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de la voiture." });
    }
}

// Mettre à jour une voiture par son ID
export const updateVoiture = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la mise à jour d'une voiture :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const voiture = await Voiture.findByPk(req.params.id); // Utilisation du modèle Voiture pour récupérer une voiture par son ID
        if (!voiture) {
            console.log("Voiture introuvable pour la mise à jour pour l'ID :", req.params.id);
            res.status(404).json({ message: "Voiture introuvable." });
        } else {
            await voiture.update(req.body);
            console.log("Voiture mise à jour avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: voiture, message: "Voiture mise à jour avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour de la voiture pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de la voiture." });
    }
}

// Supprimer une voiture par son ID
export const deleteVoiture = async (req, res) => {
    try {
        const voiture = await Voiture.findByPk(req.params.id); // Utilisation du modèle Voiture pour récupérer une voiture par son ID
        if (!voiture) {
            console.log("Voiture introuvable pour la suppression pour l'ID :", req.params.id);
            res.status(404).json({ message: "Voiture introuvable." });
        } else {
            await voiture.destroy();
            console.log("Voiture supprimée avec succès pour l'ID :", req.params.id);
            res.status(200).json({ message: "Voiture supprimée avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de la voiture pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de la voiture." });
    }
}
