// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle (l'entité en base de données)

const Voiture = database.define('voiture', {
    année_fabrication: { type: DataTypes.INTEGER, allowNull: false },
    couleur: DataTypes.STRING,
    prix: DataTypes.FLOAT
});
export default Voiture;
