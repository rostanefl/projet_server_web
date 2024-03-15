import { body } from "express-validator";

const modeleRules = [
    body('nom').notEmpty().withMessage("Le nom du modèle ne peut pas être vide."),
    body('année_lancement').optional().isInt({ min: 0 }).withMessage("L'année de lancement doit être un entier positif.")
];

export default modeleRules;
