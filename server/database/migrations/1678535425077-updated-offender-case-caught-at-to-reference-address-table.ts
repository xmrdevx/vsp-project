import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedOffenderCaseCaughtAtToReferenceAddressTable1678535425077 implements MigrationInterface {
    name = 'updatedOffenderCaseCaughtAtToReferenceAddressTable1678535425077'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offender_case" DROP CONSTRAINT "FK_788a000791c97a8ff686dd75ce6"`);
        await queryRunner.query(`ALTER TABLE "offender_case" ADD CONSTRAINT "FK_788a000791c97a8ff686dd75ce6" FOREIGN KEY ("caught_at_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offender_case" DROP CONSTRAINT "FK_788a000791c97a8ff686dd75ce6"`);
        await queryRunner.query(`ALTER TABLE "offender_case" ADD CONSTRAINT "FK_788a000791c97a8ff686dd75ce6" FOREIGN KEY ("caught_at_id") REFERENCES "geo_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
