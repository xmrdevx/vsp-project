import { MigrationInterface, QueryRunner } from "typeorm";

export class initialCommentsTableSchema1677332019930 implements MigrationInterface {
    name = 'initialCommentsTableSchema1677332019930'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "message" character varying NOT NULL, "commented_by_id" uuid NOT NULL, "parent_id" uuid, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment_like" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "liked_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "liked_by_id" uuid NOT NULL, "comment_id" uuid NOT NULL, "is_liked" boolean NOT NULL, CONSTRAINT "PK_04f93e6f1ace5dbc1d8c562ccbf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_dba75ff2ed03cd921bf740371f" ON "comment_like" ("is_liked") `);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_67a61a9bacf2a1f8fcc13560953" FOREIGN KEY ("commented_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_8bd8d0985c0d077c8129fb4a209" FOREIGN KEY ("parent_id") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment_like" ADD CONSTRAINT "FK_489942f1cb1785e5327aa6c233f" FOREIGN KEY ("liked_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment_like" ADD CONSTRAINT "FK_4a0c128374ff87d4641cab920f0" FOREIGN KEY ("comment_id") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment_like" DROP CONSTRAINT "FK_4a0c128374ff87d4641cab920f0"`);
        await queryRunner.query(`ALTER TABLE "comment_like" DROP CONSTRAINT "FK_489942f1cb1785e5327aa6c233f"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_8bd8d0985c0d077c8129fb4a209"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_67a61a9bacf2a1f8fcc13560953"`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
        await queryRunner.query(`DROP INDEX "public"."IDX_dba75ff2ed03cd921bf740371f"`);
        await queryRunner.query(`DROP TABLE "comment_like"`);
        await queryRunner.query(`DROP TABLE "comment"`);
    }

}
