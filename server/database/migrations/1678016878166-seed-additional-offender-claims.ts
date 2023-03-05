import { MigrationInterface, QueryRunner } from 'typeorm';
import { Claim, ClaimAuthorizationTypes, ClaimValues } from '../../libs/common/src';

export class seedAdditionalOffenderClaims1678016878166 implements MigrationInterface {
    name = 'seedAdditionalOffenderClaims1678016878166';

    private _defaultFeatureClaims: Claim[] = [
        // Access Claims
        { type: ClaimAuthorizationTypes.CAN_ACCESS, value: ClaimValues.OFFENDER_ADDRESSES, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_ACCESS, value: ClaimValues.OFFENDER_COMMENTS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_ACCESS, value: ClaimValues.OFFENDER_LINKS, isSetByTenant: true } as Claim,

        // Permission Claims
        { type: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.OFFENDER_ADDRESSES, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.OFFENDER_ADDRESSES, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.OFFENDER_ADDRESSES, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.OFFENDER_ADDRESSES, isSetByTenant: true } as Claim,

        { type: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.OFFENDER_COMMENTS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.OFFENDER_COMMENTS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.OFFENDER_COMMENTS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.OFFENDER_COMMENTS, isSetByTenant: true } as Claim,
        
        { type: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.OFFENDER_LINKS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.OFFENDER_LINKS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.OFFENDER_LINKS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.OFFENDER_LINKS, isSetByTenant: true } as Claim,
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
