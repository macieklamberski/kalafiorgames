FROM oven/bun:1-alpine
WORKDIR /home/node

COPY package.json .
COPY bun.lockb .

RUN bun install --production --frozen-lockfile

COPY . .
EXPOSE 3000
CMD ["bun", "start"]
