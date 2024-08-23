## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Installation


```bash
$ npm install
```

## Set up env
```bash
$ cp .env.example .env
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Link SWAGGER
http://localhost:3000/api

## Run Docker
```bash
$ docker build -t nestjs-docker .
$ docker-compose -f docker-compose.yml up --build -d
