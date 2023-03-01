import { FastifySchema } from 'fastify';
import { TagDatabase } from '../../swagger';

export namespace DatabaseSchema {
    const tag = TagDatabase.name;
    export const updateDataDummySchema: FastifySchema = {
        description: 'Endpoint to remove all data and create new data dummy',
        tags: [tag],
        response: {
            201: {
                type: 'object',
                properties: {
                    ok: { type: 'boolean' },
                    data: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                name: { type: 'string' },
                                _id: { type: 'string' },
                                createdAt: { type: 'string' },
                                updatedAt: { type: 'string' },
                                models: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        properties: {
                                            _id: { type: 'string' },
                                            name: { type: 'string' },
                                            average_price: { type: 'number' },
                                            createdAt: { type: 'string' },
                                            updatedAt: { type: 'string' }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
        }
    }
}