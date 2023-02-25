import { MigrationInterface, QueryRunner } from "typeorm";

export class initialOffenderCommentTables1677362883967 implements MigrationInterface {
    name = 'initialOffenderCommentTables1677362883967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "offender_comment_like" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "liked_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "liked_by_id" uuid NOT NULL, "comment_id" uuid NOT NULL, "is_liked" boolean NOT NULL, CONSTRAINT "PK_e2210d27d67f7a34578cd855508" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9385038d9d1f77cbcefd87520f" ON "offender_comment_like" ("is_liked") `);
        await queryRunner.query(`CREATE TABLE "offender_comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "message" character varying NOT NULL, "commented_by_id" uuid NOT NULL, "offender_id" uuid NOT NULL, "parent_id" uuid, CONSTRAINT "PK_74d322190497a39c2a1fde09535" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
        await queryRunner.query(`ALTER TABLE "offender_comment_like" ADD CONSTRAINT "FK_56464fb9816edfc1cbe79beea21" FOREIGN KEY ("liked_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender_comment_like" ADD CONSTRAINT "FK_b87341cea7b511df24c246f0a6e" FOREIGN KEY ("comment_id") REFERENCES "offender_comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender_comment" ADD CONSTRAINT "FK_efa965e8a42271357950406554f" FOREIGN KEY ("commented_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender_comment" ADD CONSTRAINT "FK_e1e0c9104fcbf774ae6671c8efe" FOREIGN KEY ("offender_id") REFERENCES "offender"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender_comment" ADD CONSTRAINT "FK_e917095ea2bc37774ae9b38ca7e" FOREIGN KEY ("parent_id") REFERENCES "offender_comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "offender_comment" DROP CONSTRAINT "FK_e917095ea2bc37774ae9b38ca7e"`);
        await queryRunner.query(`ALTER TABLE "offender_comment" DROP CONSTRAINT "FK_e1e0c9104fcbf774ae6671c8efe"`);
        await queryRunner.query(`ALTER TABLE "offender_comment" DROP CONSTRAINT "FK_efa965e8a42271357950406554f"`);
        await queryRunner.query(`ALTER TABLE "offender_comment_like" DROP CONSTRAINT "FK_b87341cea7b511df24c246f0a6e"`);
        await queryRunner.query(`ALTER TABLE "offender_comment_like" DROP CONSTRAINT "FK_56464fb9816edfc1cbe79beea21"`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
        await queryRunner.query(`DROP TABLE "offender_comment"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9385038d9d1f77cbcefd87520f"`);
        await queryRunner.query(`DROP TABLE "offender_comment_like"`);
    }

}
