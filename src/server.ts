import {McpServer} from "./api/mcp";
import {logger} from "./api/utils/logger";
import {config} from "./config";

async function main() {
  try {
    logger.info("Starting MCP server");
    logger.info(`Using REST API endpoint: ${config.api.lucca.host}`);
    
    const mcpServer = new McpServer();
    await mcpServer.start();
    
    logger.info("MCP server started successfully");
    
    // Handle graceful shutdown
    process.on("SIGINT", () => {
      logger.info("Shutting down MCP server");
      process.exit(0);
    });
    
    process.on("SIGTERM", () => {
      logger.info("Shutting down MCP server");
      process.exit(0);
    });
  } catch (error) {
    logger.error("Failed to start MCP server", error);
    process.exit(1);
  }
}

main();