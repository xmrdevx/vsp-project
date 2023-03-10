import { MigrationInterface, QueryRunner } from "typeorm";

export class updatedAddressAndLinkEntitiesToBeTrackedEntities1678470010631 implements MigrationInterface {
    name = 'updatedAddressAndLinkEntitiesToBeTrackedEntities1678470010631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ADD "created_by_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ADD "updated_by_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" ADD "deleted_by_id" uuid`);
        await queryRunner.query(`ALTER TABLE "link" ADD "created_by_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "link" ADD "updated_by_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "link" ADD "deleted_by_id" uuid`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_c633f0fcff5143376ef438d3206" FOREIGN KEY ("created_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_a19adc97cf0fb1b1ccb6335fd5a" FOREIGN KEY ("updated_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_75f7a0273d4eed935d536b2c9c4" FOREIGN KEY ("deleted_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "link" ADD CONSTRAINT "FK_d55c6806686eeccb69b2282c585" FOREIGN KEY ("created_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "link" ADD CONSTRAINT "FK_2fef3d929f899cf3fa6ad855f85" FOREIGN KEY ("updated_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "link" ADD CONSTRAINT "FK_ee38e70e2615995000f2af761d9" FOREIGN KEY ("deleted_by_id") REFERENCES "app_user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "link" DROP CONSTRAINT "FK_ee38e70e2615995000f2af761d9"`);
        await queryRunner.query(`ALTER TABLE "link" DROP CONSTRAINT "FK_2fef3d929f899cf3fa6ad855f85"`);
        await queryRunner.query(`ALTER TABLE "link" DROP CONSTRAINT "FK_d55c6806686eeccb69b2282c585"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_75f7a0273d4eed935d536b2c9c4"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_a19adc97cf0fb1b1ccb6335fd5a"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_c633f0fcff5143376ef438d3206"`);
        await queryRunner.query(`ALTER TABLE "link" DROP COLUMN "deleted_by_id"`);
        await queryRunner.query(`ALTER TABLE "link" DROP COLUMN "updated_by_id"`);
        await queryRunner.query(`ALTER TABLE "link" DROP COLUMN "created_by_id"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "deleted_by_id"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "updated_by_id"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "created_by_id"`);
    }

}
