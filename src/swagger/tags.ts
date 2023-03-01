import { OpenAPIV2 } from 'openapi-types';

export const TagModel = { name: 'models', description: 'Models Cars' };
export const TagBrands = { name: 'brands', description: 'brands Cars' };
export const TagDatabase = { name: 'database', description: 'database Cars' };

export const tags: OpenAPIV2.TagObject[] = [
    TagModel,
    TagBrands,
    TagDatabase
]