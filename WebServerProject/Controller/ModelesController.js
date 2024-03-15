import { Modele } from "../models/Relations.js"; // Import du modèle Modele depuis relations.js
import { validationResult } from "express-validator";

// Récupérer tous les modèles
export const getModeles = async (req, res) => {
    try {
        const modeles = await Modele.findAll(); // Utilisation du modèle Modele pour récupérer tous les modèles
        console.log("Liste des modèles récupérée avec succès :", modeles);
        res.status(200).json({ data: modeles });
    } catch (error) {
        console.error("Erreur lors de la récupération des modèles :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des modèles." });
    }
}

// Récupérer un modèle par son ID
export const getModeleById = async (req, res) => {
    try {
        const modele = await Modele.findByPk(req.params.id); // Utilisation du modèle Modele pour récupérer un modèle par son ID
        if (!modele) {
            console.log("Modèle introuvable pour l'ID :", req.params.id);
            res.status(404).json({ message: "Modèle introuvable." });
        } else {
            console.log("Modèle récupéré avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: modele });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération du modèle pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du modèle." });
    }
}

// Créer un nouveau modèle
export const createModele = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la création d'un modèle :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouveauModele = await Modele.create(req.body); // Utilisation du modèle Modele pour créer un nouveau modèle
        console.log("Modèle créé avec succès :", nouveauModele);
        res.status(201).json({ data: nouveauModele, message: "Modèle créé avec succès." });
    } catch (error) {
        console.error("Erreur lors de la création du modèle :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création du modèle." });
    }
}

// Mettre à jour un modèle par son ID
export const updateModele = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la mise à jour d'un modèle :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const modele = await Modele.findByPk(req.params.id); // Utilisation du modèle Modele pour récupérer un modèle par son ID
        if (!modele) {
            console.log("Modèle introuvable pour la mise à jour pour l'ID :", req.params.id);
            res.status(404).json({ message: "Modèle introuvable." });
        } else {
            await modele.update(req.body);
            console.log("Modèle mis à jour avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: modele, message: "Modèle mis à jour avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour du modèle pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour du modèle." });
    }
}

// Supprimer un modèle par son ID
export const deleteModele = async (req, res) => {
    try {
        const modele = await Modele.findByPk(req.params.id); // Utilisation du modèle Modele pour récupérer un modèle par son ID
        if (!modele) {
            console.log("Modèle introuvable pour la suppression pour l'ID :", req.params.id);
            res.status(404).json({ message: "Modèle introuvable." });
        } else {
            await modele.destroy();
            console.log("Modèle supprimé avec succès pour l'ID :", req.params.id);
            res.status(200).json({ message: "Modèle supprimé avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression du modèle pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression du modèle." });
    }
}
