import { body } from "express-validator";

const achatRules = [
    body('date_achat').isISO8601().withMessage("La date d'achat doit être une date valide."),
    body('prix_achat').isFloat({ min: 0 }).withMessage("Le prix d'achat doit être un nombre décimal positif.")
];

export default achatRules;


