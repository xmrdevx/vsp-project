import { MigrationInterface, QueryRunner } from 'typeorm';
import { Claim, ClaimAuthorizationTypes, ClaimValues } from '../../libs/common/src';

export class seedUserAccountsClaims1676841879011 implements MigrationInterface {
    name = 'seedUserAccountsClaims1676841879011';

    private _defaultFeatureClaims: Claim[] = [
        // Access Claims
        { type: ClaimAuthorizationTypes.CAN_ACCESS, value: ClaimValues.USER_ACCOUNTS, isSetByTenant: true } as Claim,

        // User Accounts Claims
        { type: ClaimAuthorizationTypes.CAN_CREATE, value: ClaimValues.USER_ACCOUNTS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_READ, value: ClaimValues.USER_ACCOUNTS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_UPDATE, value: ClaimValues.USER_ACCOUNTS, isSetByTenant: true } as Claim,
        { type: ClaimAuthorizationTypes.CAN_DELETE, value: ClaimValues.USER_ACCOUNTS, isSetByTenant: true } as Claim,
    ];

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.save(
            this._defaultFeatureClaims.map(claim => 
                queryRunner.manager.create<Claim>(Claim, claim))
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM app_claim WHERE value = ${ClaimValues.USER_ACCOUNTS}`);
    }
}
