"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.McpClient = void 0;
const mcp_js_1 = require("@modelcontextprotocol/sdk/client/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/client/stdio.js");
const logger_1 = require("../utils/logger");
class McpClient {
    client;
    constructor() {
        this.client = new mcp_js_1.McpClient();
    }
    async connect() {
        logger_1.logger.info('Connecting to MCP server as client');
        const transport = new stdio_js_1.StdioClientTransport();
        await this.client.connect(transport);
        logger_1.logger.info('Connected to MCP server');
        return this.client;
    }
    async getServerMeta() {
        const meta = await this.client.meta();
        return meta;
    }
    async getUsers() {
        try {
            logger_1.logger.info('Fetching users from MCP server');
            const result = await this.client.tools.getUsers();
            return JSON.parse(result.content[0].text);
        }
        catch (err) {
            const error = err;
            logger_1.logger.error(`Error fetching users: ${error.message}`);
            throw error;
        }
    }
    async getUser(id) {
        try {
            logger_1.logger.info(`Fetching user with ID ${id} from MCP server`);
            const result = await this.client.tools.getUser({ id });
            return JSON.parse(result.content[0].text);
        }
        catch (err) {
            const error = err;
            logger_1.logger.error(`Error fetching user: ${error.message}`);
            throw error;
        }
    }
}
exports.McpClient = McpClient;
