import { FastifySchema } from 'fastify';
import { TagBrands, errorResponses } from '../../swagger';
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
            },
            ...errorResponses
        }
    }

    export const getModelsByBrand: FastifySchema = {
        description: 'Endpoint to get all models by brand name or id',
        tags: [tag],
        response: {
            200: {
                type: 'object',
                properties: {
                    ok: { type: 'boolean' },
                    models: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                id: { type: 'number' },
                                name: { type: 'string' },
                                average_price: { type: 'number' },
                                '_id': { type: 'string' }
                            }
                        }
                    }
                }
            },
            ...errorResponses
        }
    }

    export const createBrand: FastifySchema = {
        description: 'Endpoint to create a brand',
        tags: [tag],
        body: {
            type: 'object',
            properties: {
                name: { type: 'string' },
            },
            required: ['name']
        },
        response: {
            201: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    name: { type: 'string' },
                    average_price: { type: 'number' },
                    '_id': { type: 'string' }
                }
            }
        }

    }
}