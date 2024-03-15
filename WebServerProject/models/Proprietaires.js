// Importer les types de données
import { DataTypes } from "sequelize";

// Importer la connexion à la base de données
import database from "../config/connexion.js";

// Création du modèle (l'entité en base de données)


const Proprietaire = database.define('proprietaire', {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    adresse: DataTypes.STRING,
    numero_telephone: DataTypes.STRING,
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    date_naissance: DataTypes.DATEONLY,
    mot_de_passe: DataTypes.STRING
}, {
   // timestamps: false // Désactiver l'ajout automatique de createdAt et updatedAt
});

export default Proprietaire;


