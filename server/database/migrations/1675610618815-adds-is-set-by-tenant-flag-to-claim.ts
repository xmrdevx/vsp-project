import { MigrationInterface, QueryRunner } from "typeorm";

export class addsIsSetByTenantFlagToClaim1675610618815 implements MigrationInterface {
    name = 'addsIsSetByTenantFlagToClaim1675610618815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_claim" ADD "is_set_by_tenant" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
        await queryRunner.query(`ALTER TABLE "app_claim" DROP COLUMN "is_set_by_tenant"`);
    }

}
