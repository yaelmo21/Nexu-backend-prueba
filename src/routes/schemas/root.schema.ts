import { FastifySchema } from 'fastify';

export namespace RootSchemas {
    export const rootSchema: FastifySchema = {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    }
                }
            },
        }
    }
}