import { MigrationInterface, QueryRunner } from "typeorm";

export class addsStreamTable1675717924258 implements MigrationInterface {
    name = 'addsStreamTable1675717924258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stream" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE, "title" character varying NOT NULL, "summary" character varying, "identifier" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT false, "is_published" boolean NOT NULL DEFAULT false, "app_user_id" uuid NOT NULL, CONSTRAINT "PK_0dc9d7e04ff213c08a096f835f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0569d184883949741b0374a110" ON "stream" ("identifier") `);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
        await queryRunner.query(`ALTER TABLE "stream" ADD CONSTRAINT "FK_591c10ec7b8461ae237264dcbaa" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stream" DROP CONSTRAINT "FK_591c10ec7b8461ae237264dcbaa"`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0569d184883949741b0374a110"`);
        await queryRunner.query(`DROP TABLE "stream"`);
    }

}
