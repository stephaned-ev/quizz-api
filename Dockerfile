FROM hayd/alpine-deno:1.3.3

WORKDIR /app

COPY . .

ENV PORT=1313

EXPOSE 1212

CMD ["deno", "run", "--allow-net", "--allow-write", "--allow-read", "--allow-plugin", "--allow-env", "--unstable", "app.ts"]
