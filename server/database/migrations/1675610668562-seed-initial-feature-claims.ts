import { MigrationInterface, QueryRunner } from "typeorm"
import { Claim, ClaimAuthorizationTypes, ClaimTypes, ClaimValues } from '../../libs/common/src';

export class seedInitialFeatureClaims1675610668562 implements MigrationInterface {
    name = 'seedInitialFeatureClaims1675610668562';

    private _defaultFeatureClaims: Claim[] = [
        { type: ClaimAuthorizationTypes.CAN_ACCESS, value: ClaimValues.LIVESTREAM, isSetByTenant: false } as Claim,
        { type: ClaimAuthorizationTypes.CAN_ACCESS, value: ClaimValues.DASHBOARD, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.DASHBOARD, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.DASHBOARD, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.DASHBOARD, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.DASHBOARD, isSetByTenant: true } as Claim,
    ];

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(
            this._defaultFeatureClaims.map(claim => 
                queryRunner.manager.create<Claim>(Claim, claim))
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM app_claim`);
    }

}
