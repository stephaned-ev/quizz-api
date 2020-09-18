FROM hayd/alpine-deno:1.3.3

WORKDIR /app

ADD . /app

COPY . .

ENV PORT=8000

EXPOSE 8000

CMD ["deno", "run", "--allow-net", "--allow-write", "--allow-read", "--allow-plugin", "--allow-env", "--unstable", "app.ts"]
