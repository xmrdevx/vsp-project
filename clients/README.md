# VSP Clients

There are currently 2 Angular client for this project.  One is a public facing application that the general public will use.  The second is an Admin application.

## Dependencies

1. [NodeJS V16 or greater](https://nodejs.org/en/) OR use NVM [Linux/macOS](https://github.com/nvm-sh/nvm) | [Windows](https://github.com/coreybutler/nvm-windows)
2. [Angular CLI](https://angular.io/cli)
3. [Server project running locally](https://github.com/xmrdevx/vsp-project/tree/master/server)
   

### Running
1. Open terminal window.
2. Navigate to the clients directory from the root of the project. `cd clients`.
3. Install all Node dependencies `npm install`
4. Build project libraries `npm run build:libs` (these are shared libraries used between client applications)
5. To start a client run `npm run start:<application-name>` example `npm run start:client` or `npm run start:admin`.

Additional scripts to run can be seen in the `package.json`'s scripts section.
