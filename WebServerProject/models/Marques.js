// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle (l'entité en base de données)

const Marque = database.define('marque', {
    nom: { type: DataTypes.STRING, allowNull: false },
    pays_origine: DataTypes.STRING
});

export default Marque;
