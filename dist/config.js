"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    server: {
        name: process.env.SERVER_NAME ?? 'mcp-rest-server',
        version: process.env.SERVER_VERSION ?? '1.0.0',
    },
    logs: {
        level: process.env.LOG_LEVEL ?? 'info',
    },
    api: {
        lucca: {
            host: process.env.LUCCA_HOST ?? '',
            apiKey: process.env.LUCCA_API_KEY ?? '',
        }
    }
};
