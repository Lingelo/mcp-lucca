"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_1 = require("./api/mcp");
const logger_1 = require("./api/utils/logger");
const config_1 = require("./config");
async function main() {
    try {
        logger_1.logger.info("Starting MCP server");
        logger_1.logger.info(`Using REST API endpoint: ${config_1.config.api.lucca.host}`);
        const mcpServer = new mcp_1.McpServer();
        await mcpServer.start();
        logger_1.logger.info("MCP server started successfully");
        // Handle graceful shutdown
        process.on("SIGINT", () => {
            logger_1.logger.info("Shutting down MCP server");
            process.exit(0);
        });
        process.on("SIGTERM", () => {
            logger_1.logger.info("Shutting down MCP server");
            process.exit(0);
        });
    }
    catch (error) {
        logger_1.logger.error("Failed to start MCP server", error);
        process.exit(1);
    }
}
main();
