import {restClient} from "../../rest";
import {User} from "../../rest/types/user";
import { McpServer as McpSdkServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {z} from 'zod';

export class Tools {
    private readonly server: McpSdkServer

    constructor(server: McpSdkServer) {
        this.server = server
    }

    registerTools() {
        this.registerGetUsersTool();
        this.registerGetUserTool();
    }

    private registerGetUsersTool() {
        this.server.tool(
            "getUsers",
            {},
            async () => {
                try {
                    const users = await restClient.getUsers();
                    return {
                        content: [{
                            type: "text",
                            text: JSON.stringify(users, null, 2)
                        }]
                    };
                } catch (err) {
                    const error = err as Error;
                    return {
                        content: [{
                            type: "text",
                            text: `Error: ${error.message}`
                        }],
                        isError: true
                    };
                }
            }
        );
    }

    private registerGetUserTool() {
        this.server.tool(
            "getUser",
            { id: z.string().describe("The ID of the user to retrieve") },
            async ({ id }: { id: string }) => {
                try {
                    const user = await restClient.getUser(id);
                    return {
                        content: [{
                            type: "text",
                            text: JSON.stringify(user, null, 2)
                        }]
                    };
                } catch (err) {
                    const error = err as Error;
                    return {
                        content: [{
                            type: "text",
                            text: `Error: ${error.message}`
                        }],
                        isError: true
                    };
                }
            }
        );
    }
}
