import fs from 'fs';
import path from 'path';
import * as url from 'url';
import { DataItem } from '../interfaces';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export namespace DatabaseDummyController {
    const pathDatabase = path.join(__dirname, '../../database/models.json');

    const getDataBase = (): DataItem[] => {
        const data = fs.readFileSync(pathDatabase, 'utf8');
        return JSON.parse(data || '{}');
    }

    export const getAllData = () => {
        return getDataBase();
    }
}