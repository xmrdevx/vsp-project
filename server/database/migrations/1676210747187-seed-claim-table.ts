import { MigrationInterface, QueryRunner } from "typeorm"
import { Claim, ClaimAuthorizationTypes, ClaimValues } from '../../libs/common/src';

export class seedClaimTable1676210747187 implements MigrationInterface {
    name = 'seedClaimTable1676210747187';

    private _defaultFeatureClaims: Claim[] = [
        // Access Claims
        { type: ClaimAuthorizationTypes.CAN_ACCESS, value: ClaimValues.LIVESTREAM, isSetByTenant: false } as Claim,
        { type: ClaimAuthorizationTypes.CAN_ACCESS, value: ClaimValues.DASHBOARD, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_ACCESS, value: ClaimValues.OFFENDERS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_ACCESS, value: ClaimValues.OFFENDER_CASES, isSetByTenant: true } as Claim,

        // Dashboard Claims
        { type: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.DASHBOARD, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.DASHBOARD, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.DASHBOARD, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.DASHBOARD, isSetByTenant: true } as Claim,

        // Offenders Claims
        { type: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.OFFENDERS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.OFFENDERS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.OFFENDERS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.OFFENDERS, isSetByTenant: true } as Claim,

        // Offender Cases Claims
        { type: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.OFFENDER_CASES, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.OFFENDER_CASES, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.OFFENDER_CASES, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.OFFENDER_CASES, isSetByTenant: true } as Claim,
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
