import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedIdentityEntitiesMakingSomeColumnsNullable1676895276237 implements MigrationInterface {
    name = 'updatedIdentityEntitiesMakingSomeColumnsNullable1676895276237'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
        await queryRunner.query(`ALTER TABLE "offender" ALTER COLUMN "avatar_url" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "offender" ALTER COLUMN "summary" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offender" ALTER COLUMN "summary" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "offender" ALTER COLUMN "avatar_url" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
    }

}
