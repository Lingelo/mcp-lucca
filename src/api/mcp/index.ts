import {McpServer} from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {logger} from "../utils/logger";


export class McpClient {
    private readonly server: McpServer
    constructor() {
        this.server = new McpServer({
            name: "mcp-server",
            version: "1.0.0"
        })
    }

    async connect() {
        logger.info("Connecting to MCP server")
        const transport = new StdioServerTransport()
        return this.server.connect(transport)
    }
}



