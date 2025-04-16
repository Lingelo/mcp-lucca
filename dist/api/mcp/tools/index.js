"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tools = void 0;
const rest_1 = require("../../rest");
const zod_1 = require("zod");
class Tools {
    server;
    constructor(server) {
        this.server = server;
    }
    registerTools() {
        this.registerGetUsersTool();
        this.registerGetUserTool();
    }
    registerGetUsersTool() {
        this.server.tool("getUsers", {}, async () => {
            try {
                const users = await rest_1.restClient.getUsers();
                return {
                    content: [{
                            type: "text",
                            text: JSON.stringify(users, null, 2)
                        }]
                };
            }
            catch (err) {
                const error = err;
                return {
                    content: [{
                            type: "text",
                            text: `Error: ${error.message}`
                        }],
                    isError: true
                };
            }
        });
    }
    registerGetUserTool() {
        this.server.tool("getUser", { id: zod_1.z.string().describe("The ID of the user to retrieve") }, async ({ id }) => {
            try {
                const user = await rest_1.restClient.getUser(id);
                return {
                    content: [{
                            type: "text",
                            text: JSON.stringify(user, null, 2)
                        }]
                };
            }
            catch (err) {
                const error = err;
                return {
                    content: [{
                            type: "text",
                            text: `Error: ${error.message}`
                        }],
                    isError: true
                };
            }
        });
    }
}
exports.Tools = Tools;
