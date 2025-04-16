import { McpServer as McpSdkServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {logger} from "../utils/logger";
import {Tools} from "./tools";
import { config } from "../../config";

export class McpServer {
    private readonly server: McpSdkServer;
    private readonly tools: Tools;

    constructor() {
        this.server = new McpSdkServer({
            name: config.server.name,
            version: config.server.version
        });
        this.tools = new Tools(this.server);
    }

    async start() {
        logger.info("Starting MCP server");

        // Register all tools
        this.tools.registerTools();
        logger.info("Registered all tools");

        const transport = new StdioServerTransport();
        return this.server.connect(transport);
    }
}
