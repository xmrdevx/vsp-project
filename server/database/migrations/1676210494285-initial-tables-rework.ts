import { MigrationInterface, QueryRunner } from "typeorm";

export class initialTablesRework1676210494285 implements MigrationInterface {
    name = 'initialTablesRework1676210494285'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "app_claim" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "type" character varying NOT NULL, "value" character varying NOT NULL, "is_set_by_tenant" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_7ea87920d35581113ca901ce6ae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_device_code" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "token" character varying NOT NULL, CONSTRAINT "UQ_bc5e1aa5ced60e043b9fa953729" UNIQUE ("token"), CONSTRAINT "PK_cc62527be86d7c1eb1704ab41d6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bc5e1aa5ced60e043b9fa95372" ON "app_device_code" ("token") `);
        await queryRunner.query(`CREATE TABLE "app_address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "street" character varying, "street2" character varying, "city" character varying, "state" character varying, "zip" character varying, "country" character varying, CONSTRAINT "PK_3acf65fdedca22bd00fa7a8cc87" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_profile" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "summary" character varying, "avatar_url" character varying, "app_address_id" uuid NOT NULL, CONSTRAINT "REL_69e5e32644fd8d77ca9bbbcd6a" UNIQUE ("app_address_id"), CONSTRAINT "PK_28ba403c42233b5b3c8d5c4a7a1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_refresh_token" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "refresh_token" character varying NOT NULL, "is_blacklisted" boolean NOT NULL DEFAULT false, "app_user_id" uuid NOT NULL, CONSTRAINT "PK_c2ba96083bdc5d8d804f2a33efa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c911d809b9f41e7c6d15f394ea" ON "app_refresh_token" ("refresh_token") `);
        await queryRunner.query(`CREATE TABLE "app_role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, CONSTRAINT "UQ_5b741af93e7206264d17d783343" UNIQUE ("name"), CONSTRAINT "PK_6247c97e5e63af6c5d6cc8a5e3c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "identifier" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_67616a35344586911a7e0e936f6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_251249fb48fa662a11429909eb" ON "app_account" ("identifier") `);
        await queryRunner.query(`CREATE TABLE "app_tenant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "identifier" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_locked_out" boolean NOT NULL DEFAULT false, "app_account_id" uuid NOT NULL, CONSTRAINT "REL_c07ad4fd985e31b0ca14e7b316" UNIQUE ("app_account_id"), CONSTRAINT "PK_0a0d871e841c6c7d3d6d4d1c9a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2e424c718b864444f8b11593a5" ON "app_tenant" ("identifier") `);
        await queryRunner.query(`CREATE TABLE "app_user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "username" character varying NOT NULL, "password" character varying NOT NULL, "password_reset_token" uuid NOT NULL DEFAULT uuid_generate_v4(), "password_reset_token_expiration" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "email" character varying NOT NULL, "is_email_confirmed" boolean NOT NULL DEFAULT false, "email_confirmation_token" uuid NOT NULL DEFAULT uuid_generate_v4(), "email_confirmation_token_expiration" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW() + interval '24 hours', "is_locked_out" boolean NOT NULL DEFAULT false, "app_profile_id" uuid NOT NULL, "app_tenant_id" uuid NOT NULL, CONSTRAINT "UQ_c480e576dd71729addbc2d51b67" UNIQUE ("username"), CONSTRAINT "UQ_3fa909d0e37c531ebc237703391" UNIQUE ("email"), CONSTRAINT "REL_9b10662aaf679e9c3b7f67fb59" UNIQUE ("app_profile_id"), CONSTRAINT "PK_22a5c4a3d9b2fb8e4e73fc4ada1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c480e576dd71729addbc2d51b6" ON "app_user" ("username") `);
        await queryRunner.query(`CREATE INDEX "IDX_74d26806c12ca0ffe06e10ed3b" ON "app_user" ("password_reset_token") `);
        await queryRunner.query(`CREATE INDEX "IDX_5efce9296730f676181e76309e" ON "app_user" ("email_confirmation_token") `);
        await queryRunner.query(`CREATE TABLE "geo_location" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "full_address_string" character varying, "latitude" double precision NOT NULL, "longitude" double precision NOT NULL, "location" geography(Point,4326) NOT NULL, CONSTRAINT "PK_fdc639c0cf46655c0d445636d8f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "app_client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "identifier" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_0cef4bb87e426aa0dac87121eac" UNIQUE ("identifier"), CONSTRAINT "PK_03e6036388b279d785e1a4e86e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0cef4bb87e426aa0dac87121ea" ON "app_client" ("identifier") `);
        await queryRunner.query(`CREATE TABLE "offender" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "created_by_id" uuid NOT NULL, "updated_by_id" uuid NOT NULL, "deleted_by_id" uuid, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "avatar_url" character varying NOT NULL, "summary" character varying NOT NULL, CONSTRAINT "PK_1feac0d905ee30bec1e5c3c9c9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."case_status_enum" AS ENUM('new', 'investigating', 'open', 'closed')`);
        await queryRunner.query(`CREATE TYPE "public"."case_visibility_enum" AS ENUM('private', 'public')`);
        await queryRunner.query(`CREATE TABLE "case" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "created_by_id" uuid NOT NULL, "updated_by_id" uuid NOT NULL, "deleted_by_id" uuid, "opened_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "closed_on" TIMESTAMP WITH TIME ZONE, "status" "public"."case_status_enum" NOT NULL DEFAULT 'open', "visibility" "public"."case_visibility_enum" NOT NULL DEFAULT 'private', "summary" character varying, "offender_id" uuid NOT NULL, "caught_at_id" uuid, "tenant_id" uuid NOT NULL, CONSTRAINT "REL_ae23a0e3426c727e394579d487" UNIQUE ("caught_at_id"), CONSTRAINT "PK_a1b20a2aef6fc438389d2c4aca0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stream_key" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "name" character varying NOT NULL, "key" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_blacklisted" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_8b4ea458f8b38348800afa7a1e0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1dcb69a150bd2037fcc71a5ec1" ON "stream_key" ("key") `);
        await queryRunner.query(`CREATE TABLE "stream" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "updated_on" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), "deleted_on" TIMESTAMP WITH TIME ZONE, "title" character varying NOT NULL, "summary" character varying, "identifier" uuid NOT NULL DEFAULT uuid_generate_v4(), "is_active" boolean NOT NULL DEFAULT false, "is_published" boolean NOT NULL DEFAULT false, "app_user_id" uuid NOT NULL, CONSTRAINT "PK_0dc9d7e04ff213c08a096f835f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0569d184883949741b0374a110" ON "stream" ("identifier") `);
        await queryRunner.query(`CREATE TABLE "app_role_claim" ("app_role_id" uuid NOT NULL, "app_claim_id" uuid NOT NULL, CONSTRAINT "PK_25e354cd22d7b431d5d2dce05e3" PRIMARY KEY ("app_role_id", "app_claim_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_32d50cb2917777213a4fa33840" ON "app_role_claim" ("app_role_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_189459db8beefb7748a53f3e96" ON "app_role_claim" ("app_claim_id") `);
        await queryRunner.query(`CREATE TABLE "app_user_role" ("app_user_id" uuid NOT NULL, "app_role_id" uuid NOT NULL, CONSTRAINT "PK_812b603c86950ac48e81cee0f71" PRIMARY KEY ("app_user_id", "app_role_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0099ab8422881c97a065df9d02" ON "app_user_role" ("app_user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_083a77f0c71c5be9b53468ce8f" ON "app_user_role" ("app_role_id") `);
        await queryRunner.query(`CREATE TABLE "app_user_claim" ("app_user_id" uuid NOT NULL, "app_claim_id" uuid NOT NULL, CONSTRAINT "PK_d1e424a40a35d52f9a290cfd00c" PRIMARY KEY ("app_user_id", "app_claim_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bf676fb33203d498a09e7fadd7" ON "app_user_claim" ("app_user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_6e2b4373035e57d4979ed727f3" ON "app_user_claim" ("app_claim_id") `);
        await queryRunner.query(`CREATE TABLE "app_user_device_code" ("app_user_id" uuid NOT NULL, "app_device_code_id" uuid NOT NULL, CONSTRAINT "PK_9c440edfbc838f27fe0ee213b6d" PRIMARY KEY ("app_user_id", "app_device_code_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e566bfcfd39966a07a904814c2" ON "app_user_device_code" ("app_user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_38f9125a35ea3612cfaabbb101" ON "app_user_device_code" ("app_device_code_id") `);
        await queryRunner.query(`CREATE TABLE "user_stream_key" ("app_user_id" uuid NOT NULL, "stream_key_id" uuid NOT NULL, CONSTRAINT "PK_e5f0b14a5feff0ca1e743f45c1c" PRIMARY KEY ("app_user_id", "stream_key_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e9ad1ae8d575769afb03259f5a" ON "user_stream_key" ("app_user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_6e00118d4c570ff002a496ccac" ON "user_stream_key" ("stream_key_id") `);
        await queryRunner.query(`CREATE TABLE "app_client_role" ("app_client_id" uuid NOT NULL, "app_role_id" uuid NOT NULL, CONSTRAINT "PK_aaf6c4db6a2eaa0bfba6f9f5e9f" PRIMARY KEY ("app_client_id", "app_role_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_277fb92a4b5302014c282cc702" ON "app_client_role" ("app_client_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_bc0ac83a58b8a3ede68ffb8245" ON "app_client_role" ("app_role_id") `);
        await queryRunner.query(`ALTER TABLE "app_profile" ADD CONSTRAINT "FK_69e5e32644fd8d77ca9bbbcd6a0" FOREIGN KEY ("app_address_id") REFERENCES "app_address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_refresh_token" ADD CONSTRAINT "FK_0c02f0abf9c252b0ba08cecd938" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_tenant" ADD CONSTRAINT "FK_c07ad4fd985e31b0ca14e7b3165" FOREIGN KEY ("app_account_id") REFERENCES "app_account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_user" ADD CONSTRAINT "FK_9b10662aaf679e9c3b7f67fb59c" FOREIGN KEY ("app_profile_id") REFERENCES "app_profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_user" ADD CONSTRAINT "FK_eacfb19d80880051b15820e8913" FOREIGN KEY ("app_tenant_id") REFERENCES "app_tenant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender" ADD CONSTRAINT "FK_8cc4f91731abf926f0a9720ea7b" FOREIGN KEY ("created_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender" ADD CONSTRAINT "FK_238a9b24bc8be35184422ef5867" FOREIGN KEY ("updated_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "offender" ADD CONSTRAINT "FK_e62e70adacab0716c6c27fe121a" FOREIGN KEY ("deleted_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_afccf0ab0d520e52a920b387f16" FOREIGN KEY ("created_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_deb11e1168d6fbf7ed26507f610" FOREIGN KEY ("updated_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_f09307c1cb89572dd91e203a786" FOREIGN KEY ("deleted_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_0e06c12eaf98559acc1fe7463f2" FOREIGN KEY ("offender_id") REFERENCES "offender"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_ae23a0e3426c727e394579d487e" FOREIGN KEY ("caught_at_id") REFERENCES "geo_location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "case" ADD CONSTRAINT "FK_666536ea7ed0dc024fbdb12e262" FOREIGN KEY ("tenant_id") REFERENCES "app_tenant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stream" ADD CONSTRAINT "FK_591c10ec7b8461ae237264dcbaa" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "app_role_claim" ADD CONSTRAINT "FK_32d50cb2917777213a4fa33840d" FOREIGN KEY ("app_role_id") REFERENCES "app_role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_role_claim" ADD CONSTRAINT "FK_189459db8beefb7748a53f3e969" FOREIGN KEY ("app_claim_id") REFERENCES "app_role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_user_role" ADD CONSTRAINT "FK_0099ab8422881c97a065df9d02c" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_user_role" ADD CONSTRAINT "FK_083a77f0c71c5be9b53468ce8fc" FOREIGN KEY ("app_role_id") REFERENCES "app_role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_user_claim" ADD CONSTRAINT "FK_bf676fb33203d498a09e7fadd76" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_user_claim" ADD CONSTRAINT "FK_6e2b4373035e57d4979ed727f39" FOREIGN KEY ("app_claim_id") REFERENCES "app_claim"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_user_device_code" ADD CONSTRAINT "FK_e566bfcfd39966a07a904814c21" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_user_device_code" ADD CONSTRAINT "FK_38f9125a35ea3612cfaabbb1013" FOREIGN KEY ("app_device_code_id") REFERENCES "app_device_code"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_stream_key" ADD CONSTRAINT "FK_e9ad1ae8d575769afb03259f5a3" FOREIGN KEY ("app_user_id") REFERENCES "app_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_stream_key" ADD CONSTRAINT "FK_6e00118d4c570ff002a496ccace" FOREIGN KEY ("stream_key_id") REFERENCES "app_user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_client_role" ADD CONSTRAINT "FK_277fb92a4b5302014c282cc702c" FOREIGN KEY ("app_client_id") REFERENCES "app_client"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "app_client_role" ADD CONSTRAINT "FK_bc0ac83a58b8a3ede68ffb82451" FOREIGN KEY ("app_role_id") REFERENCES "app_role"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_client_role" DROP CONSTRAINT "FK_bc0ac83a58b8a3ede68ffb82451"`);
        await queryRunner.query(`ALTER TABLE "app_client_role" DROP CONSTRAINT "FK_277fb92a4b5302014c282cc702c"`);
        await queryRunner.query(`ALTER TABLE "user_stream_key" DROP CONSTRAINT "FK_6e00118d4c570ff002a496ccace"`);
        await queryRunner.query(`ALTER TABLE "user_stream_key" DROP CONSTRAINT "FK_e9ad1ae8d575769afb03259f5a3"`);
        await queryRunner.query(`ALTER TABLE "app_user_device_code" DROP CONSTRAINT "FK_38f9125a35ea3612cfaabbb1013"`);
        await queryRunner.query(`ALTER TABLE "app_user_device_code" DROP CONSTRAINT "FK_e566bfcfd39966a07a904814c21"`);
        await queryRunner.query(`ALTER TABLE "app_user_claim" DROP CONSTRAINT "FK_6e2b4373035e57d4979ed727f39"`);
        await queryRunner.query(`ALTER TABLE "app_user_claim" DROP CONSTRAINT "FK_bf676fb33203d498a09e7fadd76"`);
        await queryRunner.query(`ALTER TABLE "app_user_role" DROP CONSTRAINT "FK_083a77f0c71c5be9b53468ce8fc"`);
        await queryRunner.query(`ALTER TABLE "app_user_role" DROP CONSTRAINT "FK_0099ab8422881c97a065df9d02c"`);
        await queryRunner.query(`ALTER TABLE "app_role_claim" DROP CONSTRAINT "FK_189459db8beefb7748a53f3e969"`);
        await queryRunner.query(`ALTER TABLE "app_role_claim" DROP CONSTRAINT "FK_32d50cb2917777213a4fa33840d"`);
        await queryRunner.query(`ALTER TABLE "stream" DROP CONSTRAINT "FK_591c10ec7b8461ae237264dcbaa"`);
        await queryRunner.query(`ALTER TABLE "case" DROP CONSTRAINT "FK_666536ea7ed0dc024fbdb12e262"`);
        await queryRunner.query(`ALTER TABLE "case" DROP CONSTRAINT "FK_ae23a0e3426c727e394579d487e"`);
        await queryRunner.query(`ALTER TABLE "case" DROP CONSTRAINT "FK_0e06c12eaf98559acc1fe7463f2"`);
        await queryRunner.query(`ALTER TABLE "case" DROP CONSTRAINT "FK_f09307c1cb89572dd91e203a786"`);
        await queryRunner.query(`ALTER TABLE "case" DROP CONSTRAINT "FK_deb11e1168d6fbf7ed26507f610"`);
        await queryRunner.query(`ALTER TABLE "case" DROP CONSTRAINT "FK_afccf0ab0d520e52a920b387f16"`);
        await queryRunner.query(`ALTER TABLE "offender" DROP CONSTRAINT "FK_e62e70adacab0716c6c27fe121a"`);
        await queryRunner.query(`ALTER TABLE "offender" DROP CONSTRAINT "FK_238a9b24bc8be35184422ef5867"`);
        await queryRunner.query(`ALTER TABLE "offender" DROP CONSTRAINT "FK_8cc4f91731abf926f0a9720ea7b"`);
        await queryRunner.query(`ALTER TABLE "app_user" DROP CONSTRAINT "FK_eacfb19d80880051b15820e8913"`);
        await queryRunner.query(`ALTER TABLE "app_user" DROP CONSTRAINT "FK_9b10662aaf679e9c3b7f67fb59c"`);
        await queryRunner.query(`ALTER TABLE "app_tenant" DROP CONSTRAINT "FK_c07ad4fd985e31b0ca14e7b3165"`);
        await queryRunner.query(`ALTER TABLE "app_refresh_token" DROP CONSTRAINT "FK_0c02f0abf9c252b0ba08cecd938"`);
        await queryRunner.query(`ALTER TABLE "app_profile" DROP CONSTRAINT "FK_69e5e32644fd8d77ca9bbbcd6a0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bc0ac83a58b8a3ede68ffb8245"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_277fb92a4b5302014c282cc702"`);
        await queryRunner.query(`DROP TABLE "app_client_role"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6e00118d4c570ff002a496ccac"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e9ad1ae8d575769afb03259f5a"`);
        await queryRunner.query(`DROP TABLE "user_stream_key"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_38f9125a35ea3612cfaabbb101"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e566bfcfd39966a07a904814c2"`);
        await queryRunner.query(`DROP TABLE "app_user_device_code"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6e2b4373035e57d4979ed727f3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bf676fb33203d498a09e7fadd7"`);
        await queryRunner.query(`DROP TABLE "app_user_claim"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_083a77f0c71c5be9b53468ce8f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0099ab8422881c97a065df9d02"`);
        await queryRunner.query(`DROP TABLE "app_user_role"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_189459db8beefb7748a53f3e96"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_32d50cb2917777213a4fa33840"`);
        await queryRunner.query(`DROP TABLE "app_role_claim"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0569d184883949741b0374a110"`);
        await queryRunner.query(`DROP TABLE "stream"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1dcb69a150bd2037fcc71a5ec1"`);
        await queryRunner.query(`DROP TABLE "stream_key"`);
        await queryRunner.query(`DROP TABLE "case"`);
        await queryRunner.query(`DROP TYPE "public"."case_visibility_enum"`);
        await queryRunner.query(`DROP TYPE "public"."case_status_enum"`);
        await queryRunner.query(`DROP TABLE "offender"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0cef4bb87e426aa0dac87121ea"`);
        await queryRunner.query(`DROP TABLE "app_client"`);
        await queryRunner.query(`DROP TABLE "geo_location"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5efce9296730f676181e76309e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_74d26806c12ca0ffe06e10ed3b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c480e576dd71729addbc2d51b6"`);
        await queryRunner.query(`DROP TABLE "app_user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2e424c718b864444f8b11593a5"`);
        await queryRunner.query(`DROP TABLE "app_tenant"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_251249fb48fa662a11429909eb"`);
        await queryRunner.query(`DROP TABLE "app_account"`);
        await queryRunner.query(`DROP TABLE "app_role"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c911d809b9f41e7c6d15f394ea"`);
        await queryRunner.query(`DROP TABLE "app_refresh_token"`);
        await queryRunner.query(`DROP TABLE "app_profile"`);
        await queryRunner.query(`DROP TABLE "app_address"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bc5e1aa5ced60e043b9fa95372"`);
        await queryRunner.query(`DROP TABLE "app_device_code"`);
        await queryRunner.query(`DROP TABLE "app_claim"`);
    }

}
