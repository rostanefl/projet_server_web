// Importer la connexion à la base de données
import database from "../config/connexion.js";
// Importer les types de données
import { DataTypes } from "sequelize";


// Création du modèle (l'entité en base de données)

const Achat = database.define('achat',{
    date_achat: { type: DataTypes.DATEONLY, allowNull: false },
    prix_achat: { type: DataTypes.FLOAT, allowNull: false }
});
export default Achat;
