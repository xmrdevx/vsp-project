#!/bin/sh

# Run Migrations
cd ../server && npm run db:migration:run:dev
