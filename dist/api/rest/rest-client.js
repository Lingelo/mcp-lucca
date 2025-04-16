"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestClient = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../../config");
class RestClient {
    client;
    constructor() {
        this.client = axios_1.default.create({
            baseURL: config_1.config.api.lucca.host,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${config_1.config.api.lucca.apiKey}`
            },
        });
    }
    async getUsers() {
        return (await this.client.get('/api/v3/users')).data;
    }
    async getUser(id) {
        return (await this.client.get(`/api/v3/users/${id}`)).data;
    }
}
exports.RestClient = RestClient;
