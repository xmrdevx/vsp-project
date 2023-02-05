import { MigrationInterface, QueryRunner } from "typeorm"
import { Claim, ClaimFeatureTypes, ClaimFeatureValues } from '../../libs/common/src';

export class seedInitialFeatureClaims1675610668562 implements MigrationInterface {
    name = 'seedInitialFeatureClaims1675610668562';

    private _defaultFeatureClaims: Claim[] = [
        { type: ClaimFeatureTypes.CAN_ACCESS, value: ClaimFeatureValues.LIVESTREAM, isSetByTenant: false } as Claim,
        { type: ClaimFeatureTypes.CAN_ACCESS, value: ClaimFeatureValues.DASHBOARD, isSetByTenant: true } as Claim,
        { type: ClaimFeatureTypes.CAN_CREATE, value: ClaimFeatureValues.DASHBOARD, isSetByTenant: true } as Claim,
        { type: ClaimFeatureTypes.CAN_READ, value: ClaimFeatureValues.DASHBOARD, isSetByTenant: true } as Claim,
        { type: ClaimFeatureTypes.CAN_UPDATE, value: ClaimFeatureValues.DASHBOARD, isSetByTenant: true } as Claim,
        { type: ClaimFeatureTypes.CAN_DELETE, value: ClaimFeatureValues.DASHBOARD, isSetByTenant: true } as Claim,
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
