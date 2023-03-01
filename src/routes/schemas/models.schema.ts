import { FastifySchema } from 'fastify';
import { TagModel } from '../../swagger'

export namespace ModelsSchema {
    const tag = TagModel.name;
    export const updateModel: FastifySchema = {
        description: 'Endpoint to update a model',
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
                average_price: { type: 'number', minimum: 100001 },
            },
            required: ['average_price']
        },
        response: {
            200: {
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

    export const getModels: FastifySchema = {
        description: 'Endpoint to get models',
        tags: [tag],
        querystring: {
            type: 'object',
            properties: {
                greater: { type: 'number' },
                lower: { type: 'number' }
            }
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
            }
        }
    }
}