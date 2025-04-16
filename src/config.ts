interface Config {
    server: {
        name: string,
        version: string
    },
    logs: {
        level: 'info' | 'debug' | 'warn' | 'error',
    },
    api: {
        lucca: {
            host: string,
            apiKey: string
        }
    }
}

export const config: Config = {
    server: {
        name: process.env.SERVER_NAME ?? 'mcp-rest-server',
        version: process.env.SERVER_VERSION ?? '1.0.0',
    },
    logs: {
        level: (process.env.LOG_LEVEL as 'info' | 'debug' | 'warn' | 'error') ?? 'info',
    },
    api: {
        lucca: {
            host: process.env.LUCCA_HOST ?? '',
            apiKey: process.env.LUCCA_API_KEY ?? '',
        }
    }

}
