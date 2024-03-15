import { Rolle } from "../models/Relations.js"; // Import du modèle Rolle depuis relations.js
import { validationResult } from "express-validator";

// Récupérer tous les rôles
export const getRoles = async (req, res) => {
    try {
        const roles = await Rolle.findAll(); // Utilisation du modèle Rolle pour récupérer tous les rôles
        console.log("Liste des rôles récupérée avec succès :", roles);
        res.status(200).json({ data: roles });
    } catch (error) {
        console.error("Erreur lors de la récupération des rôles :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération des rôles." });
    }
}

// Récupérer un rôle par son ID
export const getRoleById = async (req, res) => {
    try {
        const role = await Rolle.findByPk(req.params.id); // Utilisation du modèle Rolle pour récupérer un rôle par son ID
        if (!role) {
            console.log("Rôle introuvable pour l'ID :", req.params.id);
            res.status(404).json({ message: "Rôle introuvable." });
        } else {
            console.log("Rôle récupéré avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: role });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération du rôle pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la récupération du rôle." });
    }
}

// Créer un nouveau rôle
export const createRole = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la création d'un rôle :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const nouveauRole = await Rolle.create(req.body); // Utilisation du modèle Rolle pour créer un nouveau rôle
        console.log("Rôle créé avec succès :", nouveauRole);
        res.status(201).json({ data: nouveauRole, message: "Rôle créé avec succès." });
    } catch (error) {
        console.error("Erreur lors de la création du rôle :", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la création du rôle." });
    }
}

// Mettre à jour un rôle par son ID
export const updateRole = async (req, res) => {
    // Validation des données
    const erreursValidation = validationResult(req);
    if (!erreursValidation.isEmpty()) {
        console.error("Erreurs de validation lors de la mise à jour d'un rôle :", erreursValidation.array());
        return res.status(400).json({ erreurs: erreursValidation.array() });
    }

    try {
        const role = await Rolle.findByPk(req.params.id); // Utilisation du modèle Rolle pour récupérer un rôle par son ID
        if (!role) {
            console.log("Rôle introuvable pour la mise à jour pour l'ID :", req.params.id);
            res.status(404).json({ message: "Rôle introuvable." });
        } else {
            await role.update(req.body);
            console.log("Rôle mis à jour avec succès pour l'ID :", req.params.id);
            res.status(200).json({ data: role, message: "Rôle mis à jour avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour du rôle pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la mise à jour du rôle." });
    }
}

// Supprimer un rôle par son ID
export const deleteRole = async (req, res) => {
    try {
        const role = await Rolle.findByPk(req.params.id); // Utilisation du modèle Rolle pour récupérer un rôle par son ID
        if (!role) {
            console.log("Rôle introuvable pour la suppression pour l'ID :", req.params.id);
            res.status(404).json({ message: "Rôle introuvable." });
        } else {
            await role.destroy();
            console.log("Rôle supprimé avec succès pour l'ID :", req.params.id);
            res.status(200).json({ message: "Rôle supprimé avec succès." });
        }
    } catch (error) {
        console.error("Erreur lors de la suppression du rôle pour l'ID :", req.params.id, ":", error);
        res.status(500).json({ message: "Une erreur s'est produite lors de la suppression du rôle." });
    }
}
