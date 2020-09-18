import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";

import quizzRouter from "./routes/quizz.ts";

const app = new Application();
const port: number = 1313;

app.use(oakCors());
app.use(quizzRouter.routes());
app.use(quizzRouter.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log(`${yellow("Listening on:")} ${green(url)}`);
});

await app.listen({ port });
