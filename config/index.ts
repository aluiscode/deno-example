import { load } from "https://deno.land/x/denv@2.0.0/mod.ts";
await load('.env');

interface Config {
  port: number;
  dbUser: string;
  dbPassword: string;
  dbName: string;
  dbHost: string;
  dbDialect: string;
  dbPort: number;
}

export const config: Config = {
  port: Number(Deno.env.get('PORT')),
  dbUser: String(Deno.env.get('DB_USER')),
  dbPassword: String(Deno.env.get('DB_PASSWORD')),
  dbName: String(Deno.env.get('DB_NAME')),
  dbHost: String(Deno.env.get('DB_HOST')),
  dbDialect: String(Deno.env.get('DB_DIALECT')),
  dbPort: Number(Deno.env.get('DB_PORT')),
};
