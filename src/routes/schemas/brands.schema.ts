import { FastifySchema } from 'fastify';
import { TagBrands } from '../../swagger';
export namespace BrandsSchema {
    const tag = TagBrands.name;
    export const getAllBrandsSchema: FastifySchema = {
        description: 'Endpoint to get all brands',
        tags: [tag],
        response: {
            200: {
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