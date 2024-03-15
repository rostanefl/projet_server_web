import { body } from "express-validator";

const reparationRules = [
    body('description').optional().isString().withMessage("La description de la réparation doit être une chaîne de caractères."),
    body('cout').optional().isFloat({ min: 0 }).withMessage("Le coût de la réparation doit être un nombre décimal positif."),
    body('date_reparation').notEmpty().isISO8601().withMessage("La date de réparation est requise et doit être au format ISO.")
];

export default reparationRules;
