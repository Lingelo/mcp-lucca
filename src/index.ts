import {McpClient} from "./api/mcp";
import {logger} from "./api/utils/logger";

new McpClient().connect().then(() => logger.info('Server démarré')).catch(console.error);
