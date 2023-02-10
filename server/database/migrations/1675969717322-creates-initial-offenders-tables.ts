import { MigrationInterface, QueryRunner } from "typeorm";

export class createsInitialOffendersTables1675969717322 implements MigrationInterface {
    name = 'createsInitialOffendersTables1675969717322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."case_status_enum" AS ENUM('new', 'investigating', 'open', 'closed')`);
        await queryRunner.query(`CREATE TABLE "case" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE, "opened_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "closed_on" TIMESTAMP WITH TIME ZONE, "status" "public"."case_status_enum" NOT NULL DEFAULT 'new', "summary" character varying, "offender_id" uuid NOT NULL, "caught_at_id" uuid, "tenant_id" uuid NOT NULL, "created_by_id" uuid NOT NULL, CONSTRAINT "REL_ae23a0e3426c727e394579d487" UNIQUE ("caught_at_id"), CONSTRAINT "PK_a1b20a2aef6fc438389d2c4aca0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "offender" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "avatar_url" character varying NOT NULL, "summary" character varying NOT NULL, CONSTRAINT "PK_1feac0d905ee30bec1e5c3c9c9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_0e06c12eaf98559acc1fe7463f2" FOREIGN KEY ("offender_id") REFERENCES "offender"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_ae23a0e3426c727e394579d487e" FOREIGN KEY ("caught_at_id") REFERENCES "geo_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_666536ea7ed0dc024fbdb12e262" FOREIGN KEY ("tenant_id") REFERENCES "app_tenant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_afccf0ab0d520e52a920b387f16" FOREIGN KEY ("created_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "case" DROP CONSTRAINT "FK_afccf0ab0d520e52a920b387f16"`);
        await queryRunner.query(`ALTER TABLE "case" DROP CONSTRAINT "FK_666536ea7ed0dc024fbdb12e262"`);
        await queryRunner.query(`ALTER TABLE "case" DROP CONSTRAINT "FK_ae23a0e3426c727e394579d487e"`);
        await queryRunner.query(`ALTER TABLE "case" DROP CONSTRAINT "FK_0e06c12eaf98559acc1fe7463f2"`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
        await queryRunner.query(`DROP TABLE "offender"`);
        await queryRunner.query(`DROP TABLE "case"`);
        await queryRunner.query(`DROP TYPE "public"."case_status_enum"`);
    }

}
