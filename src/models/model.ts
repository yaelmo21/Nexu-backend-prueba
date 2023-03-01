import mongoose, { Model, Schema } from 'mongoose';
import { Model as ModelInterface } from '../interfaces';


export interface IModel extends ModelInterface { };

const modelSchema = new Schema({
    name: { type: String, required: true },
    average_price: { type: Number, default: 0 },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
}, {
    timestamps: true,
});

export const modelStructure: Model<IModel> = mongoose.models.Model || mongoose.model<IModel>('Model', modelSchema);
export default modelStructure;