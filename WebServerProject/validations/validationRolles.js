import { body } from "express-validator";

const RolleRules = [
    body('nom').isString().withMessage("Le nom de la caractéristique ne peut pas être vide.")
];

export default RolleRules;
