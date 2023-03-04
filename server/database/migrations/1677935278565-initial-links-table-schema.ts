import { MigrationInterface, QueryRunner } from "typeorm";

export class initialLinksTableSchema1677935278565 implements MigrationInterface {
    name = 'initialLinksTableSchema1677935278565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."link_type_enum" AS ENUM('documentation', 'social', 'other')`);
        await queryRunner.query(`CREATE TYPE "public"."link_visibility_enum" AS ENUM('private', 'public')`);
        await queryRunner.query(`CREATE TABLE "link" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "type" "public"."link_type_enum" NOT NULL DEFAULT 'documentation', "name" character varying NOT NULL, "url" character varying NOT NULL, "visibility" "public"."link_visibility_enum" NOT NULL DEFAULT 'private', CONSTRAINT "PK_26206fb7186da72fbb9eaa3fac9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "link"`);
        await queryRunner.query(`DROP TYPE "public"."link_visibility_enum"`);
        await queryRunner.query(`DROP TYPE "public"."link_type_enum"`);
    }

}
