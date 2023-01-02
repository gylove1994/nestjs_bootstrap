<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center"><b>A out-of-box repository for Nest framework</b></p>

## Description

A repository have some basic but annoying settings for a new Nestjs project.

## What included ?

- postgresSQL database configuration
- TypeORM configuration
- Env config configuration
- WinstonLogger configuration
- microservice configuration

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# setting up database
$ docker-compose up -d

# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

[MIT license](LICENSE)
