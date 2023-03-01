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
                                name: { type: 'string' },
                                average_price: { type: 'number' },
                                brand_name: { type: 'string' },
                                _id: { type: 'string' },
                                createdAt: { type: 'string' },
                                updatedAt: { type: 'string' }
                            }
                        }
                    }
                }
            },
        }
    }

    export const getModelsByBrand: FastifySchema = {
        description: 'Endpoint to get all models by brand name or id',
        tags: [tag],
        params: {
            type: 'object',
            properties: {
                id: { type: 'string' }
            },
        },
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
                                name: { type: 'string' },
                                average_price: { type: 'number' },
                                _id: { type: 'string' },
                                createdAt: { type: 'string' },
                                updatedAt: { type: 'string' }
                            }
                        }
                    }
                }
            },
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
                    ok: { type: 'boolean' },
                    brand: {
                        type: 'object',
                        properties: {
                            name: { type: 'string' },
                            _id: { type: 'string' },
                            createdAt: { type: 'string' },
                            updatedAt: { type: 'string' }
                        }
                    }
                }
            }
        }
    }

    export const createModel: FastifySchema = {
        description: 'Endpoint to create a model by brand name or id',
        tags: [tag],
        params: {
            type: 'object',
            properties: {
                id: { type: 'string' }
            },
        },
        body: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                average_price: { type: 'number', minimum: 100001 },
            },
            required: ['name']
        },
        response: {
            201: {
                type: 'object',
                properties: {
                    ok: { type: 'boolean' },
                    model: {
                        type: 'object',
                        properties: {
                            name: { type: 'string' },
                            average_price: { type: 'number' },
                            _id: { type: 'string' },
                            createdAt: { type: 'string' },
                            updatedAt: { type: 'string' }
                        }
                    }
                }
            },
        }
    }
}