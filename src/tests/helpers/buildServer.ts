import { Server } from '../../server'


const config = () => {
    return {}
}

const build = () => {
    const app = Server.instance.app;
    beforeAll(async () => {
        await app.ready();
    });
    afterAll(async () => app.close());
    return app;
}

export { config, build }