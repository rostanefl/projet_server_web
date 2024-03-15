// Importer les modèles Proprietaire et Client
import { Client, Proprietaire } from "../models/Relations.js";
// Importer le module qui génère la clé
import jwt from 'jsonwebtoken';

// Ajouter les validations
import { validationResult } from "express-validator";

export const login = async (req, res) => {
    
    // Récupération des résultats de la validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    // Les informations de connexion
    const { email, mot_de_passe } = req.body;

    // Vérification de l'email
    if (!email) return res.status(404).json({ message: "L'Email est incorrect" });

    // Chercher la personne dans la base de données
    try {
        // Recherche dans la table Proprietaire
        let user = await Proprietaire.findOne({ where: { email } });

        // Si l'utilisateur n'est pas trouvé dans la table Proprietaire, chercher dans la table Client
        if (!user) {
            user = await Client.findOne({ where: { email } });

            // Si l'utilisateur n'est pas trouvé dans la table Client non plus, renvoyer un message d'erreur
            if (!user) return res.status(404).json({ message: "La personne n'existe pas!" });
        }

        // Vérification du mot de passe
        if (user.mot_de_passe !== mot_de_passe) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
        }

        // Création de la clé d'accès
        const payload = { id: user.id };
        const token = jwt.sign(payload, process.env.CODE_SECRET);

        res.status(200).json({ data: user, token });

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
