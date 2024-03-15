import { body } from "express-validator";

const authenticationRules = [
    body('email')
        .exists().withMessage('L\'adresse e-mail est obligatoire')
        .isEmail().withMessage("L'adresse e-mail n'est pas valide"),
    body('mot_de_passe')
        .exists().withMessage('Le mot de passe est obligatoire')
        .isString().withMessage('Le mot de passe doit être une chaîne de caractères')
        .isLength({ min: 8 }).withMessage('Le mot de passe doit contenir au moins 8 caractères')
        .matches(/\d/).withMessage('Le mot de passe doit contenir au moins un chiffre')
        .matches(/[a-z]/).withMessage('Le mot de passe doit contenir au moins une lettre minuscule')
        .matches(/[A-Z]/).withMessage('Le mot de passe doit contenir au moins une lettre majuscule')
        .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('Le mot de passe doit contenir au moins un caractère spécial')
];

export default authenticationRules;
