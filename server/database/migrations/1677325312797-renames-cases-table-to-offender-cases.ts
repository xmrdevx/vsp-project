import { MigrationInterface, QueryRunner } from "typeorm";

export class renamesCasesTableToOffenderCases1677325312797 implements MigrationInterface {
    name = 'renamesCasesTableToOffenderCases1677325312797'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."offender_case_status_enum" AS ENUM('new', 'investigating', 'open', 'closed')`);
        await queryRunner.query(`CREATE TYPE "public"."offender_case_visibility_enum" AS ENUM('private', 'public')`);
        await queryRunner.query(`CREATE TABLE "offender_case" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "created_by_id" uuid NOT NULL, "updated_by_id" uuid NOT NULL, "deleted_by_id" uuid, "opened_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "closed_on" TIMESTAMP WITH TIME ZONE, "status" "public"."offender_case_status_enum" NOT NULL DEFAULT 'open', "visibility" "public"."offender_case_visibility_enum" NOT NULL DEFAULT 'private', "summary" character varying, "offender_id" uuid NOT NULL, "caught_at_id" uuid, "tenant_id" uuid NOT NULL, CONSTRAINT "REL_788a000791c97a8ff686dd75ce" UNIQUE ("caught_at_id"), CONSTRAINT "PK_5b28f69696b6e90dde9f777bda4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
        await queryRunner.query(`ALTER TABLE "offender_case" ADD CONSTRAINT "FK_60e08768b530262f5444f0f4de9" FOREIGN KEY ("created_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender_case" ADD CONSTRAINT "FK_e1fc0293662dd3cc5582c2a506b" FOREIGN KEY ("updated_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender_case" ADD CONSTRAINT "FK_5ff0c7c70880188c9635402ce60" FOREIGN KEY ("deleted_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender_case" ADD CONSTRAINT "FK_978358d2f502216c6c74fe0af92" FOREIGN KEY ("offender_id") REFERENCES "offender"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender_case" ADD CONSTRAINT "FK_788a000791c97a8ff686dd75ce6" FOREIGN KEY ("caught_at_id") REFERENCES "geo_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender_case" ADD CONSTRAINT "FK_703e9b8544f84d4559451abc976" FOREIGN KEY ("tenant_id") REFERENCES "app_tenant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE "case"`);
        await queryRunner.query(`DROP TYPE "public"."case_visibility_enum"`);
        await queryRunner.query(`DROP TYPE "public"."case_status_enum"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop new table
        await queryRunner.query(`ALTER TABLE "offender_case" DROP CONSTRAINT "FK_703e9b8544f84d4559451abc976"`);
        await queryRunner.query(`ALTER TABLE "offender_case" DROP CONSTRAINT "FK_788a000791c97a8ff686dd75ce6"`);
        await queryRunner.query(`ALTER TABLE "offender_case" DROP CONSTRAINT "FK_978358d2f502216c6c74fe0af92"`);
        await queryRunner.query(`ALTER TABLE "offender_case" DROP CONSTRAINT "FK_5ff0c7c70880188c9635402ce60"`);
        await queryRunner.query(`ALTER TABLE "offender_case" DROP CONSTRAINT "FK_e1fc0293662dd3cc5582c2a506b"`);
        await queryRunner.query(`ALTER TABLE "offender_case" DROP CONSTRAINT "FK_60e08768b530262f5444f0f4de9"`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
        await queryRunner.query(`DROP TABLE "offender_case"`);
        await queryRunner.query(`DROP TYPE "public"."offender_case_visibility_enum"`);
        await queryRunner.query(`DROP TYPE "public"."offender_case_status_enum"`);

        // Readd old cases table
        await queryRunner.query(`CREATE TYPE "public"."case_status_enum" AS ENUM('new', 'investigating', 'open', 'closed')`);
        await queryRunner.query(`CREATE TYPE "public"."case_visibility_enum" AS ENUM('private', 'public')`);
        await queryRunner.query(`CREATE TABLE "case" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "created_by_id" uuid NOT NULL, "updated_by_id" uuid NOT NULL, "deleted_by_id" uuid, "opened_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "closed_on" TIMESTAMP WITH TIME ZONE, "status" "public"."offender_case_status_enum" NOT NULL DEFAULT 'open', "visibility" "public"."offender_case_visibility_enum" NOT NULL DEFAULT 'private', "summary" character varying, "offender_id" uuid NOT NULL, "caught_at_id" uuid, "tenant_id" uuid NOT NULL, CONSTRAINT "REL_788a000791c97a8ff686dd75ce" UNIQUE ("caught_at_id"), CONSTRAINT "PK_5b28f69696b6e90dde9f777bda4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_60e08768b530262f5444f0f4de9" FOREIGN KEY ("created_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_e1fc0293662dd3cc5582c2a506b" FOREIGN KEY ("updated_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_5ff0c7c70880188c9635402ce60" FOREIGN KEY ("deleted_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_978358d2f502216c6c74fe0af92" FOREIGN KEY ("offender_id") REFERENCES "offender"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_788a000791c97a8ff686dd75ce6" FOREIGN KEY ("caught_at_id") REFERENCES "geo_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_703e9b8544f84d4559451abc976" FOREIGN KEY ("tenant_id") REFERENCES "app_tenant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
