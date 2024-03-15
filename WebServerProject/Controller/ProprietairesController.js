import { Proprietaire } from "../models/Relations.js"; // Import du modèle Proprietaire depuis relations.js
import { validationResult } from "express-validator";

// Récupérer tous les propriétaires
export const getProprietaires = async (req, res) => {
    try {
        const proprietaires = await Proprietaire.findAll(); // Utilisation du modèle Proprietaire pour récupérer tous les propriétaires
        console.log("Liste des propriétaires récupérée avec succès :", proprietaires);
        res.status(200).json({ data: proprietaires });
    } catch (error) {
        console.error("Erreur lors de la récupération des propriétaires :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des propriétaires." });
    }
}

// Récupérer un propriétaire par son ID
export const getProprietaireById = async (req, res) => {
    try {
        const proprietaire = await Proprietaire.findByPk(req.params.id); // Utilisation du modèle Proprietaire pour récupérer un propriétaire par son ID
        if (!proprietaire) {
            console.log("Propriétaire introuvable pour l'ID :", req.params.id);
            res.status(404).json({ message: "Propriétaire introuvable." });
        } else {
            console.log("Propriétaire récupéré avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: proprietaire });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération du propriétaire pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du propriétaire." });
    }
}

// Créer un nouveau propriétaire
export const createProprietaire = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la création d'un propriétaire :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouveauProprietaire = await Proprietaire.create(req.body); // Utilisation du modèle Proprietaire pour créer un nouveau propriétaire
        console.log("Propriétaire créé avec succès :", nouveauProprietaire);
        res.status(201).json({ data: nouveauProprietaire, message: "Propriétaire créé avec succès." });
    } catch (error) {
        console.error("Erreur lors de la création du propriétaire :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création du propriétaire." });
    }
}

// Mettre à jour un propriétaire par son ID
export const updateProprietaire = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la mise à jour d'un propriétaire :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const proprietaire = await Proprietaire.findByPk(req.params.id); // Utilisation du modèle Proprietaire pour récupérer un propriétaire par son ID
        if (!proprietaire) {
            console.log("Propriétaire introuvable pour la mise à jour pour l'ID :", req.params.id);
            res.status(404).json({ message: "Propriétaire introuvable." });
        } else {
            await proprietaire.update(req.body);
            console.log("Propriétaire mis à jour avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: proprietaire, message: "Propriétaire mis à jour avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour du propriétaire pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour du propriétaire." });
    }
}

// Supprimer un propriétaire par son ID
export const deleteProprietaire = async (req, res) => {
    try {
        const proprietaire = await Proprietaire.findByPk(req.params.id); // Utilisation du modèle Proprietaire pour récupérer un propriétaire par son ID
        if (!proprietaire) {
            console.log("Propriétaire introuvable pour la suppression pour l'ID :", req.params.id);
            res.status(404).json({ message: "Propriétaire introuvable." });
        } else {
            await proprietaire.destroy();
            console.log("Propriétaire supprimé avec succès pour l'ID :", req.params.id);
            res.status(200).json({ message: "Propriétaire supprimé avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression du propriétaire pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression du propriétaire." });
    }
}
