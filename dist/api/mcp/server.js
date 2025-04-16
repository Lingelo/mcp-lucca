"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.McpServer = void 0;
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const logger_1 = require("../utils/logger");
const tools_1 = require("./tools");
const config_1 = require("../../config");
class McpServer {
    server;
    tools;
    constructor() {
        this.server = new mcp_js_1.McpServer({
            name: config_1.config.server.name,
            version: config_1.config.server.version
        });
        this.tools = new tools_1.Tools(this.server);
    }
    async start() {
        logger_1.logger.info("Starting MCP server");
        // Register all tools
        this.tools.registerTools();
        logger_1.logger.info("Registered all tools");
        const transport = new stdio_js_1.StdioServerTransport();
        return this.server.connect(transport);
    }
}
exports.McpServer = McpServer;
