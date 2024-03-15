import { body } from "express-validator";

const voitureRules = [
    body('année_fabrication').isInt({ min: 0 }).withMessage("L'année de fabrication doit être un entier positif."),
    body('couleur').optional(),
    body('prix').optional().isFloat({ min: 0 }).withMessage("Le prix de la voiture doit être un nombre décimal positif.")
];

export default voitureRules;
