import { Entretien } from "../models/Relations.js"; // Import du modèle Entretien depuis relations.js
import { validationResult } from "express-validator";

// Récupérer tous les entretiens
export const getEntretiens = async (req, res) => {
    try {
        const entretiens = await Entretien.findAll(); // Utilisation du modèle Entretien pour récupérer tous les entretiens
        console.log("Liste des entretiens récupérée avec succès :", entretiens);
        res.status(200).json({ data: entretiens });
    } catch (error) {
        console.error("Erreur lors de la récupération des entretiens :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des entretiens." });
    }
}

// Récupérer un entretien par son ID
export const getEntretienById = async (req, res) => {
    try {
        const entretien = await Entretien.findByPk(req.params.id); // Utilisation du modèle Entretien pour récupérer un entretien par son ID
        if (!entretien) {
            console.log("Entretien introuvable pour l'ID :", req.params.id);
            res.status(404).json({ message: "Entretien introuvable." });
        } else {
            console.log("Entretien récupéré avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: entretien });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de l'entretien pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de l'entretien." });
    }
}

// Créer un nouvel entretien
export const createEntretien = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la création d'un entretien :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouvelEntretien = await Entretien.create(req.body); // Utilisation du modèle Entretien pour créer un nouvel entretien
        console.log("Entretien créé avec succès :", nouvelEntretien);
        res.status(201).json({ data: nouvelEntretien, message: "Entretien créé avec succès." });
    } catch (error) {
        console.error("Erreur lors de la création de l'entretien :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de l'entretien." });
    }
}

// Mettre à jour un entretien par son ID
export const updateEntretien = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la mise à jour d'un entretien :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const entretien = await Entretien.findByPk(req.params.id); // Utilisation du modèle Entretien pour récupérer un entretien par son ID
        if (!entretien) {
            console.log("Entretien introuvable pour la mise à jour pour l'ID :", req.params.id);
            res.status(404).json({ message: "Entretien introuvable." });
        } else {
            await entretien.update(req.body);
            console.log("Entretien mis à jour avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: entretien, message: "Entretien mis à jour avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour de l'entretien pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de l'entretien." });
    }
}

// Supprimer un entretien par son ID
export const deleteEntretien = async (req, res) => {
    try {
        const entretien = await Entretien.findByPk(req.params.id); // Utilisation du modèle Entretien pour récupérer un entretien par son ID
        if (!entretien) {
            console.log("Entretien introuvable pour la suppression pour l'ID :", req.params.id);
            res.status(404).json({ message: "Entretien introuvable." });
        } else {
            await entretien.destroy();
            console.log("Entretien supprimé avec succès pour l'ID :", req.params.id);
            res.status(200).json({ message: "Entretien supprimé avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de l'entretien pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de l'entretien." });
    }
}
