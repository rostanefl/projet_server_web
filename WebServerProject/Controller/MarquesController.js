import { Marque } from "../models/Relations.js"; // Import du modèle Marque depuis relations.js
import { validationResult } from "express-validator";

// Récupérer toutes les marques
export const getMarques = async (req, res) => {
    try {
        const marques = await Marque.findAll(); // Utilisation du modèle Marque pour récupérer toutes les marques
        console.log("Liste des marques récupérée avec succès :", marques);
        res.status(200).json({ data: marques });
    } catch (error) {
        console.error("Erreur lors de la récupération des marques :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des marques." });
    }
}

// Récupérer une marque par son ID
export const getMarqueById = async (req, res) => {
    try {
        const marque = await Marque.findByPk(req.params.id); // Utilisation du modèle Marque pour récupérer une marque par son ID
        if (!marque) {
            console.log("Marque introuvable pour l'ID :", req.params.id);
            res.status(404).json({ message: "Marque introuvable." });
        } else {
            console.log("Marque récupérée avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: marque });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de la marque pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération de la marque." });
    }
}

// Créer une nouvelle marque
export const createMarque = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la création d'une marque :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouvelleMarque = await Marque.create(req.body); // Utilisation du modèle Marque pour créer une nouvelle marque
        console.log("Marque créée avec succès :", nouvelleMarque);
        res.status(201).json({ data: nouvelleMarque, message: "Marque créée avec succès." });
    } catch (error) {
        console.error("Erreur lors de la création de la marque :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création de la marque." });
    }
}

// Mettre à jour une marque par son ID
export const updateMarque = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la mise à jour d'une marque :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const marque = await Marque.findByPk(req.params.id); // Utilisation du modèle Marque pour récupérer une marque par son ID
        if (!marque) {
            console.log("Marque introuvable pour la mise à jour pour l'ID :", req.params.id);
            res.status(404).json({ message: "Marque introuvable." });
        } else {
            await marque.update(req.body);
            console.log("Marque mise à jour avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: marque, message: "Marque mise à jour avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour de la marque pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour de la marque." });
    }
}

// Supprimer une marque par son ID
export const deleteMarque = async (req, res) => {
    try {
        const marque = await Marque.findByPk(req.params.id); // Utilisation du modèle Marque pour récupérer une marque par son ID
        if (!marque) {
            console.log("Marque introuvable pour la suppression pour l'ID :", req.params.id);
            res.status(404).json({ message: "Marque introuvable." });
        } else {
            await marque.destroy();
            console.log("Marque supprimée avec succès pour l'ID :", req.params.id);
            res.status(200).json({ message: "Marque supprimée avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de la marque pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression de la marque." });
    }
}
