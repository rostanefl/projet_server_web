import Achat from "./Achats.js";
import Client from "./Client.js";
import Entretien from "./Entretiens.js";
import Marque from "./Marques.js";
import Modele from "./Modeles.js";
import Proprietaire from "./Proprietaires.js";
import Reparation from "./Reparations.js";
import Rolle from "./Rolle.js";
import Voiture from "./Voitures.js";

// Relations entre les tables
Voiture.belongsTo(Modele); // Une voiture appartient à un modèle
Modele.hasMany(Voiture); // Un modèle peut avoir plusieurs voitures

Voiture.belongsTo(Marque); // Une voiture appartient à une marque
Marque.hasMany(Voiture); // Une marque peut avoir plusieurs voitures

Achat.belongsTo(Voiture); // Un achat concerne une voiture
Voiture.hasMany(Achat); // Une voiture peut avoir plusieurs achats

Achat.belongsTo(Client); // Un achat concerne une voiture
Client.hasMany(Achat); // Une voiture peut avoir plusieurs achats

Entretien.belongsTo(Voiture); // Un entretien concerne une voiture
Voiture.hasMany(Entretien); // Une voiture peut avoir plusieurs entretiens

Proprietaire.hasMany(Voiture);  // Une voiture appartient à un propriétaire
Voiture.belongsTo(Proprietaire);  // Un propriétaire peut avoir plusieurs voitures

Rolle.hasMany(Client);
Client.belongsTo(Rolle);

Rolle.hasMany(Proprietaire);
Proprietaire.belongsTo(Rolle);



// Exporter les modèles
export { Achat, Client, Entretien, Marque, Modele, Proprietaire, Reparation, Rolle, Voiture };

