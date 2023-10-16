"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/ping') {
        // Récupérez les en-têtes de la requête
        const headers = req.headers;
        // Envoyez les en-têtes en tant que JSON directement
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });
        res.end(JSON.stringify(headers));
    }
    else {
        // Gérez d'autres routes ici
        res.writeHead(404).end();
    }
});
const port = 3000;
server.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
