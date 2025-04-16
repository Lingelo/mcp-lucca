# MCP-REST

Un serveur et client MCP (Model Context Protocol) qui expose des API REST à travers des outils MCP.

## Description

Ce projet utilise le SDK MCP pour créer un serveur qui expose des API REST comme des outils accessibles via le protocole MCP. Il comprend également un client TypeScript pour appeler ces outils.

## Architecture

Le projet est structuré en deux parties principales :

1. **Serveur MCP** : Expose des outils pour accéder aux API REST
   - `src/server.ts` : Point d'entrée du serveur
   - `src/api/mcp/server.ts` : Implémentation du serveur MCP
   - `src/api/mcp/tools/index.ts` : Définition des outils MCP

2. **Client MCP** : Permet d'appeler les outils exposés par le serveur
   - `src/client.ts` : Point d'entrée du client
   - `src/api/mcp/client.ts` : Implémentation du client MCP

3. **Client REST** : Utilisé par le serveur MCP pour appeler les API REST
   - `src/api/rest/rest-client.ts` : Client REST basé sur Axios
   - `src/api/rest/types/user.d.ts` : Types TypeScript pour les données REST

## Outils MCP disponibles

- **getUsers** : Récupère tous les utilisateurs du système
- **getUser** : Récupère un utilisateur par son ID

## Installation

```bash
# Installer les dépendances
yarn install
```

## Configuration

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```
API_HOST=https://votre-api-lucca.com
```

## Utilisation

### Construire le projet

```bash
yarn build
```

### Démarrer le serveur MCP

```bash
yarn server
```

### Démarrer le client MCP

```bash
yarn client
```

## Technologies utilisées

- TypeScript
- Node.js
- MCP SDK (@modelcontextprotocol/sdk)
- Axios pour les appels HTTP
- Winston pour la journalisation
- Zod pour la validation des schémas

## Licence

MIT