const express = require('express');
const next = require('next');
const path = require('path');

// Création de l'application Express
const app = express();

// Configuration de Next.js
const nextApp = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: __dirname,
  hostname: '0.0.0.0'
});

const nextHandler = nextApp.getRequestHandler();

// Préparation de Next.js
nextApp.prepare().then(() => {
  // Headers pour Nginx
  app.set('trust proxy', 1);
  
  // Middleware pour servir les fichiers statiques
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.static(path.join(__dirname, '.next')));
  app.use('/_next', express.static(path.join(__dirname, '.next')));

  // Middleware pour parser le JSON et les URL-encoded bodies
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Route par défaut qui redirige toutes les requêtes vers Next.js
  app.all('*', (req, res) => {
    return nextHandler(req, res);
  });

  // Gestion des erreurs
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  // Démarrage du serveur
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`> Ready on http://0.0.0.0:${PORT}`);
  });
});

// Export pour les hébergeurs qui nécessitent un module.exports
module.exports = app; 