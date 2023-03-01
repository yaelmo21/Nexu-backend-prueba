import { connectDb } from './database';
import { Server } from './server'

const main = async () => {
    const hostServer = await Server.instance.start();
    await connectDb();
    console.log(`Server running at ${hostServer}`);
}

main();