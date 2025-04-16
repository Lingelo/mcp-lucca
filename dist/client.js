"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_1 = require("./api/mcp");
const logger_1 = require("./api/utils/logger");
const config_1 = require("./config");
async function main() {
    try {
        logger_1.logger.info("Starting MCP client");
        logger_1.logger.info(`Using REST API endpoint: ${config_1.config.api.lucca.host}`);
        const mcpClient = new mcp_1.McpClient();
        await mcpClient.connect();
        // Get server metadata
        const meta = await mcpClient.getServerMeta();
        logger_1.logger.info("Server metadata", meta);
        // Get all users
        try {
            const users = await mcpClient.getUsers();
            logger_1.logger.info(`Retrieved ${users.length} users`);
            console.log(users);
        }
        catch (err) {
            logger_1.logger.error("Failed to get users");
        }
        // Get a specific user (replace '1' with an actual user ID)
        try {
            const userId = '1';
            const user = await mcpClient.getUser(userId);
            logger_1.logger.info(`Retrieved user with ID ${userId}`);
            console.log(user);
        }
        catch (err) {
            logger_1.logger.error("Failed to get user");
        }
        // Handle graceful shutdown
        process.on("SIGINT", () => {
            logger_1.logger.info("Shutting down MCP client");
            process.exit(0);
        });
        process.on("SIGTERM", () => {
            logger_1.logger.info("Shutting down MCP client");
            process.exit(0);
        });
    }
    catch (error) {
        logger_1.logger.error("Failed to start MCP client", error);
        process.exit(1);
    }
}
main();
