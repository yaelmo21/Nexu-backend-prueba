import { Server } from './server'

(async () => {
    const hostServer = await Server.instance.start();
    console.log(`Server running at ${hostServer}`);
})()