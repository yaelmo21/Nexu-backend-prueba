import mongoose, { Model, Schema } from 'mongoose';
import { Brand } from '../interfaces';


export interface IBrand extends Brand { };

const brandSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    average_price: { type: Number, required: true },
    brand_name: { type: String, required: true, },
});

export const BrandModel: Model<IBrand> = mongoose.model('Brand', brandSchema);

export default BrandModel;