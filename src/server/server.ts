import fastify, { FastifyInstance } from 'fastify';
import { HOST, PORT } from '../environment';

export default class Server {
    private static _instance: Server;
    public app: FastifyInstance;

    private constructor() {
        this.app = this.init();
    }

    private init() {
        const server = fastify();
        return server;
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    public start(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.app.listen({ port: PORT, host: HOST }, (err, address) => {
                if (err) reject(err);
                resolve(address);
            });
        })
    }
}