import { MigrationInterface, QueryRunner } from "typeorm";

export class updateCaseDefaultStatusToOpen1676151493506 implements MigrationInterface {
    name = 'updateCaseDefaultStatusToOpen1676151493506'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
        await queryRunner.query(`ALTER TABLE "case" ALTER COLUMN "status" SET DEFAULT 'open'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "case" ALTER COLUMN "status" SET DEFAULT 'new'`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
    }

}
