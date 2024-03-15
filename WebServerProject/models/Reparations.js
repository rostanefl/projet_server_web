// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle (l'entité en base de données)

const Reparation = database.define('reparation', {
    description: DataTypes.TEXT,
    cout: DataTypes.FLOAT,
    date_reparation: { type: DataTypes.DATEONLY, allowNull: false }
});
export default Reparation;
