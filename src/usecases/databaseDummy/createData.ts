import { DatabaseDummyController } from '../../controllers';
import { Brand } from '../../models';
import { deleteAllData } from './';
export const createData = async () => {
    await deleteAllData();
    const brands = DatabaseDummyController.getAllData();
    const brandsDb = await Brand.insertMany(brands);
    return brandsDb;
}