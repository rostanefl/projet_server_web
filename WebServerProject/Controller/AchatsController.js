import { Achat } from "../models/Relations.js"; // Import du modèle Achat depuis relations.js
import { validationResult } from "express-validator";

// Lister tous les achats
export const getAchats = async (req, res) => {
    try {
        const achats = await Achat.findAll(); // Utilisation du modèle Achat pour accéder aux achats
        console.log("Liste des achats récupérée avec succès :", achats);
        res.status(200).json({ data: achats });
    } catch (error) {
        console.error("Erreur lors de la récupération des achats :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des achats." });
    }
}

// Obtenir un achat spécifique par son ID
export const getAchatById = async (req, res) => {
    try {
        const achat = await Achat.findByPk(req.params.id); // Utilisation du modèle Achat pour accéder à un achat par son ID
        if (!achat) {
            console.log("Achat introuvable pour l'ID :", req.params.id);
            res.status(404).json({ message: "Achat introuvable." });
        } else {
            console.log("Achat récupéré avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: achat });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de l'achat pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'achat." });
    }
}

// Créer un nouvel achat
export const createAchat = async (req, res) => {
    // Validation des données
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        console.error("Erreurs de validation lors de la création d'un achat :", validationErrors.array());
        return res.status(400).json({ errors: validationErrors.array() });
    }

    try {
        const newAchat = await Achat.create(req.body); // Utilisation du modèle Achat pour créer un nouvel achat
        console.log("Achat créé avec succès :", newAchat);
        res.status(201).json({ data: newAchat, message: "Achat créé avec succès." });
    } catch (error) {
        console.error("Erreur lors de la création de l'achat :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'achat." });
    }
}

// Mettre à jour un achat existant
export const updateAchat = async (req, res) => {
    // Validation des données
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        console.error("Erreurs de validation lors de la mise à jour d'un achat :", validationErrors.array());
        return res.status(400).json({ errors: validationErrors.array() });
    }

    try {
        const achat = await Achat.findByPk(req.params.id); // Utilisation du modèle Achat pour accéder à un achat par son ID
        if (!achat) {
            console.log("Achat introuvable pour la mise à jour pour l'ID :", req.params.id);
            res.status(404).json({ message: "Achat introuvable." });
        } else {
            await achat.update(req.body);
            console.log("Achat mis à jour avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: achat, message: "Achat mis à jour avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'achat pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de l'achat." });
    }
}

// Supprimer un achat existant
export const deleteAchat = async (req, res) => {
    try {
        const achat = await Achat.findByPk(req.params.id); // Utilisation du modèle Achat pour accéder à un achat par son ID
        if (!achat) {
            console.log("Achat introuvable pour la suppression pour l'ID :", req.params.id);
            res.status(404).json({ message: "Achat introuvable." });
        } else {
            await achat.destroy();
            console.log("Achat supprimé avec succès pour l'ID :", req.params.id);
            res.status(200).json({ message: "Achat supprimé avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de l'achat pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'achat." });
    }
}
