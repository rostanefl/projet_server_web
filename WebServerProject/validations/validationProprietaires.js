import { body } from "express-validator";

// Définir la regex pour les noms et prénoms
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\-'\s]+$/;

const proprietaireRules = [
    body('nom').matches(nameRegex).withMessage("Le nom n'est pas conforme."),
    body('prenom').matches(nameRegex).withMessage("Le prénom n'est pas conforme."),
    body('adresse').optional(),
    body('numero_telephone').optional(),
    body('email').optional().isEmail().withMessage("L'email du propriétaire doit être valide."),
    body('photo').optional(),
    body('date_naissance').optional().isISO8601().withMessage('Format de date de naissance incorrect.'),
    body('mot_de_passe').optional().isString()
        .isLength({ min: 8 }).withMessage('Le mot de passe doit contenir au moins 8 caractères.')
        .matches(/\d/).withMessage('Le mot de passe doit contenir au moins un chiffre.')
        .matches(/[a-z]/).withMessage('Le mot de passe doit contenir au moins une lettre minuscule.')
        .matches(/[A-Z]/).withMessage('Le mot de passe doit contenir au moins une lettre majuscule.')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Le mot de passe doit contenir au moins un caractère spécial.')
];

export default proprietaireRules;
