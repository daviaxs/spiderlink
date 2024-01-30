import { app } from "./app";
import { env } from "./env";

app.listen({
  host: "0.0.0.0",
  port: env.PORT,
})
.then(() => {
  env.NODE_ENV === "dev" && console.log(`Server listening on http://localhost:${env.PORT}`)
  env.NODE_ENV === "prod" && console.log(`Server ready`)
})