# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Docker

- Build docker container for develop

```bash
docker build -t front .
```

- Run docker container

```bash
docker run -it -p 3000:3000 front
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Init project on VPS

1. Install docker and docker compose to VPS

2. Create /project folder

```bash
mkdir project
```

```bash
cd project
```

3. Create docker-compose.yml file

```bash
touch docker-compose.yml
```

4. Create .env file and set variables:

```bash
touch .env
```

```bash
GEOIPUPDATE_ACCOUNT_ID=***
GEOIPUPDATE_LICENSE_KEY=***
LETSENCRYPT_EMAIL=main@mail.com
LETSENCRYPT_HOST=example.com
VIRTUAL_HOST=example.com
```

5. Run docker-compose.yml

```bash
docker compose up -d
```
