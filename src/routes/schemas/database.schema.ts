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
                    brands: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                id: { type: 'number' },
                                name: { type: 'string' },
                                average_price: { type: 'number' },
                                brand_name: { type: 'string' },
                                '_id': { type: 'string' }
                            }
                        }
                    }
                }
            }
        }
    }
}