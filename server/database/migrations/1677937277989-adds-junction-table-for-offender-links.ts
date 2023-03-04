import { MigrationInterface, QueryRunner } from "typeorm";

export class addsJunctionTableForOffenderLinks1677937277989 implements MigrationInterface {
    name = 'addsJunctionTableForOffenderLinks1677937277989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "offender_link" ("offender_id" uuid NOT NULL, "link_id" uuid NOT NULL, CONSTRAINT "PK_3a5fc1bc964591e66342b110b1f" PRIMARY KEY ("offender_id", "link_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dc480d75f0a9c34e137a51f5af" ON "offender_link" ("offender_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_f55866d5de06a454b0c167cf21" ON "offender_link" ("link_id") `);
        await queryRunner.query(`ALTER TABLE "offender_link" ADD CONSTRAINT "FK_dc480d75f0a9c34e137a51f5afa" FOREIGN KEY ("offender_id") REFERENCES "offender"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "offender_link" ADD CONSTRAINT "FK_f55866d5de06a454b0c167cf213" FOREIGN KEY ("link_id") REFERENCES "link"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offender_link" DROP CONSTRAINT "FK_f55866d5de06a454b0c167cf213"`);
        await queryRunner.query(`ALTER TABLE "offender_link" DROP CONSTRAINT "FK_dc480d75f0a9c34e137a51f5afa"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f55866d5de06a454b0c167cf21"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dc480d75f0a9c34e137a51f5af"`);
        await queryRunner.query(`DROP TABLE "offender_link"`);
    }

}
