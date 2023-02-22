import { MigrationInterface, QueryRunner } from "typeorm";

export class addsInitialPermissionTemplateTable1677094302379 implements MigrationInterface {
    name = 'addsInitialPermissionTemplateTable1677094302379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "app_permission_template" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "created_by_id" uuid NOT NULL, "updated_by_id" uuid NOT NULL, "deleted_by_id" uuid, "name" character varying NOT NULL, "description" character varying, "app_tenant_id" uuid NOT NULL, CONSTRAINT "PK_cffd8807eb38e94c3f97790af3e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_permission_template_claim" ("app_permission_template_id" uuid NOT NULL, "app_claim_id" uuid NOT NULL, CONSTRAINT "PK_17c2e243db4daaa36075cfa356d" PRIMARY KEY ("app_permission_template_id", "app_claim_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_aa233cacd988d4d89d408d5b82" ON "app_permission_template_claim" ("app_permission_template_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_6e19c4bf4119240525998c9fc5" ON "app_permission_template_claim" ("app_claim_id") `);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
        await queryRunner.query(`ALTER TABLE "app_permission_template" ADD CONSTRAINT "FK_39139b42cecfab4b83622149c6f" FOREIGN KEY ("created_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_permission_template" ADD CONSTRAINT "FK_7368775cd27503c70bcda8237ce" FOREIGN KEY ("updated_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_permission_template" ADD CONSTRAINT "FK_9bb5faab9ce4ec22c40427ef69b" FOREIGN KEY ("deleted_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_permission_template" ADD CONSTRAINT "FK_6603132f6a53a27a1bcf4191290" FOREIGN KEY ("app_tenant_id") REFERENCES "app_tenant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_permission_template_claim" ADD CONSTRAINT "FK_aa233cacd988d4d89d408d5b82a" FOREIGN KEY ("app_permission_template_id") REFERENCES "app_permission_template"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_permission_template_claim" ADD CONSTRAINT "FK_6e19c4bf4119240525998c9fc57" FOREIGN KEY ("app_claim_id") REFERENCES "app_claim"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_permission_template_claim" DROP CONSTRAINT "FK_6e19c4bf4119240525998c9fc57"`);
        await queryRunner.query(`ALTER TABLE "app_permission_template_claim" DROP CONSTRAINT "FK_aa233cacd988d4d89d408d5b82a"`);
        await queryRunner.query(`ALTER TABLE "app_permission_template" DROP CONSTRAINT "FK_6603132f6a53a27a1bcf4191290"`);
        await queryRunner.query(`ALTER TABLE "app_permission_template" DROP CONSTRAINT "FK_9bb5faab9ce4ec22c40427ef69b"`);
        await queryRunner.query(`ALTER TABLE "app_permission_template" DROP CONSTRAINT "FK_7368775cd27503c70bcda8237ce"`);
        await queryRunner.query(`ALTER TABLE "app_permission_template" DROP CONSTRAINT "FK_39139b42cecfab4b83622149c6f"`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6e19c4bf4119240525998c9fc5"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_aa233cacd988d4d89d408d5b82"`);
        await queryRunner.query(`DROP TABLE "app_permission_template_claim"`);
        await queryRunner.query(`DROP TABLE "app_permission_template"`);
    }

}
