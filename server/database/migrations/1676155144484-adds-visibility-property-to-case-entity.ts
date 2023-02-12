import { MigrationInterface, QueryRunner } from "typeorm";

export class addsVisibilityPropertyToCaseEntity1676155144484 implements MigrationInterface {
    name = 'addsVisibilityPropertyToCaseEntity1676155144484'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."case_visibility_enum" AS ENUM('private', 'public')`);
        await queryRunner.query(`ALTER TABLE "case" ADD "visibility" "public"."case_visibility_enum" NOT NULL DEFAULT 'private'`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
        await queryRunner.query(`ALTER TABLE "case" ALTER COLUMN "status" SET DEFAULT 'open'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "case" ALTER COLUMN "status" SET DEFAULT 'new'`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
        await queryRunner.query(`ALTER TABLE "case" DROP COLUMN "visibility"`);
        await queryRunner.query(`DROP TYPE "public"."case_visibility_enum"`);
    }

}
