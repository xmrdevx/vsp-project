import { MigrationInterface, QueryRunner } from "typeorm"
import { Claim, FeatureClaimTypes, FeatureClaimValues } from '../../libs/common/src';

export class seedInitialFeatureClaims1675549686626 implements MigrationInterface {
    name = 'seedInitialFeatureClaims1675549686626';

    private _defaultFeatureClaims: Claim[] = [
        { type: FeatureClaimTypes.DASHBOARD, value: FeatureClaimValues.CREATE } as Claim,
        { type: FeatureClaimTypes.DASHBOARD, value: FeatureClaimValues.READ } as Claim,
        { type: FeatureClaimTypes.DASHBOARD, value: FeatureClaimValues.UPDATE } as Claim,
        { type: FeatureClaimTypes.DASHBOARD, value: FeatureClaimValues.DELETE } as Claim,
    ];

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(
            this._defaultFeatureClaims.map(claim => 
                queryRunner.manager.create<Claim>(Claim, claim))
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE * FROM app_claim`);
    }

}
