import { Brand, Model } from '../../models';

export const deleteAllData = async () => {
    await Model.deleteMany({});
    await Brand.deleteMany({});
}