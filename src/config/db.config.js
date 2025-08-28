import mongoose from 'mongoose';
import { ATLAS_DB_URL, NODE_ENV } from './server.config.js';


export default async function connectToDB() {
    try {
        if (NODE_ENV == 'development') {
            await mongoose.connect(ATLAS_DB_URL);
        }
    }
    catch {
        console.log('Unable to connect with the Database');
        console.log(error);
    }

}

