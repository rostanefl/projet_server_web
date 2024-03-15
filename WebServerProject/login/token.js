// Importer jwt
import jwt from 'jsonwebtoken';

export const verifierToken = (req, res, next) => {
    // Récupération du token depuis les en-têtes de la requête
    const bearerToken = req.headers.authorization;

    // Vérification de la présence du token
    if (!bearerToken) return res.status(401).json({ message: "Vous n'êtes pas connecté !" });

    // Récupérer le token sans la partie "Bearer"
    const token = bearerToken.split(' ')[1];

    // Vérification du token
    jwt.verify(token, process.env.CODE_SECRET, (err, payload) => {
        if (err) return res.status(401).json({ message: "Token invalide ou expiré" });

        // Vérification si le token correspond à un propriétaire
        if (payload.role !== 'proprietaire') return res.status(403).json({ message: "Vous n'êtes pas autorisé à accéder à cette ressource" });

        // Ajout de l'ID du propriétaire dans la requête pour une utilisation ultérieure
        req.proprietaireId = payload.id;

        // Passer au middleware suivant
        next();
    });
};
