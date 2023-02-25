import { MigrationInterface, QueryRunner } from "typeorm";

export class updatesOffendersToHaveJunctionTableWithComments1677332244670 implements MigrationInterface {
    name = 'updatesOffendersToHaveJunctionTableWithComments1677332244670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "offender_comment" ("offender_id" uuid NOT NULL, "comment_id" uuid NOT NULL, CONSTRAINT "PK_420bde89d1c238ed8b6d9c3babb" PRIMARY KEY ("offender_id", "comment_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e1e0c9104fcbf774ae6671c8ef" ON "offender_comment" ("offender_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_0d070c5100ef07ac25809e46f5" ON "offender_comment" ("comment_id") `);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
        await queryRunner.query(`ALTER TABLE "offender_comment" ADD CONSTRAINT "FK_e1e0c9104fcbf774ae6671c8efe" FOREIGN KEY ("offender_id") REFERENCES "offender"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "offender_comment" ADD CONSTRAINT "FK_0d070c5100ef07ac25809e46f54" FOREIGN KEY ("comment_id") REFERENCES "comment"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offender_comment" DROP CONSTRAINT "FK_0d070c5100ef07ac25809e46f54"`);
        await queryRunner.query(`ALTER TABLE "offender_comment" DROP CONSTRAINT "FK_e1e0c9104fcbf774ae6671c8efe"`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0d070c5100ef07ac25809e46f5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e1e0c9104fcbf774ae6671c8ef"`);
        await queryRunner.query(`DROP TABLE "offender_comment"`);
    }

}
