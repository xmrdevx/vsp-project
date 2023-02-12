-- This script sets up a dev tenant/team/user for development purposes only.

START TRANSACTION;

-- CREATES DEV ACCOUNT
INSERT INTO app_account (id,created_on,updated_on,deleted_on,identifier,"name") 
VALUES ('d2132b89-39f0-4f7a-9b02-fc2796784742','2023-02-12 09:10:50.083-05','2023-02-12 09:10:50.083-05',NULL,'7884ead3-292a-4997-b2a8-6cd4350d180e','Dev Account');

-- CREATES DEV TENANT
INSERT INTO app_tenant (id,created_on,updated_on,deleted_on,identifier,is_locked_out,app_account_id) 
VALUES ('2ab016e3-ec7d-4784-931d-6011a81eeef7','2023-02-12 09:10:50.083-05','2023-02-12 09:10:50.083-05',NULL,'377020f3-1754-47e0-9763-57c577724e6d',false,'d2132b89-39f0-4f7a-9b02-fc2796784742');

-- CREATES DEV ADDRESS
INSERT INTO app_address (id,created_on,updated_on,deleted_on,street,street2,city,state,zip,country) 
VALUES ('5dfc26c7-0673-40f4-b4d3-2f9c23d62e11','2023-02-12 09:10:50.083-05','2023-02-12 09:10:50.083-05',NULL,'','','','','','');

-- CREATES DEV PROFILE
INSERT INTO app_profile (id,created_on,updated_on,deleted_on,first_name,last_name,summary,avatar_url,app_address_id) 
VALUES ('829ed7cd-440a-4e89-b25d-c9cffd45aa05','2023-02-12 09:10:50.083-05','2023-02-12 09:10:50.083-05',NULL,'Dev','Dev','','https://randomuser.me/api/portraits/med/men/13.jpg','5dfc26c7-0673-40f4-b4d3-2f9c23d62e11');

-- CREATES DEV USER
INSERT INTO app_user (id,created_on,updated_on,deleted_on,username,"password",password_reset_token,password_reset_token_expiration,email,is_email_confirmed,email_confirmation_token,email_confirmation_token_expiration,is_locked_out,app_profile_id,app_tenant_id) 
VALUES ('37a85307-14af-4223-a93b-3ddb661194b0','2023-02-12 09:10:50.019-05','2023-02-12 09:10:50.019-05',NULL,'dev','$2b$10$so5H8RZWuYoFVRAJdoUDReIqUKaKtb3MGByGkTzI0ozL1SXBjAtV6','097f9751-0ce6-4915-bdda-9a11c7037d5f','2023-02-12 09:10:50.018265-05','dev@dev.com',true,'02c6a9d8-e9ea-4ac9-8231-69109d876527','2023-02-13 09:10:50.018265-05',false,'829ed7cd-440a-4e89-b25d-c9cffd45aa05','2ab016e3-ec7d-4784-931d-6011a81eeef7');

-- CREATES DEV ROLES
INSERT INTO app_user_role (app_user_id, app_role_id)
SELECT '37a85307-14af-4223-a93b-3ddb661194b0', r.id FROM app_role AS r;

-- CREATES DEV CLAIMS
INSERT INTO app_user_claim (app_user_id, app_claim_id)
SELECT '37a85307-14af-4223-a93b-3ddb661194b0', c.id FROM app_claim AS c;

COMMIT;
