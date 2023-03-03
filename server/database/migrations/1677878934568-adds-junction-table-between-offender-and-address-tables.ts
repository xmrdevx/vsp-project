import { MigrationInterface, QueryRunner } from "typeorm";

export class addsJunctionTableBetweenOffenderAndAddressTables1677878934568 implements MigrationInterface {
    name = 'addsJunctionTableBetweenOffenderAndAddressTables1677878934568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "offender_address" ("offender_id" uuid NOT NULL, "address_id" uuid NOT NULL, CONSTRAINT "PK_38a57daaece860d89bf1cf1ba1c" PRIMARY KEY ("offender_id", "address_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_057795d5b0005fb70913f8f7d0" ON "offender_address" ("offender_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_9aea663b035b593f3b5d8ddbd4" ON "offender_address" ("address_id") `);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "location" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "offender_address" ADD CONSTRAINT "FK_057795d5b0005fb70913f8f7d09" FOREIGN KEY ("offender_id") REFERENCES "offender"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "offender_address" ADD CONSTRAINT "FK_9aea663b035b593f3b5d8ddbd42" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offender_address" DROP CONSTRAINT "FK_9aea663b035b593f3b5d8ddbd42"`);
        await queryRunner.query(`ALTER TABLE "offender_address" DROP CONSTRAINT "FK_057795d5b0005fb70913f8f7d09"`);
        await queryRunner.query(`ALTER TABLE "address" ALTER COLUMN "location" SET DEFAULT NULL`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9aea663b035b593f3b5d8ddbd4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_057795d5b0005fb70913f8f7d0"`);
        await queryRunner.query(`DROP TABLE "offender_address"`);
    }

}
