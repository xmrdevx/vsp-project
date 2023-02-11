import { MigrationInterface, QueryRunner } from "typeorm";

export class offendersEnitiesNowExtendBaseTrackedEntityToTrackUserModifications1676144104542 implements MigrationInterface {
    name = 'offendersEnitiesNowExtendBaseTrackedEntityToTrackUserModifications1676144104542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offender" ADD "created_by_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "offender" ADD "updated_by_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "offender" ADD "deleted_by_id" uuid`);
        await queryRunner.query(`ALTER TABLE "case" ADD "updated_by_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "case" ADD "deleted_by_id" uuid`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
        await queryRunner.query(`ALTER TABLE "offender" ADD CONSTRAINT "FK_8cc4f91731abf926f0a9720ea7b" FOREIGN KEY ("created_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender" ADD CONSTRAINT "FK_238a9b24bc8be35184422ef5867" FOREIGN KEY ("updated_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender" ADD CONSTRAINT "FK_e62e70adacab0716c6c27fe121a" FOREIGN KEY ("deleted_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_deb11e1168d6fbf7ed26507f610" FOREIGN KEY ("updated_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_f09307c1cb89572dd91e203a786" FOREIGN KEY ("deleted_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "case" DROP CONSTRAINT "FK_f09307c1cb89572dd91e203a786"`);
        await queryRunner.query(`ALTER TABLE "case" DROP CONSTRAINT "FK_deb11e1168d6fbf7ed26507f610"`);
        await queryRunner.query(`ALTER TABLE "offender" DROP CONSTRAINT "FK_e62e70adacab0716c6c27fe121a"`);
        await queryRunner.query(`ALTER TABLE "offender" DROP CONSTRAINT "FK_238a9b24bc8be35184422ef5867"`);
        await queryRunner.query(`ALTER TABLE "offender" DROP CONSTRAINT "FK_8cc4f91731abf926f0a9720ea7b"`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
        await queryRunner.query(`ALTER TABLE "case" DROP COLUMN "deleted_by_id"`);
        await queryRunner.query(`ALTER TABLE "case" DROP COLUMN "updated_by_id"`);
        await queryRunner.query(`ALTER TABLE "offender" DROP COLUMN "deleted_by_id"`);
        await queryRunner.query(`ALTER TABLE "offender" DROP COLUMN "updated_by_id"`);
        await queryRunner.query(`ALTER TABLE "offender" DROP COLUMN "created_by_id"`);
    }

}
