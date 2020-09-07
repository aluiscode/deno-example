import { Application, Router } from 'https://deno.land/x/oak@v6.1.0/mod.ts';
import { sponsorApi } from './routes/sponsorApi.ts';
import { config } from './config/index.ts';

const app:Application = new Application;

sponsorApi(app);

console.log(`El servidor a iniciado en http://localhost:${ config.port }`);
await app.listen({port: config.port});
