import { body } from "express-validator";

const marqueRules = [
    body('nom').notEmpty().withMessage("Le nom de la marque ne peut pas être vide."),
    body('pays_origine').optional().notEmpty().withMessage("Le pays d'origine de la marque ne peut pas être vide.")
];

export default marqueRules;
