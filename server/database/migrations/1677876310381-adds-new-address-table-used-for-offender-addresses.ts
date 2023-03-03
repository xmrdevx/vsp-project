import { MigrationInterface, QueryRunner } from "typeorm";

export class addsNewAddressTableUsedForOffenderAddresses1677876310381 implements MigrationInterface {
    name = 'addsNewAddressTableUsedForOffenderAddresses1677876310381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "street" character varying, "street2" character varying, "city" character varying, "state" character varying, "zip" character varying, "country" character varying, "latitude" double precision DEFAULT NULL, "longitude" double precision DEFAULT NULL, "location" geography(Point,4326) DEFAULT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
