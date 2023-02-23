import { MigrationInterface, QueryRunner } from 'typeorm';
import { Claim, ClaimAuthorizationTypes, ClaimValues } from '../../libs/common/src';

export class seedPermissionTemplateClaims1677179580697 implements MigrationInterface {
    name = 'seedPermissionTemplateClaims1677179580697';

    private _defaultFeatureClaims: Claim[] = [
        // Permission Templates Access
        { type: ClaimAuthorizationTypes.CAN_ACCESS, value: ClaimValues.PERMISSION_TEMPLATES, isSetByTenant: true } as Claim,

        // Permission Template Claims
        { type: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.PERMISSION_TEMPLATES, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.PERMISSION_TEMPLATES, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.PERMISSION_TEMPLATES, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.PERMISSION_TEMPLATES, isSetByTenant: true } as Claim,
    ];

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(
            this._defaultFeatureClaims.map(claim => 
                queryRunner.manager.create<Claim>(Claim, claim))
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM app_claim WHERE value = '${ClaimValues.PERMISSION_TEMPLATES}'`);
    }
}
