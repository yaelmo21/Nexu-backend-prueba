import fastify, { FastifyInstance } from 'fastify';
import fastifyFormbody from '@fastify/formbody';
import fastifyCors from '@fastify/cors';
import fastifyHelmet from '@fastify/helmet';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastifyHttpErrorsEnhanced from 'fastify-http-errors-enhanced';
import { HOST, HOST_DOMAIN, NODE_ENV, PORT, VERSION } from '../environment';
import routes from '../routes';
import { tags } from '../swagger';

export default class Server {
    private static _instance: Server;
    public app: FastifyInstance;

    private constructor() {
        this.app = this.init();
    }

    private init() {
        const server = fastify();
        server.register(fastifyFormbody);
        server.register(fastifyHttpErrorsEnhanced);
        server.register(fastifyHelmet, {
            crossOriginResourcePolicy: false,
        });
        server.register(fastifyCors);
        server.register(fastifySwagger, {
            swagger: {
                info: {
                    title: 'Nexu API',
                    description: 'Nexu API models and brands cars',
                    version: VERSION
                },
                externalDocs: {
                    url: 'https://swagger.io',
                    description: 'Find more info here'
                },
                host: HOST_DOMAIN,
                schemes: NODE_ENV === 'development' ? ['http'] : ['https'],
                basePath: '/',
                consumes: ['application/json'],
                tags: tags
            }
        });
        server.register(fastifySwaggerUi, {
            routePrefix: '/docs',
        });
        server.register(routes);

        server.addHook('preSerialization', (request, reply, payload, done) => {
            const body = JSON.parse(JSON.stringify(payload));
            done(null, body);
        });
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