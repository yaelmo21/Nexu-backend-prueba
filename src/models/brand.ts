import mongoose, { Model, Schema } from 'mongoose';
import { Brand } from '../interfaces';



export interface IBrand extends Brand { };

const brandSchema = new Schema({
    name: { type: String, required: true, unique: true },
}, {
    timestamps: true,
});

export const brandModel: Model<IBrand> = mongoose.models.Brand || mongoose.model<IBrand>('Brand', brandSchema);
export default brandModel;