import { MigrationInterface, QueryRunner } from "typeorm";

export class addsStreamKeyTableWithRelationsToUser1675682862732 implements MigrationInterface {
    name = 'addsStreamKeyTableWithRelationsToUser1675682862732'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_590bef46cbebaa44cbbecdf9bd"`);
        await queryRunner.query(`CREATE TABLE "stream_key" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_at" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_blacklisted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_8b4ea458f8b38348800afa7a1e0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1dcb69a150bd2037fcc71a5ec1" ON "stream_key" ("key") `);
        await queryRunner.query(`CREATE TABLE "user_stream_key" ("app_user_id" uuid NOT NULL, "stream_key_id" uuid NOT NULL, CONSTRAINT "PK_e5f0b14a5feff0ca1e743f45c1c" PRIMARY KEY ("app_user_id", "stream_key_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e9ad1ae8d575769afb03259f5a" ON "user_stream_key" ("app_user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_6e00118d4c570ff002a496ccac" ON "user_stream_key" ("stream_key_id") `);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT NOW() + interval '24 hours'`);
        await queryRunner.query(`CREATE INDEX "IDX_0cef4bb87e426aa0dac87121ea" ON "app_client" ("identifier") `);
        await queryRunner.query(`ALTER TABLE "user_stream_key" ADD CONSTRAINT "FK_e9ad1ae8d575769afb03259f5a3" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_stream_key" ADD CONSTRAINT "FK_6e00118d4c570ff002a496ccace" FOREIGN KEY ("stream_key_id") REFERENCES "app_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_stream_key" DROP CONSTRAINT "FK_6e00118d4c570ff002a496ccace"`);
        await queryRunner.query(`ALTER TABLE "user_stream_key" DROP CONSTRAINT "FK_e9ad1ae8d575769afb03259f5a3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0cef4bb87e426aa0dac87121ea"`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "email_confirmation_token_expiration" SET DEFAULT (now() + '24:00:00')`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6e00118d4c570ff002a496ccac"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e9ad1ae8d575769afb03259f5a"`);
        await queryRunner.query(`DROP TABLE "user_stream_key"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1dcb69a150bd2037fcc71a5ec1"`);
        await queryRunner.query(`DROP TABLE "stream_key"`);
        await queryRunner.query(`CREATE INDEX "IDX_590bef46cbebaa44cbbecdf9bd" ON "app_client" ("identifier") `);
    }

}
