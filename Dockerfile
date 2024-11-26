FROM oven/bun:1-alpine

COPY package.json .
COPY bun.lockb .

RUN bun install --production --frozen-lockfile

COPY . .
EXPOSE 3000
CMD ["bun", "start"]
