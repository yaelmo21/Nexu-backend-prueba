import { FastifySchema } from 'fastify';
import { errorResponses } from '../../swagger';

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
            ...errorResponses
        }
    }
}