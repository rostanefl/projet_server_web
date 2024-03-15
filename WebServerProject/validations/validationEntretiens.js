import { body } from "express-validator";

const entretienRules = [
    body('type_entretien').isString().withMessage("Le type d'entretien ne peut pas être vide."),
    body('cout').optional().isFloat({ min: 0 }).withMessage("Le coût de l'entretien doit être un nombre décimal positif."),
    body('date_entretien').isISO8601().withMessage("La date d'entretien doit être une date valide.")
];

export default entretienRules;
