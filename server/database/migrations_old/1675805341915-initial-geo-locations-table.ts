import { MigrationInterface, QueryRunner } from "typeorm";

export class initialGeoLocationsTable1675805341915 implements MigrationInterface {
    name = 'initialGeoLocationsTable1675805341915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "geo_location" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE, "full_address_string" character varying, "latitude" double precision NOT NULL, "longitude" double precision NOT NULL, "location" geography(Point,4326) NOT NULL, CONSTRAINT "PK_fdc639c0cf46655c0d445636d8f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
        await queryRunner.query(`DROP TABLE "geo_location"`);
    }

}
