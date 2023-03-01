import fs from 'fs';
import path from 'path';
import * as url from 'url';
import { Brand } from '../interfaces';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export namespace DatabaseDummyController {
    const pathDatabase = path.join(__dirname, '../../database/models.json');

    const getDataBase = (): Brand[] => {
        const data = fs.readFileSync(pathDatabase, 'utf8');
        return JSON.parse(data || '{}');
    }

    export const getAllData = () => {
        return getDataBase();
    }
}