# VSP Server

This project contains the API gateway with all microservices for the backend.

## Dependencies

1. [NodeJS V16 or greater](https://nodejs.org/en/) OR use NVM [Linux/macOS](https://github.com/nvm-sh/nvm) | [Windows](https://github.com/coreybutler/nvm-windows)
2. [NestJS CLI](https://docs.nestjs.com/cli/overview)
3. [Database Project running in docker](https://github.com/xmrdevx/vsp-project/tree/master/database)
4. [Cache project running in docker](https://github.com/xmrdevx/vsp-project/tree/master/cache)

## Running

Server project has monorepo structure.  All projects within the server projects share the same `package.json` and node modules dependencies.  There are `apps` and `lib`.  The `apps` directory consist of services/microservices and the `libs` directory consists of sharebale module/code between `apps`.

1. First install dependencies.  In a terminal navigate to the server directory and run `npm run install`.  This will create a `node_modules` directory with all you dependencies.
2. In the root of the `server` directory there is also a `database` directory which contains all migrations scripts to scaffold a new database for the backend.  Before you can run the migrations make sure you have a instance of the `database` project from the root of the repo running in a docker container.  Then you can run `npm run db:migrations:run:dev`.  You should now have a fresh, empty database.
3. Running the services follows the same command pattern `npm run start:dev:<service-name>`.  So to start the api gateway you can run `npm run start:dev:gateway`.  To start the identity service it would be `npm run start:dev:identity`.
   1. If you're not sure of a command you can view the `package.json` file's `scripts` section which will list all the commands you can run.

## Migrations

Project uses [TypeORM](https://typeorm.io/) to manage database a schema changes. Migrations are store in `database/migrartions` and entites are stored in `libs/common/src/entities`.

Migrations need to be create when modifying or adding an entity.  To generate a new migration you can run `npm run db:migration:generate -- ./database/migrations/<name of your migrations>`.  This will discover the change and additions that need to be made to the database to keep the entities and schema in sync.

After you generate a new migration you can apply the changes with `npm run db:migration:run:dev`.  If you need to revert the last applied migration you can run `npm run db:revert:dev`.

For additional information on db/migration commands you can reference the `package.json` file scripts section.
