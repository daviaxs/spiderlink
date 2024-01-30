import fastifyCookie from "@fastify/cookie";
import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import { env } from "./env";

export const app = fastify()

app.register(fastifyCors, {
  origin: env.FRONT_END_URL,
  credentials: true,
})

app.register(fastifyCookie)