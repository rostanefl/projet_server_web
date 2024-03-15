// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle (l'entité en base de données)

const Entretien = database.define('entretien', {
    type_entretien: { type: DataTypes.STRING, allowNull: false },
    cout: DataTypes.FLOAT,
    date_entretien: { type: DataTypes.DATEONLY, allowNull: false }
});

export default Entretien;
