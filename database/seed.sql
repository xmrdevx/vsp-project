-- This seeds mock data for offender map

START TRANSACTION;

---------------------------
-- BROOMFIELD AREA
---------------------------

-- GEO LOCATIONS
INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('143f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.92136037, -104.95969780, (ST_SetSRID(ST_MakePoint(-104.95969780, 39.92136037), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('243f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.93726098, -104.74199110, (ST_SetSRID(ST_MakePoint(-104.74199110, 39.93726098), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('343f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.95394772, -105.39017961, (ST_SetSRID(ST_MakePoint(-105.39017961, 39.95394772), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('443f154d-9a1b-4815-8760-7fd7a0d9b8cc', 40.06044501, -104.81215989, (ST_SetSRID(ST_MakePoint(-104.81215989, 40.06044501), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('543f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.95243864, -105.10571088, (ST_SetSRID(ST_MakePoint(-105.10571088, 39.95243864), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('643f154d-9a1b-4815-8760-7fd7a0d9b8cc', 40.10228979, -104.76060716, (ST_SetSRID(ST_MakePoint(-104.76060716, 40.10228979), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('743f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.98923410, -105.21355269, (ST_SetSRID(ST_MakePoint(-105.21355269, 39.98923410), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('843f154d-9a1b-4815-8760-7fd7a0d9b8cc', 40.03102184, -105.33735526, (ST_SetSRID(ST_MakePoint(-105.33735526, 40.03102184), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('943f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.98960836, -104.89086923, (ST_SetSRID(ST_MakePoint(-104.89086923, 39.98960836), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('043f154d-9a1b-4815-8760-7fd7a0d9b8cc', 40.00598767, -105.18870227, (ST_SetSRID(ST_MakePoint(-105.18870227, 40.00598767), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('113f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.81393956, -105.22284458, (ST_SetSRID(ST_MakePoint(-105.22284458, 39.81393956), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('123f154d-9a1b-4815-8760-7fd7a0d9b8cc', 40.00140230, -105.30747925, (ST_SetSRID(ST_MakePoint(-105.30747925, 40.00140230), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('133f154d-9a1b-4815-8760-7fd7a0d9b8cc', 40.21964355, -104.93625659, (ST_SetSRID(ST_MakePoint(-104.93625659, 40.21964355), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('144f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.99658821, -104.84981450, (ST_SetSRID(ST_MakePoint(-104.84981450, 39.99658821), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('153f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.77469159, -105.08986024, (ST_SetSRID(ST_MakePoint(-105.08986024, 39.77469159), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('163f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.87424122, -105.30400377, (ST_SetSRID(ST_MakePoint(-105.30400377, 39.87424122), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('173f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.78724901, -104.72352569, (ST_SetSRID(ST_MakePoint(-104.72352569, 39.78724901), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('183f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.79130064, -105.10717023, (ST_SetSRID(ST_MakePoint(-105.10717023, 39.79130064), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('193f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.85454599, -105.25636662, (ST_SetSRID(ST_MakePoint(-105.25636662, 39.85454599), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('103f154d-9a1b-4815-8760-7fd7a0d9b8cc', 40.18158891, -105.03599735, (ST_SetSRID(ST_MakePoint(-105.03599735, 40.18158891), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('213f154d-9a1b-4815-8760-7fd7a0d9b8cc', 40.15040966, -104.99229624, (ST_SetSRID(ST_MakePoint(-104.99229624, 40.15040966), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('223f154d-9a1b-4815-8760-7fd7a0d9b8cc', 40.03308952, -104.70715658, (ST_SetSRID(ST_MakePoint(-104.70715658, 40.03308952), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('233f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.90262666, -104.66149627, (ST_SetSRID(ST_MakePoint(-104.66149627, 39.90262666), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('244f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.84305015, -105.13491621, (ST_SetSRID(ST_MakePoint(-105.13491621, 39.84305015), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('253f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.97150241, -105.12749826, (ST_SetSRID(ST_MakePoint(-105.12749826, 39.97150241), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('263f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.80065276, -104.89957589, (ST_SetSRID(ST_MakePoint(-104.89957589, 39.80065276), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('273f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.70654743, -105.21609824, (ST_SetSRID(ST_MakePoint(-105.21609824, 39.70654743), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('283f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.99210029, -105.21302555, (ST_SetSRID(ST_MakePoint(-105.21302555, 39.99210029), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('293f154d-9a1b-4815-8760-7fd7a0d9b8cc', 39.81999446, -104.73083251, (ST_SetSRID(ST_MakePoint(-104.73083251, 39.81999446), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('303f154d-9a1b-4815-8760-7fd7a0d9b8cc', 40.01295800, -105.05514796, (ST_SetSRID(ST_MakePoint(-105.05514796, 40.01295800), 4326)));


-- OFFENDERS
INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10090', 'John', 'White', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10091', 'Joe', 'Doe', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10092', 'Jim', 'Black', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10093', 'James', 'Brown', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10094', 'Tom', 'Jones', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10095', 'Tim', 'Janes', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10096', 'Jake', 'Smith', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10097', 'Jane', 'George', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10098', 'Georgia', 'Johnson', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10099', 'Cam', 'Noel', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10010', 'Chris', 'Rockford', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10011', 'Nick', 'Smith', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10012', 'Jenn', 'Jones', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10013', 'Sara', 'Jacobs', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10014', 'Nick', 'Georges', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10015', 'Thomas', 'Navel', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10016', 'Jamie', 'Dough', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10017', 'Jaime', 'Doe', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10018', 'Jon', 'Smithson', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10019', 'Justin', 'Heinberg', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10020', 'Brett', 'Christopher', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10021', 'Amanda', 'Jones', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10022', 'Nicholas', 'Smith', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10023', 'Ivan', 'Jacobs', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10024', 'Ian', 'Johnson', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10025', 'Mindy', 'Jones', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10026', 'Moe', 'Munson', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10027', 'John', 'Rockfordson', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10028', 'James', 'Jacobson', NOW(), NOW());

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10029', 'Joe', 'Bloomberg', NOW(), NOW());


-- CASES
INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10090','143f154d-9a1b-4815-8760-7fd7a0d9b8cc','c81748a6-e939-4e45-bf35-91093f3307a0','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10091','243f154d-9a1b-4815-8760-7fd7a0d9b8cc','3b5ca1e5-3a0d-4f9d-b9e6-0f5949a7f904','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10092','343f154d-9a1b-4815-8760-7fd7a0d9b8cc','ea7d4930-b2eb-4d5e-9674-1017b1c2c5a9','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10093','443f154d-9a1b-4815-8760-7fd7a0d9b8cc','255b2405-f926-4577-9373-f8fac8bb9293','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10094','543f154d-9a1b-4815-8760-7fd7a0d9b8cc','953b379d-ee80-4a16-875b-1b758fb20238','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10095','643f154d-9a1b-4815-8760-7fd7a0d9b8cc','4a0e93d3-b4e9-4c7c-870c-f5189a9953a5','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10096','743f154d-9a1b-4815-8760-7fd7a0d9b8cc','40f0c5df-48fa-42af-aa2c-72687e98c54f','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10097','843f154d-9a1b-4815-8760-7fd7a0d9b8cc','53e2ecac-220d-4f72-a1b0-84095f4e1afb','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10098','943f154d-9a1b-4815-8760-7fd7a0d9b8cc','3e65aff9-af9a-4af1-a209-426c133a10e2','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10099','043f154d-9a1b-4815-8760-7fd7a0d9b8cc','2dbe4fde-3e6a-494c-a6cc-e970c9546c8f','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10010','113f154d-9a1b-4815-8760-7fd7a0d9b8cc','7d02fd2b-b887-44f2-9733-1fd705e4b006','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10011','123f154d-9a1b-4815-8760-7fd7a0d9b8cc','8903248a-847c-4d40-a7b0-48f28d6dbf83','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10012','133f154d-9a1b-4815-8760-7fd7a0d9b8cc','2dc30f9f-58fb-4f2e-88b8-81253dbf111e','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10013','144f154d-9a1b-4815-8760-7fd7a0d9b8cc','a1400513-b9c5-425f-b2b8-16e217b261dd','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10014','153f154d-9a1b-4815-8760-7fd7a0d9b8cc','18312f8d-fe8f-4957-b97f-c565456f5460','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10015','163f154d-9a1b-4815-8760-7fd7a0d9b8cc','060c1c50-0c0b-4f85-b1b8-a65c870fb04e','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10016','173f154d-9a1b-4815-8760-7fd7a0d9b8cc','d1d4dd2b-3577-4177-be06-d91bd6e6ef33','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10017','183f154d-9a1b-4815-8760-7fd7a0d9b8cc','4306a0d3-03d9-4ef0-9ace-a883cdc77b30','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10018','193f154d-9a1b-4815-8760-7fd7a0d9b8cc','fc376834-a85f-4573-8a0f-8a7b05d8116c','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10019','103f154d-9a1b-4815-8760-7fd7a0d9b8cc','f3e24879-9324-43f4-9e63-a9586ed16845','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10020','213f154d-9a1b-4815-8760-7fd7a0d9b8cc','971d1cc9-b440-4d84-9f9a-8ab3bb0b60e6','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10021','223f154d-9a1b-4815-8760-7fd7a0d9b8cc','b462fd2d-bea4-4a14-8ae5-9a5fea942b58','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10022','233f154d-9a1b-4815-8760-7fd7a0d9b8cc','017bd55b-32ee-42cf-9b80-9650a79d5117','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10023','244f154d-9a1b-4815-8760-7fd7a0d9b8cc','a9f1ba09-4f04-4b46-bb5a-4cefee90456f','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10024','253f154d-9a1b-4815-8760-7fd7a0d9b8cc','4d960d88-8a25-4079-b0ae-812c440ebbf0','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10025','263f154d-9a1b-4815-8760-7fd7a0d9b8cc','cec35422-af86-4533-a6f6-2e552c853750','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10026','273f154d-9a1b-4815-8760-7fd7a0d9b8cc','9be09331-5464-4a58-9d01-7fba0d4ce487','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10027','283f154d-9a1b-4815-8760-7fd7a0d9b8cc','5fdd11b9-0c9f-40cd-a9f3-d403273129cb','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10028','293f154d-9a1b-4815-8760-7fd7a0d9b8cc','08130f82-b404-436e-8d9b-c5b72476bf99','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10029','303f154d-9a1b-4815-8760-7fd7a0d9b8cc','fade78f8-0e03-43d0-8797-03fe344a90c1','closed', NOW(), NOW());


---------------------------
-- SE MICHIGAN STUFF
---------------------------

-- GEO_LOCATIONS
INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b5adf1-a0fd-4b02-ae51-51b4289d440c', 43.05371971,-82.11499753, (ST_SetSRID(ST_MakePoint(-82.11499753,43.05371971), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('16b5adf1-a0fd-4b02-ae51-51b4289d440c', 42.90788051,-83.23370956, (ST_SetSRID(ST_MakePoint(-83.23370956,42.90788051), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('34b5adf1-a0fd-4b02-ae51-51b4289d440c', 42.28290211,-82.53240259, (ST_SetSRID(ST_MakePoint(-82.53240259,42.28290211), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('33b5adf1-a0fd-4b02-ae51-51b4289d440c', 42.87523465,-83.62752155, (ST_SetSRID(ST_MakePoint(-83.62752155,42.87523465), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('12b5adf1-a0fd-4b02-ae51-51b4289d440c', 42.41293783,-82.90550309, (ST_SetSRID(ST_MakePoint(-82.90550309,42.41293783), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('32b5cdf1-a0fd-4b02-ae51-51b4289d440c', 42.75274306,-83.44258818, (ST_SetSRID(ST_MakePoint(-83.44258818,42.75274306), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('35b3cdf1-a0fd-4b02-ae51-51b4289d440c', 43.03725831,-83.29774383, (ST_SetSRID(ST_MakePoint(-83.29774383,43.03725831), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('3ab5adf1-a0fd-4b02-ae51-51b4289d440c', 43.01859121,-82.50692472, (ST_SetSRID(ST_MakePoint(-82.50692472,43.01859121), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('32b5adf1-a0fd-4b02-ae51-51b4289d440c', 42.62843845,-82.21449196, (ST_SetSRID(ST_MakePoint(-82.21449196,42.62843845), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('11b5adf1-a0fd-4b02-ae51-51b4289d440c', 42.74436615,-82.58015319, (ST_SetSRID(ST_MakePoint(-82.58015319,42.74436615), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('22b5adf1-a0fd-4b02-ae51-51b4289d440c', 43.1314665,-83.37372757,  (ST_SetSRID(ST_MakePoint(-83.37372757,43.13146650), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('43b5adf1-a0fd-4b02-ae51-51b4289d440c', 43.02754514,-82.67157907, (ST_SetSRID(ST_MakePoint(-82.67157907,43.02754514), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('16b2adf1-a0fd-4b02-ae51-51b4289d440c', 42.619461,-83.65410497,   (ST_SetSRID(ST_MakePoint(-83.65410497,42.61946100), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('66b5adf1-a0fd-4b02-ae51-51b4289d440c', 42.57824701,-83.4181568,  (ST_SetSRID(ST_MakePoint(-83.41815680,42.57824701), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('88b5adf1-a0fd-4b02-ae51-51b4289d440c', 42.35973814,-83.33191534, (ST_SetSRID(ST_MakePoint(-83.33191534,42.35973814), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b6adf1-a0fd-4b02-ae51-51b4289d440c', 42.6061772,-82.80223761,  (ST_SetSRID(ST_MakePoint(-82.80223761,42.60617720), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b1adf1-a0fd-4b02-ae51-51b4289d440c', 43.44870626,-82.88548535, (ST_SetSRID(ST_MakePoint(-82.88548535,43.44870626), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b8adf1-a0fd-4b02-ae51-51b4289d440c', 42.39374218,-82.26732515, (ST_SetSRID(ST_MakePoint(-82.26732515,42.39374218), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b52df1-a0fd-4b02-ae51-51b4289d440c', 43.08516909,-82.96633807, (ST_SetSRID(ST_MakePoint(-82.96633807,43.08516909), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b57df1-a0fd-4b02-ae51-51b4289d440c', 42.20158489,-82.22474704, (ST_SetSRID(ST_MakePoint(-82.22474704,42.20158489), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b51df1-a0fd-4b02-ae51-51b4289d440c', 43.46640312,-82.9428936,  (ST_SetSRID(ST_MakePoint(-82.94289360,43.46640312), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b5bdf1-a0fd-4b02-ae51-51b4289d440c', 42.66808714,-82.53808274, (ST_SetSRID(ST_MakePoint(-82.53808274,42.66808714), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b5cdf1-a0fd-4b02-ae51-51b4289d440c', 42.96913922,-82.17206752, (ST_SetSRID(ST_MakePoint(-82.17206752,42.96913922), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b5ddf1-a0fd-4b02-ae51-51b4289d440c', 42.99699251,-82.6455679,  (ST_SetSRID(ST_MakePoint(-82.64556790,42.99699251), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b59df1-a0fd-4b02-ae51-51b4289d440c', 42.45369314,-83.46460832, (ST_SetSRID(ST_MakePoint(-83.46460832,42.45369314), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b53df1-a0fd-4b02-ae51-51b4289d440c', 43.24439463,-83.290614,   (ST_SetSRID(ST_MakePoint(-83.29061400,43.24439463), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b3adf1-a0fd-4b02-ae51-51b4289d440c', 42.67924878,-82.32770896, (ST_SetSRID(ST_MakePoint(-82.32770896,42.67924878), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b55df1-a0fd-4b02-ae51-51b4289d440c', 42.78221086,-83.62394466, (ST_SetSRID(ST_MakePoint(-83.62394466,42.78221086), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b2bdf1-a0fd-4b02-ae51-51b4289d440c', 42.77404705,-81.95754757, (ST_SetSRID(ST_MakePoint(-81.95754757,42.77404705), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('36b1cdf1-a0fd-4b02-ae51-51b4289d440c', 42.85952647,-82.54769275, (ST_SetSRID(ST_MakePoint(-82.54769275,42.85952647), 4326)));


-- OFFENDERS
INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e324c43a-d540-4707-a51a-6b8852fd1926', 'Lissa', 'Drayton', '2022-02-19 18:00:40', '2022-01-30 01:59:36');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '98cbd065-088b-43eb-8829-2c5a2ff81363', 'Coralie', 'Cregg', '2022-06-19 23:58:26', '2022-03-12 22:24:07');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '238bc544-f9c5-4bc0-b59a-83455e824636', 'Ulrica', 'Sorbie', '2022-05-08 10:06:03', '2022-01-01 17:08:17');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e2f563bf-6a2f-4c42-b772-088ba970e6d9', 'Brodie', 'Treppas', '2021-10-03 23:40:59', '2021-11-30 17:03:44');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'f31ddd44-b0a4-45cc-84ed-357eed4393bd', 'Thedric', 'Davidovics', '2022-05-01 22:16:32', '2021-07-27 10:07:59');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '605e22ab-a481-4588-a5bc-40bcb67a6348', 'Matti', 'Olcot', '2022-05-03 14:10:35', '2022-05-27 05:46:22');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '90ac3143-d34c-4a08-a1b0-d2831009ba8f', 'Nelie', 'Burdikin', '2022-04-09 22:02:29', '2022-03-04 12:28:44');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '9a69a62f-474b-45cd-a887-9c220a284dd4', 'Burnaby', 'Hedau', '2021-08-17 18:10:36', '2022-05-28 17:51:42');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '21d50fc5-6662-49a1-b756-59ab291ec1dc', 'Valdemar', 'Sturgeon', '2022-04-06 05:04:47', '2022-04-19 14:14:10');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'b318047a-1f76-468e-84b2-32dee04c6855', 'Kathryn', 'Jurick', '2022-03-10 20:31:24', '2022-01-18 07:16:26');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '052d00f0-e9e5-4968-a1f0-d8610329a821', 'Bobbe', 'Nunnerley', '2021-08-19 10:16:13', '2021-11-22 20:24:42');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e4189ec9-df6f-4f16-8d06-6be161d31391', 'Catina', 'Symmons', '2021-07-18 06:57:10', '2022-01-14 15:05:54');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'd0063d78-edd2-4fb5-badf-f791ea8d82cd', 'Donny', 'Bearns', '2022-02-23 20:32:50', '2021-11-15 01:12:51');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '86a344b0-f7a6-4544-b8e1-5fd7f2b9f387', 'Giusto', 'Strapp', '2021-10-22 06:49:32', '2022-03-20 12:13:52');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '3a1324b4-2cd2-4fc3-bd1f-ab8414004fbf', 'Tobe', 'Hodinton', '2021-07-19 04:15:45', '2022-07-17 20:21:01');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '9d17567c-652e-43f1-8156-b952141e3efc', 'Erastus', 'Undrell', '2021-08-14 23:16:41', '2021-08-19 12:36:31');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '8cf52d84-b8c7-4fb9-ad8d-526eb6b2aaa6', 'Waverley', 'Van Rembrandt', '2021-11-27 12:12:16', '2022-02-25 01:28:47');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'aac61e98-2166-40cf-956d-2bba7e937e2b', 'Leta', 'O''Hoey', '2021-09-27 17:24:27', '2021-09-07 00:25:20');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e4648545-c1d0-4c51-ba22-be05360d60c2', 'Loy', 'Graber', '2021-08-20 22:45:39', '2021-07-12 17:47:15');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '8810c96a-83dd-40fb-9ea3-bc6e1bf4c0ac', 'Carmine', 'Dyke', '2022-06-01 08:34:39', '2021-09-02 00:08:16');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'c0c28f24-9edc-410f-b24e-6f2d2177491a', 'Caryn', 'Ghidoli', '2021-08-02 04:06:12', '2021-07-06 21:19:51');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'fcbe3730-6049-4975-a9e1-14b90d1fcc5a', 'Daffie', 'Rimbault', '2022-02-15 06:21:48', '2022-05-03 08:07:08');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '5dadcfe9-11ac-490e-a078-2aba86d5f3fc', 'Gib', 'Chasemore', '2022-06-02 10:15:42', '2022-02-17 06:28:02');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'b6d5914b-90b0-4a87-8664-58013b06cd09', 'Oralle', 'Lowndesbrough', '2022-05-20 02:15:45', '2022-05-22 03:31:01');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '0ce099be-02b5-4708-9bc8-ec3622777a57', 'Ranique', 'Videler', '2022-05-17 16:11:56', '2022-05-24 18:20:19');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'ec120e5c-c544-41e0-90ec-64b522820372', 'Cassandra', 'Duchant', '2021-12-15 03:04:47', '2021-12-06 21:05:47');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '0b061a51-33bb-4ccd-b588-6eb180a60427', 'Lesly', 'Clemente', '2021-09-23 03:47:31', '2021-11-25 20:19:36');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'a4c2d076-48d4-458b-8556-2477437de641', 'Ashlie', 'Klas', '2021-11-26 11:54:51', '2022-06-27 15:21:45');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', '0eb9e6e5-ad2f-4955-8ab5-2ff7725d5025', 'Staford', 'Bason', '2022-06-16 15:29:38', '2022-07-01 08:39:26');

INSERT INTO offender (avatar_url, summary, id, first_name, last_name, created_at, updated_at) 
VALUES ('https://i.pravatar.cc/300', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...', 'e3243aff-1b9c-4866-a491-1032f3c10193', 'Lyn', 'Ludlamme', '2021-07-29 03:33:34', '2022-06-21 19:08:26');


-- CASES
INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e324c43a-d540-4707-a51a-6b8852fd1926','36b5adf1-a0fd-4b02-ae51-51b4289d440c','bd6de7e1-7ecb-4125-9bdf-6c43981a163d','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '98cbd065-088b-43eb-8829-2c5a2ff81363','16b5adf1-a0fd-4b02-ae51-51b4289d440c','2c4f1cc0-82e3-44cd-af31-c2e1765fd014','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '238bc544-f9c5-4bc0-b59a-83455e824636','34b5adf1-a0fd-4b02-ae51-51b4289d440c','1a92591c-9804-4ca6-89fe-17059c8a6225','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e2f563bf-6a2f-4c42-b772-088ba970e6d9','33b5adf1-a0fd-4b02-ae51-51b4289d440c','fc019811-c852-448f-95a3-65892e837773','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'f31ddd44-b0a4-45cc-84ed-357eed4393bd','12b5adf1-a0fd-4b02-ae51-51b4289d440c','ff4d0312-58d9-4aa6-af51-bd2d6cd9c9bc','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '605e22ab-a481-4588-a5bc-40bcb67a6348','32b5cdf1-a0fd-4b02-ae51-51b4289d440c','09223771-dc09-4214-8513-44e3a997d05f','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '90ac3143-d34c-4a08-a1b0-d2831009ba8f','35b3cdf1-a0fd-4b02-ae51-51b4289d440c','436f3e84-9ed0-4ec0-aa52-d86c5ce55c48','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '9a69a62f-474b-45cd-a887-9c220a284dd4','3ab5adf1-a0fd-4b02-ae51-51b4289d440c','7cc0076c-3eaf-4c8a-908b-87a2aa9fd061','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '21d50fc5-6662-49a1-b756-59ab291ec1dc','32b5adf1-a0fd-4b02-ae51-51b4289d440c','8297051a-be87-42bf-8843-ed74ff73d7bd','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'b318047a-1f76-468e-84b2-32dee04c6855','11b5adf1-a0fd-4b02-ae51-51b4289d440c','e17d7c4b-a6f3-4a50-8ea2-ea076d0dca06','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '052d00f0-e9e5-4968-a1f0-d8610329a821','22b5adf1-a0fd-4b02-ae51-51b4289d440c','04ee19d3-201e-4faf-8da0-310d03e98325','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e4189ec9-df6f-4f16-8d06-6be161d31391','43b5adf1-a0fd-4b02-ae51-51b4289d440c','628b086c-c57d-4f82-b615-05ddd80ec3de','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'd0063d78-edd2-4fb5-badf-f791ea8d82cd','16b2adf1-a0fd-4b02-ae51-51b4289d440c','a1bb557f-9ccf-44a0-a364-59ac3a2a8478','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '86a344b0-f7a6-4544-b8e1-5fd7f2b9f387','66b5adf1-a0fd-4b02-ae51-51b4289d440c','7ee9ae47-7a61-4a2d-aff2-4ef230ed9e3c','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '3a1324b4-2cd2-4fc3-bd1f-ab8414004fbf','88b5adf1-a0fd-4b02-ae51-51b4289d440c','43776449-cf52-4676-9f77-d553d7d465ef','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '9d17567c-652e-43f1-8156-b952141e3efc','36b6adf1-a0fd-4b02-ae51-51b4289d440c','48e1f8e5-d29f-4b97-8c79-0764c937a22f','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '8cf52d84-b8c7-4fb9-ad8d-526eb6b2aaa6','36b1adf1-a0fd-4b02-ae51-51b4289d440c','28a2a7ee-96a7-4773-b9bf-60edbc564cfa','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'aac61e98-2166-40cf-956d-2bba7e937e2b','36b8adf1-a0fd-4b02-ae51-51b4289d440c','adb6a187-38ba-4caa-a46d-13ed9a286956','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e4648545-c1d0-4c51-ba22-be05360d60c2','36b52df1-a0fd-4b02-ae51-51b4289d440c','e1fcf2c1-9977-4b35-8b6d-64e3a2f45a0c','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '8810c96a-83dd-40fb-9ea3-bc6e1bf4c0ac','36b57df1-a0fd-4b02-ae51-51b4289d440c','3bb7a349-05cd-4b1d-a158-1d7e1ad78c8b','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c0c28f24-9edc-410f-b24e-6f2d2177491a','36b51df1-a0fd-4b02-ae51-51b4289d440c','87028313-4884-4965-9220-4fe5a869d185','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fcbe3730-6049-4975-a9e1-14b90d1fcc5a','36b5bdf1-a0fd-4b02-ae51-51b4289d440c','cf0ffda9-8d3b-4d41-8f29-86f927b718d1','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '5dadcfe9-11ac-490e-a078-2aba86d5f3fc','36b5cdf1-a0fd-4b02-ae51-51b4289d440c','8b758c1a-6d1a-4fde-8e57-c09ca28ee5a4','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'b6d5914b-90b0-4a87-8664-58013b06cd09','36b5ddf1-a0fd-4b02-ae51-51b4289d440c','7ce4f8a6-f7ed-410a-8a26-d88f949adfb8','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '0ce099be-02b5-4708-9bc8-ec3622777a57','36b59df1-a0fd-4b02-ae51-51b4289d440c','39b21a66-b82c-4491-ab7a-01447dce0075','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'ec120e5c-c544-41e0-90ec-64b522820372','36b53df1-a0fd-4b02-ae51-51b4289d440c','07e44887-080c-4857-b8a9-68970dda1b73','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '0b061a51-33bb-4ccd-b588-6eb180a60427','36b3adf1-a0fd-4b02-ae51-51b4289d440c','1a8e96c3-ef7e-472e-8bcc-c6c304a632ab','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'a4c2d076-48d4-458b-8556-2477437de641','36b55df1-a0fd-4b02-ae51-51b4289d440c','4052fd89-40d6-424e-bf81-645879ce8921','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '0eb9e6e5-ad2f-4955-8ab5-2ff7725d5025','36b2bdf1-a0fd-4b02-ae51-51b4289d440c','7d41523c-7a6e-48a0-a55d-9a92b183155a','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e3243aff-1b9c-4866-a491-1032f3c10093','36b1cdf1-a0fd-4b02-ae51-51b4289d440c','5dde2a7a-6a91-4058-a2bd-7505e87c75c7','closed', NOW(), NOW());



----------------------
-- ROCHESTER NY AREA
----------------------

-- GEOLOCATIONS
INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee01', 42.97690766,-77.78027053, (ST_SetSRID(ST_MakePoint(-77.78027053, 42.97690766), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee02', 42.83906959,-77.23940662, (ST_SetSRID(ST_MakePoint(-77.23940662, 42.83906959), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee03', 43.18208435,-76.99727199, (ST_SetSRID(ST_MakePoint(-76.99727199, 43.18208435), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee04', 42.78865360,-77.58683878, (ST_SetSRID(ST_MakePoint(-77.58683878, 42.78865360), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee05', 42.90413343,-77.86651596, (ST_SetSRID(ST_MakePoint(-77.86651596, 42.90413343), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee06', 43.58430755,-77.74035108, (ST_SetSRID(ST_MakePoint(-77.74035108, 43.58430755), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee07', 42.89271083,-78.01282118, (ST_SetSRID(ST_MakePoint(-78.01282118, 42.89271083), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee08', 42.95594051,-78.06203730, (ST_SetSRID(ST_MakePoint(-78.06203730, 42.95594051), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee09', 43.47539687,-77.75439300, (ST_SetSRID(ST_MakePoint(-77.75439300, 43.47539687), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee10', 42.80590304,-77.46842651, (ST_SetSRID(ST_MakePoint(-77.46842651, 42.80590304), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee11', 42.88070687,-77.28672487, (ST_SetSRID(ST_MakePoint(-77.28672487, 42.88070687), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee12', 43.12467956,-78.17125484, (ST_SetSRID(ST_MakePoint(-78.17125484, 43.12467956), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee13', 43.49984044,-77.31930094, (ST_SetSRID(ST_MakePoint(-77.31930094, 43.49984044), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee14', 43.46324080,-77.36517046, (ST_SetSRID(ST_MakePoint(-77.36517046, 43.46324080), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee15', 43.56974723,-77.60456986, (ST_SetSRID(ST_MakePoint(-77.60456986, 43.56974723), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee16', 42.74315388,-77.65585408, (ST_SetSRID(ST_MakePoint(-77.65585408, 42.74315388), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee17', 43.30366751,-77.12390399, (ST_SetSRID(ST_MakePoint(-77.12390399, 43.30366751), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee18', 43.58959479,-77.51959555, (ST_SetSRID(ST_MakePoint(-77.51959555, 43.58959479), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee19', 43.00786495,-77.12836251, (ST_SetSRID(ST_MakePoint(-77.12836251, 43.00786495), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee20', 42.74050011,-77.63732159, (ST_SetSRID(ST_MakePoint(-77.63732159, 42.74050011), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee21', 43.39528236,-77.56232311, (ST_SetSRID(ST_MakePoint(-77.56232311, 43.39528236), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee22', 43.18426011,-77.04869265, (ST_SetSRID(ST_MakePoint(-77.04869265, 43.18426011), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee23', 43.10448170,-77.20501105, (ST_SetSRID(ST_MakePoint(-77.20501105, 43.10448170), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee24', 43.26407623,-77.79360330, (ST_SetSRID(ST_MakePoint(-77.79360330, 43.26407623), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee25', 43.20781162,-77.61135165, (ST_SetSRID(ST_MakePoint(-77.61135165, 43.20781162), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee26', 43.08007243,-77.16075325, (ST_SetSRID(ST_MakePoint(-77.16075325, 43.08007243), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee27', 43.56541381,-77.67866450, (ST_SetSRID(ST_MakePoint(-77.67866450, 43.56541381), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee28', 43.00339963,-77.72846568, (ST_SetSRID(ST_MakePoint(-77.72846568, 43.00339963), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee29', 43.05729016,-77.08649913, (ST_SetSRID(ST_MakePoint(-77.08649913, 43.05729016), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee30', 43.09023974,-77.84069826, (ST_SetSRID(ST_MakePoint(-77.84069826, 43.09023974), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee31', 43.29832787,-77.89726275, (ST_SetSRID(ST_MakePoint(-77.89726275, 43.29832787), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee32', 43.11801199,-78.13897428, (ST_SetSRID(ST_MakePoint(-78.13897428, 43.11801199), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee33', 42.93174180,-77.17577072, (ST_SetSRID(ST_MakePoint(-77.17577072, 42.93174180), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee34', 42.96554816,-77.98789090, (ST_SetSRID(ST_MakePoint(-77.98789090, 42.96554816), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee35', 43.24851669,-77.93254297, (ST_SetSRID(ST_MakePoint(-77.93254297, 43.24851669), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee36', 43.20941032,-77.75955208, (ST_SetSRID(ST_MakePoint(-77.75955208, 43.20941032), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee37', 43.49977016,-77.73845414, (ST_SetSRID(ST_MakePoint(-77.73845414, 43.49977016), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee38', 43.58523460,-77.60834076, (ST_SetSRID(ST_MakePoint(-77.60834076, 43.58523460), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee39', 42.85578685,-77.65821268, (ST_SetSRID(ST_MakePoint(-77.65821268, 42.85578685), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee40', 43.37946961,-77.26764677, (ST_SetSRID(ST_MakePoint(-77.26764677, 43.37946961), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee41', 43.31743723,-77.90658203, (ST_SetSRID(ST_MakePoint(-77.90658203, 43.31743723), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee42', 43.10927644,-77.09563648, (ST_SetSRID(ST_MakePoint(-77.09563648, 43.10927644), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee43', 43.21561249,-77.70803315, (ST_SetSRID(ST_MakePoint(-77.70803315, 43.21561249), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee44', 42.99971631,-77.38223133, (ST_SetSRID(ST_MakePoint(-77.38223133, 42.99971631), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee45', 42.90575403,-77.84977661, (ST_SetSRID(ST_MakePoint(-77.84977661, 42.90575403), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee46', 43.00114799,-78.07186480, (ST_SetSRID(ST_MakePoint(-78.07186480, 43.00114799), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee47', 42.99075998,-77.43921655, (ST_SetSRID(ST_MakePoint(-77.43921655, 42.99075998), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee48', 43.25545620,-78.09282643, (ST_SetSRID(ST_MakePoint(-78.09282643, 43.25545620), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee49', 42.99237595,-77.67621918, (ST_SetSRID(ST_MakePoint(-77.67621918, 42.99237595), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3fa7852b-82e4-4bbc-b3a3-e3e94205ee50', 42.92969039,-77.86312624, (ST_SetSRID(ST_MakePoint(-77.86312624, 42.92969039), 4326)));


-- OFFENDERS
INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('a131a4f1-c5f5-4a07-a274-3223a404095a', 'Daile', 'Rippon', '1/5/2022', '9/3/2021', 'https://robohash.org/nihilconsequaturdeleniti.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('851cf48b-27d7-47e7-9074-ebda66f604aa', 'Janina', 'Wisker', '6/7/2022', '11/10/2021', 'https://robohash.org/adexcupiditate.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('4bb5a73d-1118-4af7-b686-0e0586ad2b06', 'Marie', 'Seivwright', '8/13/2021', '3/17/2022', 'https://robohash.org/placeatundequi.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('e0e5f5b0-8599-4272-b6dd-14e2eac9eb99', 'Barri', 'Willbourne', '2/12/2022', '11/23/2021', 'https://robohash.org/undecumqueexercitationem.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('debafe42-504b-4929-83ff-a4b02ffb22d2', 'Jeana', 'Jerams', '4/20/2022', '4/22/2022', 'https://robohash.org/teneturquidemet.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('f8ab8cc0-6dbc-4dea-b86e-b158522f32a0', 'Adolph', 'Lavens', '5/12/2022', '4/25/2022', 'https://robohash.org/aliquambeataeet.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('dc3ac6fa-e180-48c2-95ad-33a108d64218', 'Jewell', 'Pleaden', '12/24/2021', '8/5/2022', 'https://robohash.org/eumvoluptaterem.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('f5499565-1cff-4247-965c-15c8222c0db5', 'Raimundo', 'Seally', '5/8/2022', '5/31/2022', 'https://robohash.org/nequeevenietsuscipit.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c8cacdb8-8716-4949-bcaf-b80a58c6394d', 'Pancho', 'Klejin', '7/6/2022', '5/21/2022', 'https://robohash.org/sedmollitiadolor.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('ba432cc9-4596-4854-97b5-c18cf97c0009', 'Marena', 'Iskowitz', '12/11/2021', '11/1/2021', 'https://robohash.org/mollitiasednisi.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('34828031-1b2f-4623-8110-dffa28f656c3', 'Myrilla', 'Peasgood', '5/7/2022', '6/18/2022', 'https://robohash.org/eaqueremreprehenderit.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('2baec2ce-f104-4b2d-8068-0c31f53fb55c', 'Arlen', 'Wimmer', '2/26/2022', '12/18/2021', 'https://robohash.org/eumquiea.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('a7013aa6-ed55-4b2a-9aba-dec848508989', 'Shurwood', 'Lampaert', '9/26/2021', '7/30/2022', 'https://robohash.org/perspiciatissaepequia.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('7e59e29c-c1c0-40e2-8e0d-f0dd6292e79a', 'Ronda', 'Isted', '8/26/2021', '9/7/2021', 'https://robohash.org/autvitaevoluptas.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('4ce36a50-6dc4-4901-aba4-0401e3670bba', 'Ynez', 'Pautot', '9/20/2021', '12/6/2021', 'https://robohash.org/doloremerrorsit.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('5beed044-9ecb-4d47-83ef-2795f4b47106', 'Kalina', 'Salsbury', '12/14/2021', '8/2/2022', 'https://robohash.org/dolorumsuntiusto.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('e1f1ac21-94fa-4b1a-b907-3b3fabd5d61e', 'Kiele', 'Witul', '12/7/2021', '12/18/2021', 'https://robohash.org/quibusdamfaceresapiente.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('bfafc202-afd7-417f-a4be-64b13530b136', 'Perla', 'Roskell', '4/3/2022', '6/15/2022', 'https://robohash.org/doloribusquoet.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('2def3d37-74e7-4c7a-99c8-3e5c750ad47e', 'Randie', 'Boyn', '1/24/2022', '5/7/2022', 'https://robohash.org/ettemporereiciendis.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('3e8d1a85-ee7e-4c55-8bb3-b10158439ad4', 'Sharlene', 'Beeck', '11/9/2021', '6/13/2022', 'https://robohash.org/istedoloreos.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('9922a5b0-cb0c-4b20-8a59-03429a8fd271', 'Lockwood', 'Briers', '11/6/2021', '5/22/2022', 'https://robohash.org/quitemporequibusdam.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('7c287216-49a6-4b36-8fc3-ec6f5fc01e50', 'Domini', 'Blazhevich', '5/23/2022', '4/21/2022', 'https://robohash.org/quiquaerateos.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('27fbfad5-ad97-46a9-86eb-3b73b533685a', 'Booth', 'Batchelor', '12/21/2021', '2/24/2022', 'https://robohash.org/cumquout.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('31cbcc48-e1c8-4248-a8b7-f372e73578ae', 'Estevan', 'Loadman', '6/29/2022', '10/2/2021', 'https://robohash.org/nesciuntducimusconsequuntur.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('6e24044e-1c9f-469f-bb31-eee8cca8c8a8', 'Bent', 'Kopke', '4/2/2022', '9/5/2021', 'https://robohash.org/aperiamtotamest.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('911202bd-4d13-4868-9d90-7f19031cecd3', 'Roselia', 'OGleasane', '9/25/2021', '11/17/2021', 'https://robohash.org/evenietsuscipitaspernatur.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('a22b37ec-ebbe-44d2-ae2b-58b9b4aca9fe', 'Tristan', 'Mulholland', '6/5/2022', '6/17/2022', 'https://robohash.org/molestiasnonquaerat.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('a8df77f0-49ea-42b0-b35a-715226230628', 'Persis', 'Tenniswood', '9/8/2021', '4/7/2022', 'https://robohash.org/quamaliquamanimi.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('26fa52fa-2570-461c-83de-f489ac8f9b2c', 'Sophi', 'Rainard', '7/29/2022', '12/6/2021', 'https://robohash.org/numquamvelrepellendus.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('a8715d50-274d-47f5-b19f-379555029e0f', 'Maxi', 'Tomney', '7/26/2022', '7/9/2022', 'https://robohash.org/doloresteneturex.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('38cb295f-1847-4a83-b801-3d82877f5dca', 'Gardner', 'Frowde', '8/13/2021', '5/5/2022', 'https://robohash.org/etnisideleniti.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fbd9e74f-db9b-4c84-9f56-c871c56169ba', 'Orlando', 'Conrath', '8/24/2021', '12/24/2021', 'https://robohash.org/eumetquisquam.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('266a67b4-8bd9-42e4-a3ff-4be77ad0e4ea', 'Hilarius', 'Imlacke', '10/26/2021', '1/17/2022', 'https://robohash.org/recusandaenihileveniet.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('f9f74807-7dca-4edb-b676-9b09912fc922', 'Darcy', 'Beckingham', '11/12/2021', '3/4/2022', 'https://robohash.org/eosvoluptatemoccaecati.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c3fae077-05aa-4612-8167-752b6e22c18e', 'Nicki', 'Moyser', '11/25/2021', '7/31/2022', 'https://robohash.org/facilisquaeratfugit.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('13272acf-1446-41c9-bf19-f855b0a25bcd', 'Kacey', 'Halwood', '9/2/2021', '8/5/2022', 'https://robohash.org/oditvoluptatemperferendis.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c6b607b9-36e4-4b44-a472-a1d205551613', 'Janeczka', 'MacArdle', '4/30/2022', '12/22/2021', 'https://robohash.org/minimaimpeditmaxime.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('ba350adf-563e-486a-8561-71ffa1700432', 'Dorothy', 'Eseler', '2/14/2022', '4/26/2022', 'https://robohash.org/excepturitemporibusvitae.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('3b600f24-4415-4eff-9977-a341d679d31d', 'Nerissa', 'Chadwell', '6/17/2022', '4/13/2022', 'https://robohash.org/corporisinventoreperferendis.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('8dab5ae2-f90e-4c2b-ad16-d39ae10f39df', 'Giselle', 'Salliere', '11/29/2021', '1/17/2022', 'https://robohash.org/autestqui.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('5db6b6f1-283a-4d2f-8b4f-fb26639ca779', 'Noam', 'Minogue', '4/12/2022', '4/21/2022', 'https://robohash.org/utrepellendusquam.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('97374cfa-8b01-478c-aa11-26cb8c66a918', 'Hesther', 'Talby', '5/4/2022', '8/16/2021', 'https://robohash.org/eosveritatissit.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('efcb6994-7276-4657-a291-038e5a1c4826', 'Welch', 'Valett', '8/5/2022', '7/11/2022', 'https://robohash.org/doloremqueexqui.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('534b9443-f624-40ec-8c05-0cdfef4d21ab', 'Randi', 'Guislin', '2/1/2022', '4/25/2022', 'https://robohash.org/idessererum.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('4d9fdd65-7908-417c-96b0-9fb86ac34028', 'Farrel', 'Madgewick', '7/18/2022', '10/4/2021', 'https://robohash.org/sitenimfugiat.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('e590a031-86db-4d72-acfd-95abfa81feb4', 'Bordy', 'Strooband', '5/15/2022', '6/15/2022', 'https://robohash.org/etnumquamtenetur.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('70fd5eb3-0b53-4c58-8358-e2b02cc444b0', 'Gabey', 'Loweth', '11/15/2021', '12/21/2021', 'https://robohash.org/sequidoloribuscorrupti.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('a363f796-4d34-41c9-9971-1a23bc11df8d', 'Ulick', 'Yglesia', '3/30/2022', '1/31/2022', 'https://robohash.org/pariaturdistinctiorecusandae.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('a351d2c4-a86f-4934-b2ab-c9e8dcab180f', 'Mason', 'Feaveer', '2/4/2022', '12/27/2021', 'https://robohash.org/dictaperspiciatisillo.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('bf8fa896-c0ba-4706-b4f4-58055ba8a369', 'Zahara', 'Sydry', '6/26/2022', '4/25/2022', 'https://robohash.org/sapienteoccaecatiest.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');


-- CASES
INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'a131a4f1-c5f5-4a07-a274-3223a404095a','3fa7852b-82e4-4bbc-b3a3-e3e94205ee01','9293c6ab-e6eb-4e97-bc1b-a6441c3b8701','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '851cf48b-27d7-47e7-9074-ebda66f604aa','3fa7852b-82e4-4bbc-b3a3-e3e94205ee02','9293c6ab-e6eb-4e97-bc1b-a6441c3b8702','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '4bb5a73d-1118-4af7-b686-0e0586ad2b06','3fa7852b-82e4-4bbc-b3a3-e3e94205ee03','9293c6ab-e6eb-4e97-bc1b-a6441c3b8703','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e0e5f5b0-8599-4272-b6dd-14e2eac9eb99','3fa7852b-82e4-4bbc-b3a3-e3e94205ee04','9293c6ab-e6eb-4e97-bc1b-a6441c3b8704','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'debafe42-504b-4929-83ff-a4b02ffb22d2','3fa7852b-82e4-4bbc-b3a3-e3e94205ee05','9293c6ab-e6eb-4e97-bc1b-a6441c3b8705','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'f8ab8cc0-6dbc-4dea-b86e-b158522f32a0','3fa7852b-82e4-4bbc-b3a3-e3e94205ee06','9293c6ab-e6eb-4e97-bc1b-a6441c3b8706','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'dc3ac6fa-e180-48c2-95ad-33a108d64218','3fa7852b-82e4-4bbc-b3a3-e3e94205ee07','9293c6ab-e6eb-4e97-bc1b-a6441c3b8707','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'f5499565-1cff-4247-965c-15c8222c0db5','3fa7852b-82e4-4bbc-b3a3-e3e94205ee08','9293c6ab-e6eb-4e97-bc1b-a6441c3b8708','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c8cacdb8-8716-4949-bcaf-b80a58c6394d','3fa7852b-82e4-4bbc-b3a3-e3e94205ee09','9293c6ab-e6eb-4e97-bc1b-a6441c3b8709','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'ba432cc9-4596-4854-97b5-c18cf97c0009','3fa7852b-82e4-4bbc-b3a3-e3e94205ee10','9293c6ab-e6eb-4e97-bc1b-a6441c3b8710','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '34828031-1b2f-4623-8110-dffa28f656c3','3fa7852b-82e4-4bbc-b3a3-e3e94205ee11','9293c6ab-e6eb-4e97-bc1b-a6441c3b8711','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '2baec2ce-f104-4b2d-8068-0c31f53fb55c','3fa7852b-82e4-4bbc-b3a3-e3e94205ee12','9293c6ab-e6eb-4e97-bc1b-a6441c3b8712','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'a7013aa6-ed55-4b2a-9aba-dec848508989','3fa7852b-82e4-4bbc-b3a3-e3e94205ee13','9293c6ab-e6eb-4e97-bc1b-a6441c3b8713','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '7e59e29c-c1c0-40e2-8e0d-f0dd6292e79a','3fa7852b-82e4-4bbc-b3a3-e3e94205ee14','9293c6ab-e6eb-4e97-bc1b-a6441c3b8714','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '4ce36a50-6dc4-4901-aba4-0401e3670bba','3fa7852b-82e4-4bbc-b3a3-e3e94205ee15','9293c6ab-e6eb-4e97-bc1b-a6441c3b8715','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '5beed044-9ecb-4d47-83ef-2795f4b47106','3fa7852b-82e4-4bbc-b3a3-e3e94205ee16','9293c6ab-e6eb-4e97-bc1b-a6441c3b8716','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e1f1ac21-94fa-4b1a-b907-3b3fabd5d61e','3fa7852b-82e4-4bbc-b3a3-e3e94205ee17','9293c6ab-e6eb-4e97-bc1b-a6441c3b8717','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'bfafc202-afd7-417f-a4be-64b13530b136','3fa7852b-82e4-4bbc-b3a3-e3e94205ee18','9293c6ab-e6eb-4e97-bc1b-a6441c3b8718','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '2def3d37-74e7-4c7a-99c8-3e5c750ad47e','3fa7852b-82e4-4bbc-b3a3-e3e94205ee19','9293c6ab-e6eb-4e97-bc1b-a6441c3b8719','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '3e8d1a85-ee7e-4c55-8bb3-b10158439ad4','3fa7852b-82e4-4bbc-b3a3-e3e94205ee20','9293c6ab-e6eb-4e97-bc1b-a6441c3b8720','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '9922a5b0-cb0c-4b20-8a59-03429a8fd271','3fa7852b-82e4-4bbc-b3a3-e3e94205ee21','9293c6ab-e6eb-4e97-bc1b-a6441c3b8721','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '7c287216-49a6-4b36-8fc3-ec6f5fc01e50','3fa7852b-82e4-4bbc-b3a3-e3e94205ee22','9293c6ab-e6eb-4e97-bc1b-a6441c3b8722','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '27fbfad5-ad97-46a9-86eb-3b73b533685a','3fa7852b-82e4-4bbc-b3a3-e3e94205ee23','9293c6ab-e6eb-4e97-bc1b-a6441c3b8723','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '31cbcc48-e1c8-4248-a8b7-f372e73578ae','3fa7852b-82e4-4bbc-b3a3-e3e94205ee24','9293c6ab-e6eb-4e97-bc1b-a6441c3b8724','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '6e24044e-1c9f-469f-bb31-eee8cca8c8a8','3fa7852b-82e4-4bbc-b3a3-e3e94205ee25','9293c6ab-e6eb-4e97-bc1b-a6441c3b8725','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '911202bd-4d13-4868-9d90-7f19031cecd3','3fa7852b-82e4-4bbc-b3a3-e3e94205ee26','9293c6ab-e6eb-4e97-bc1b-a6441c3b8726','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'a22b37ec-ebbe-44d2-ae2b-58b9b4aca9fe','3fa7852b-82e4-4bbc-b3a3-e3e94205ee27','9293c6ab-e6eb-4e97-bc1b-a6441c3b8727','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'a8df77f0-49ea-42b0-b35a-715226230628','3fa7852b-82e4-4bbc-b3a3-e3e94205ee28','9293c6ab-e6eb-4e97-bc1b-a6441c3b8728','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '26fa52fa-2570-461c-83de-f489ac8f9b2c','3fa7852b-82e4-4bbc-b3a3-e3e94205ee29','9293c6ab-e6eb-4e97-bc1b-a6441c3b8729','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'a8715d50-274d-47f5-b19f-379555029e0f','3fa7852b-82e4-4bbc-b3a3-e3e94205ee30','9293c6ab-e6eb-4e97-bc1b-a6441c3b8730','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '38cb295f-1847-4a83-b801-3d82877f5dca','3fa7852b-82e4-4bbc-b3a3-e3e94205ee31','9293c6ab-e6eb-4e97-bc1b-a6441c3b8731','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fbd9e74f-db9b-4c84-9f56-c871c56169ba','3fa7852b-82e4-4bbc-b3a3-e3e94205ee32','9293c6ab-e6eb-4e97-bc1b-a6441c3b8732','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '266a67b4-8bd9-42e4-a3ff-4be77ad0e4ea','3fa7852b-82e4-4bbc-b3a3-e3e94205ee33','9293c6ab-e6eb-4e97-bc1b-a6441c3b8733','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'f9f74807-7dca-4edb-b676-9b09912fc922','3fa7852b-82e4-4bbc-b3a3-e3e94205ee34','9293c6ab-e6eb-4e97-bc1b-a6441c3b8734','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c3fae077-05aa-4612-8167-752b6e22c18e','3fa7852b-82e4-4bbc-b3a3-e3e94205ee35','9293c6ab-e6eb-4e97-bc1b-a6441c3b8735','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '13272acf-1446-41c9-bf19-f855b0a25bcd','3fa7852b-82e4-4bbc-b3a3-e3e94205ee36','9293c6ab-e6eb-4e97-bc1b-a6441c3b8736','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c6b607b9-36e4-4b44-a472-a1d205551613','3fa7852b-82e4-4bbc-b3a3-e3e94205ee37','9293c6ab-e6eb-4e97-bc1b-a6441c3b8737','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'ba350adf-563e-486a-8561-71ffa1700432','3fa7852b-82e4-4bbc-b3a3-e3e94205ee38','9293c6ab-e6eb-4e97-bc1b-a6441c3b8738','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '3b600f24-4415-4eff-9977-a341d679d31d','3fa7852b-82e4-4bbc-b3a3-e3e94205ee39','9293c6ab-e6eb-4e97-bc1b-a6441c3b8739','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '8dab5ae2-f90e-4c2b-ad16-d39ae10f39df','3fa7852b-82e4-4bbc-b3a3-e3e94205ee40','9293c6ab-e6eb-4e97-bc1b-a6441c3b8740','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '5db6b6f1-283a-4d2f-8b4f-fb26639ca779','3fa7852b-82e4-4bbc-b3a3-e3e94205ee41','9293c6ab-e6eb-4e97-bc1b-a6441c3b8741','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '97374cfa-8b01-478c-aa11-26cb8c66a918','3fa7852b-82e4-4bbc-b3a3-e3e94205ee42','9293c6ab-e6eb-4e97-bc1b-a6441c3b8742','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'efcb6994-7276-4657-a291-038e5a1c4826','3fa7852b-82e4-4bbc-b3a3-e3e94205ee43','9293c6ab-e6eb-4e97-bc1b-a6441c3b8743','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '534b9443-f624-40ec-8c05-0cdfef4d21ab','3fa7852b-82e4-4bbc-b3a3-e3e94205ee44','9293c6ab-e6eb-4e97-bc1b-a6441c3b8744','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '4d9fdd65-7908-417c-96b0-9fb86ac34028','3fa7852b-82e4-4bbc-b3a3-e3e94205ee45','9293c6ab-e6eb-4e97-bc1b-a6441c3b8745','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e590a031-86db-4d72-acfd-95abfa81feb4','3fa7852b-82e4-4bbc-b3a3-e3e94205ee46','9293c6ab-e6eb-4e97-bc1b-a6441c3b8746','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '70fd5eb3-0b53-4c58-8358-e2b02cc444b0','3fa7852b-82e4-4bbc-b3a3-e3e94205ee47','9293c6ab-e6eb-4e97-bc1b-a6441c3b8747','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'a363f796-4d34-41c9-9971-1a23bc11df8d','3fa7852b-82e4-4bbc-b3a3-e3e94205ee48','9293c6ab-e6eb-4e97-bc1b-a6441c3b8748','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'a351d2c4-a86f-4934-b2ab-c9e8dcab180f','3fa7852b-82e4-4bbc-b3a3-e3e94205ee49','9293c6ab-e6eb-4e97-bc1b-a6441c3b8749','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'bf8fa896-c0ba-4706-b4f4-58055ba8a369','3fa7852b-82e4-4bbc-b3a3-e3e94205ee50','9293c6ab-e6eb-4e97-bc1b-a6441c3b8750','closed', NOW(), NOW());


---------------------
-- ORLANDO AREA
---------------------

-- GEO LOCATIONS
INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc01', 28.38135805, -81.04129574, (ST_SetSRID(ST_MakePoint(-81.04129574, 28.38135805), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc02', 28.95329997, -81.36887410, (ST_SetSRID(ST_MakePoint(-81.36887410, 28.95329997), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc03', 28.66854339, -81.62733139, (ST_SetSRID(ST_MakePoint(-81.62733139, 28.66854339), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc04', 28.23340603, -81.42145090, (ST_SetSRID(ST_MakePoint(-81.42145090, 28.23340603), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc05', 28.74888614, -81.70285219, (ST_SetSRID(ST_MakePoint(-81.70285219, 28.74888614), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc06', 28.32195972, -81.72701803, (ST_SetSRID(ST_MakePoint(-81.72701803, 28.32195972), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc07', 28.27838675, -81.53440273, (ST_SetSRID(ST_MakePoint(-81.53440273, 28.27838675), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc08', 28.71553295, -81.14901026, (ST_SetSRID(ST_MakePoint(-81.14901026, 28.71553295), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc09', 28.13400848, -81.53057464, (ST_SetSRID(ST_MakePoint(-81.53057464, 28.13400848), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc10', 28.75471973, -81.39120868, (ST_SetSRID(ST_MakePoint(-81.39120868, 28.75471973), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc11', 28.61989100, -81.47262932, (ST_SetSRID(ST_MakePoint(-81.47262932, 28.61989100), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc12', 28.34061855, -81.44979478, (ST_SetSRID(ST_MakePoint(-81.44979478, 28.34061855), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc13', 28.65733872, -81.27814268, (ST_SetSRID(ST_MakePoint(-81.27814268, 28.65733872), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc14', 28.61531840, -81.65923110, (ST_SetSRID(ST_MakePoint(-81.65923110, 28.61531840), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc15', 28.51480292, -81.87188020, (ST_SetSRID(ST_MakePoint(-81.87188020, 28.51480292), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc16', 28.17488518, -81.64249575, (ST_SetSRID(ST_MakePoint(-81.64249575, 28.17488518), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc17', 28.42109188, -81.70578427, (ST_SetSRID(ST_MakePoint(-81.70578427, 28.42109188), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc18', 28.65126721, -81.32553865, (ST_SetSRID(ST_MakePoint(-81.32553865, 28.65126721), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc19', 28.56628810, -81.67540256, (ST_SetSRID(ST_MakePoint(-81.67540256, 28.56628810), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc20', 28.30243576, -81.78114318, (ST_SetSRID(ST_MakePoint(-81.78114318, 28.30243576), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc21', 28.61092566, -81.47154409, (ST_SetSRID(ST_MakePoint(-81.47154409, 28.61092566), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc22', 28.52729867, -81.75178063, (ST_SetSRID(ST_MakePoint(-81.75178063, 28.52729867), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc23', 28.88946050, -81.47922534, (ST_SetSRID(ST_MakePoint(-81.47922534, 28.88946050), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc24', 28.74876761, -81.48965198, (ST_SetSRID(ST_MakePoint(-81.48965198, 28.74876761), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc25', 28.41137833, -81.25593951, (ST_SetSRID(ST_MakePoint(-81.25593951, 28.41137833), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc26', 28.84458240, -81.35428122, (ST_SetSRID(ST_MakePoint(-81.35428122, 28.84458240), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc27', 28.79847922, -81.02715740, (ST_SetSRID(ST_MakePoint(-81.02715740, 28.79847922), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc28', 28.52084830, -81.27030134, (ST_SetSRID(ST_MakePoint(-81.27030134, 28.52084830), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc29', 28.33204513, -81.66780620, (ST_SetSRID(ST_MakePoint(-81.66780620, 28.33204513), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc30', 28.20675596, -81.34214263, (ST_SetSRID(ST_MakePoint(-81.34214263, 28.20675596), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc31', 28.60293501, -81.51463398, (ST_SetSRID(ST_MakePoint(-81.51463398, 28.60293501), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc32', 28.40328351, -81.83914947, (ST_SetSRID(ST_MakePoint(-81.83914947, 28.40328351), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc33', 28.78858993, -81.57301584, (ST_SetSRID(ST_MakePoint(-81.57301584, 28.78858993), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc34', 28.31476933, -81.30184084, (ST_SetSRID(ST_MakePoint(-81.30184084, 28.31476933), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc35', 28.90460005, -81.53671989, (ST_SetSRID(ST_MakePoint(-81.53671989, 28.90460005), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc36', 28.58753416, -81.03430328, (ST_SetSRID(ST_MakePoint(-81.03430328, 28.58753416), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc37', 28.68046109, -81.22935956, (ST_SetSRID(ST_MakePoint(-81.22935956, 28.68046109), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc38', 28.80875625, -81.68229460, (ST_SetSRID(ST_MakePoint(-81.68229460, 28.80875625), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc39', 28.84890387, -81.64975802, (ST_SetSRID(ST_MakePoint(-81.64975802, 28.84890387), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc40', 28.68892325, -81.10004022, (ST_SetSRID(ST_MakePoint(-81.10004022, 28.68892325), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc41', 28.72493410, -81.21606578, (ST_SetSRID(ST_MakePoint(-81.21606578, 28.72493410), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc42', 28.41378117, -81.62080202, (ST_SetSRID(ST_MakePoint(-81.62080202, 28.41378117), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc43', 28.65162799, -81.45396797, (ST_SetSRID(ST_MakePoint(28.65162799, -81.45396797), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc44', 28.58221724, -81.46229125, (ST_SetSRID(ST_MakePoint(-81.46229125, 28.58221724), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc45', 28.72637181, -81.57518486, (ST_SetSRID(ST_MakePoint(-81.57518486, 28.72637181), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc46', 28.33301548, -81.63510298, (ST_SetSRID(ST_MakePoint(-81.63510298, 28.33301548), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc47', 28.70527163, -81.54105209, (ST_SetSRID(ST_MakePoint(-81.54105209, 28.70527163), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc48', 28.50506084, -81.85458105, (ST_SetSRID(ST_MakePoint(-81.85458105, 28.50506084), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc49', 28.86439214, -81.16066515, (ST_SetSRID(ST_MakePoint(-81.16066515, 28.86439214), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('42649166-aac5-4b34-a4f5-e62be0becc50', 28.61035696, -81.18194579, (ST_SetSRID(ST_MakePoint(-81.18194579, 28.61035696), 4326)));


-- OFFENDERS
INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('ac03e634-5462-4c95-a9df-cfc2d634283d', 'Giovanna', 'Lohmeyer', '12/3/2021', '11/30/2021', 'https://robohash.org/enimminuscorporis.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('3b5ac8b5-5531-4185-ad0a-af1d9a1fde1a', 'Law', 'Smyley', '5/5/2022', '1/23/2022', 'https://robohash.org/delenitinostrumnobis.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('36261f50-9f28-432a-b32e-44d8fc00d31a', 'Carlos', 'Broad', '8/2/2022', '10/5/2021', 'https://robohash.org/sitquianesciunt.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('174cd652-121c-4a5d-b8ae-fe2b614830fe', 'Bobbette', 'Lucus', '8/22/2021', '1/3/2022', 'https://robohash.org/voluptasetsuscipit.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('991e8e0f-364c-46c5-ae24-031117c6df9c', 'Husain', 'Vasechkin', '12/4/2021', '3/10/2022', 'https://robohash.org/quasidoloremquenatus.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('02f6ca42-5319-4c3a-bc9a-d9458f07db7d', 'Marvin', 'Dally', '12/24/2021', '2/11/2022', 'https://robohash.org/velcommodifugiat.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('430c5d77-5209-4ad3-9495-bfcff8022353', 'Nancey', 'Semark', '4/3/2022', '11/23/2021', 'https://robohash.org/enimlaboreut.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('7c811c10-bb7c-45bd-b5ba-ba1dee09eb37', 'Rodie', 'Brizell', '1/31/2022', '4/26/2022', 'https://robohash.org/etquisimpedit.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('2e53dafc-6d98-4a74-b1e6-e89707606706', 'Norton', 'Winterbottom', '11/5/2021', '1/30/2022', 'https://robohash.org/atqueisteet.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('ac290702-47b9-41b7-ab72-56ed583f15e0', 'Erhart', 'Barrar', '2/21/2022', '4/7/2022', 'https://robohash.org/estisteofficia.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('6461a70c-6702-4d37-8337-210d98509603', 'Aubrette', 'Duligall', '6/26/2022', '1/22/2022', 'https://robohash.org/suntlaborevoluptatem.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('2d8a0b8a-6499-4c19-b98c-816f2e7ea81d', 'Tab', 'Georgeon', '3/29/2022', '2/14/2022', 'https://robohash.org/istequiabeatae.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('7bb523cb-0eda-47b5-9dc8-706461f4accd', 'Bastian', 'Woolley', '12/27/2021', '11/27/2021', 'https://robohash.org/autemnesciuntreiciendis.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('34786f8e-9895-45b5-b6fc-bc7dd986b45b', 'Geordie', 'Steaning', '3/27/2022', '11/12/2021', 'https://robohash.org/quiaassumendaeum.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('1a7d3317-a013-4959-b32d-c4282cb7b1e8', 'Roma', 'Brownsword', '2/21/2022', '9/4/2021', 'https://robohash.org/veliteteos.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('42a1c9ab-a96b-4f37-ad61-5765b4c442d4', 'Fabian', 'Gaunson', '10/4/2021', '1/23/2022', 'https://robohash.org/doloribusanimiqui.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('e0066784-644f-4197-ab79-4deab35f228b', 'Denyse', 'Suttling', '10/18/2021', '2/23/2022', 'https://robohash.org/facerenonquod.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('7c3fa210-39c1-4696-a1d1-95a513f52201', 'Fawnia', 'MacVay', '4/10/2022', '9/11/2021', 'https://robohash.org/inestdolorum.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('17da8a1b-55a9-450a-abf6-2f04a84213d0', 'Kinnie', 'Marvell', '12/18/2021', '11/10/2021', 'https://robohash.org/aliascommodiadipisci.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('581b0906-5b43-425f-a3c1-6ec09a50f114', 'Terrell', 'Brandon', '2/12/2022', '4/11/2022', 'https://robohash.org/dolorquisearum.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('f94a621b-b76c-484f-85ad-20db75dadaf4', 'Juli', 'Gabotti', '10/22/2021', '10/12/2021', 'https://robohash.org/aspernaturnesciuntquod.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('59103bd7-a7fc-478d-a58f-c35932c52b32', 'Gardner', 'Dyte', '10/11/2021', '9/17/2021', 'https://robohash.org/etevenietalias.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('ca6c8eef-f154-470c-84ab-df169da073d6', 'Giulio', 'Cloney', '10/14/2021', '1/28/2022', 'https://robohash.org/quidempariatureius.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('20d3f32e-3910-4307-8efc-14606f7c4061', 'Tomlin', 'Cage', '5/7/2022', '6/27/2022', 'https://robohash.org/quoestoptio.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('7a95561c-4556-49f1-ab0e-6ab732da21f4', 'Vevay', 'Normanvill', '3/20/2022', '8/15/2021', 'https://robohash.org/voluptasrationeconsequuntur.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('4d386050-270d-4b1f-8928-7c2185c6fe08', 'Rodrique', 'Shoorbrooke', '10/24/2021', '12/31/2021', 'https://robohash.org/repudiandaeetaut.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('7813dcb6-477d-4d88-a589-55a1c7143bf2', 'Cindelyn', 'Phripp', '1/6/2022', '8/8/2021', 'https://robohash.org/itaqueprovidentofficia.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('6a347530-5dfe-4a36-8700-f30ea2bb6045', 'Clarie', 'Geeves', '4/13/2022', '7/13/2022', 'https://robohash.org/temporemolestiaerem.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('7f5a03bc-82cd-410b-bbd6-1ce463cd5145', 'Johnette', 'Ghelerdini', '10/13/2021', '2/10/2022', 'https://robohash.org/pariaturvoluptatemratione.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('7a0647b3-4e42-42b5-9cd3-bca834e97fb6', 'Armstrong', 'Filipchikov', '1/9/2022', '1/23/2022', 'https://robohash.org/sintconsequunturid.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('1659fd36-e4a2-45ba-925c-d1916f90aebf', 'Celinda', 'Vennard', '9/6/2021', '1/6/2022', 'https://robohash.org/undequirepudiandae.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('b5371c89-1fbe-4c87-bc89-cab6ca61fcde', 'Deloris', 'Bolland', '1/19/2022', '10/16/2021', 'https://robohash.org/omnissitsit.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('22ae181a-7294-43a9-8039-ab6599dcb8d1', 'Molli', 'Kinnen', '8/28/2021', '6/26/2022', 'https://robohash.org/nesciuntsedminima.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('72ee2fe8-6635-475d-ba51-f9166423331e', 'Lucille', 'Metzel', '1/7/2022', '3/18/2022', 'https://robohash.org/addolorumminima.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('b8328ab0-a7ef-49ee-94cd-2cd3760e7982', 'Bobine', 'Week', '2/13/2022', '12/25/2021', 'https://robohash.org/delectusquiavoluptas.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('8075cb82-2f82-45b1-a988-64424da67f95', 'Ingaberg', 'Peto', '1/11/2022', '10/22/2021', 'https://robohash.org/etnostrumnon.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('bb34ba3b-7b01-45e9-a63c-b360b95f64b9', 'Lorrie', 'Golt', '10/15/2021', '3/18/2022', 'https://robohash.org/sintillodignissimos.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('b5d1f2a1-33bc-4bbf-91a8-b7be68fe006a', 'Ailina', 'Artharg', '8/10/2021', '5/14/2022', 'https://robohash.org/rerumestdebitis.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('88ffcee5-749a-494a-a8d9-8d8d769c5cd7', 'Meryl', 'Bour', '12/27/2021', '11/21/2021', 'https://robohash.org/nonsuscipitlibero.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('3bbfb790-542d-45de-84c0-014d7f0a19b1', 'Elfreda', 'Renachowski', '3/11/2022', '9/18/2021', 'https://robohash.org/ipsumatmagni.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fad0d475-5108-468c-8427-7a4f263f4434', 'Claudetta', 'Rosenblad', '9/16/2021', '4/6/2022', 'https://robohash.org/etullamdolorem.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('d46d6ec3-399c-4df2-9549-824377452e70', 'Alica', 'Olphert', '9/24/2021', '7/21/2022', 'https://robohash.org/autemaspernaturnon.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('add11a0d-e18b-42f3-b503-ea638d32b5ef', 'Tabatha', 'Wintle', '8/17/2021', '6/3/2022', 'https://robohash.org/voluptateomniscorrupti.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('5a7847af-e694-4fef-857e-af4d58e5c774', 'Merla', 'Mordan', '11/17/2021', '10/17/2021', 'https://robohash.org/modilaboreofficiis.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('4f6215ac-8efa-46d8-b86d-2fd27eba5d64', 'Evy', 'Tatnell', '3/16/2022', '11/23/2021', 'https://robohash.org/autinsoluta.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('9948f025-774b-43e6-adc9-b45b2a4494e0', 'Ginnifer', 'Copson', '3/27/2022', '2/7/2022', 'https://robohash.org/incidunteaqueiusto.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('264bd7da-4652-4fc0-a05d-f4c1314b5c6f', 'Ernestine', 'Westcarr', '11/7/2021', '8/13/2021', 'https://robohash.org/sitdistinctiorerum.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('276a8f09-2d41-42c0-84e8-128f0942533d', 'Tabb', 'Paulou', '5/12/2022', '8/9/2021', 'https://robohash.org/etofficiadolores.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('137f923b-3081-4678-8440-32af66b8e95b', 'Alexina', 'Gotling', '3/29/2022', '12/18/2021', 'https://robohash.org/dolorumquioptio.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('1e421410-e9ee-411c-a446-4bdc72460cf0', 'Ingaborg', 'Kayne', '3/28/2022', '3/10/2022', 'https://robohash.org/mollitiavelpossimus.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');


-- CASES
INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'ac03e634-5462-4c95-a9df-cfc2d634283d','42649166-aac5-4b34-a4f5-e62be0becc01','e2206e84-998d-42e1-b992-72e557f44801','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '3b5ac8b5-5531-4185-ad0a-af1d9a1fde1a','42649166-aac5-4b34-a4f5-e62be0becc02','e2206e84-998d-42e1-b992-72e557f44802','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '36261f50-9f28-432a-b32e-44d8fc00d31a','42649166-aac5-4b34-a4f5-e62be0becc03','e2206e84-998d-42e1-b992-72e557f44803','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '991e8e0f-364c-46c5-ae24-031117c6df9c','42649166-aac5-4b34-a4f5-e62be0becc04','e2206e84-998d-42e1-b992-72e557f44804','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '02f6ca42-5319-4c3a-bc9a-d9458f07db7d','42649166-aac5-4b34-a4f5-e62be0becc05','e2206e84-998d-42e1-b992-72e557f44805','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '430c5d77-5209-4ad3-9495-bfcff8022353','42649166-aac5-4b34-a4f5-e62be0becc06','e2206e84-998d-42e1-b992-72e557f44806','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '7c811c10-bb7c-45bd-b5ba-ba1dee09eb37','42649166-aac5-4b34-a4f5-e62be0becc07','e2206e84-998d-42e1-b992-72e557f44807','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '2e53dafc-6d98-4a74-b1e6-e89707606706','42649166-aac5-4b34-a4f5-e62be0becc08','e2206e84-998d-42e1-b992-72e557f44808','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'ac290702-47b9-41b7-ab72-56ed583f15e0','42649166-aac5-4b34-a4f5-e62be0becc09','e2206e84-998d-42e1-b992-72e557f44809','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '6461a70c-6702-4d37-8337-210d98509603','42649166-aac5-4b34-a4f5-e62be0becc10','e2206e84-998d-42e1-b992-72e557f44810','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '2d8a0b8a-6499-4c19-b98c-816f2e7ea81d','42649166-aac5-4b34-a4f5-e62be0becc11','e2206e84-998d-42e1-b992-72e557f44811','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '7bb523cb-0eda-47b5-9dc8-706461f4accd','42649166-aac5-4b34-a4f5-e62be0becc12','e2206e84-998d-42e1-b992-72e557f44812','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '34786f8e-9895-45b5-b6fc-bc7dd986b45b','42649166-aac5-4b34-a4f5-e62be0becc13','e2206e84-998d-42e1-b992-72e557f44813','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '1a7d3317-a013-4959-b32d-c4282cb7b1e8','42649166-aac5-4b34-a4f5-e62be0becc14','e2206e84-998d-42e1-b992-72e557f44814','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '42a1c9ab-a96b-4f37-ad61-5765b4c442d4','42649166-aac5-4b34-a4f5-e62be0becc15','e2206e84-998d-42e1-b992-72e557f44815','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'e0066784-644f-4197-ab79-4deab35f228b','42649166-aac5-4b34-a4f5-e62be0becc16','e2206e84-998d-42e1-b992-72e557f44816','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '7c3fa210-39c1-4696-a1d1-95a513f52201','42649166-aac5-4b34-a4f5-e62be0becc17','e2206e84-998d-42e1-b992-72e557f44817','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '17da8a1b-55a9-450a-abf6-2f04a84213d0','42649166-aac5-4b34-a4f5-e62be0becc18','e2206e84-998d-42e1-b992-72e557f44818','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '581b0906-5b43-425f-a3c1-6ec09a50f114','42649166-aac5-4b34-a4f5-e62be0becc19','e2206e84-998d-42e1-b992-72e557f44819','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'f94a621b-b76c-484f-85ad-20db75dadaf4','42649166-aac5-4b34-a4f5-e62be0becc20','e2206e84-998d-42e1-b992-72e557f44820','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '59103bd7-a7fc-478d-a58f-c35932c52b32','42649166-aac5-4b34-a4f5-e62be0becc21','e2206e84-998d-42e1-b992-72e557f44821','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'ca6c8eef-f154-470c-84ab-df169da073d6','42649166-aac5-4b34-a4f5-e62be0becc22','e2206e84-998d-42e1-b992-72e557f44822','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '20d3f32e-3910-4307-8efc-14606f7c4061','42649166-aac5-4b34-a4f5-e62be0becc23','e2206e84-998d-42e1-b992-72e557f44823','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '7a95561c-4556-49f1-ab0e-6ab732da21f4','42649166-aac5-4b34-a4f5-e62be0becc24','e2206e84-998d-42e1-b992-72e557f44824','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '4d386050-270d-4b1f-8928-7c2185c6fe08','42649166-aac5-4b34-a4f5-e62be0becc25','e2206e84-998d-42e1-b992-72e557f44825','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '7813dcb6-477d-4d88-a589-55a1c7143bf2','42649166-aac5-4b34-a4f5-e62be0becc26','e2206e84-998d-42e1-b992-72e557f44826','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '6a347530-5dfe-4a36-8700-f30ea2bb6045','42649166-aac5-4b34-a4f5-e62be0becc27','e2206e84-998d-42e1-b992-72e557f44827','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '7f5a03bc-82cd-410b-bbd6-1ce463cd5145','42649166-aac5-4b34-a4f5-e62be0becc28','e2206e84-998d-42e1-b992-72e557f44828','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '7a0647b3-4e42-42b5-9cd3-bca834e97fb6','42649166-aac5-4b34-a4f5-e62be0becc29','e2206e84-998d-42e1-b992-72e557f44829','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '1659fd36-e4a2-45ba-925c-d1916f90aebf','42649166-aac5-4b34-a4f5-e62be0becc30','e2206e84-998d-42e1-b992-72e557f44830','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'b5371c89-1fbe-4c87-bc89-cab6ca61fcde','42649166-aac5-4b34-a4f5-e62be0becc31','e2206e84-998d-42e1-b992-72e557f44831','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '22ae181a-7294-43a9-8039-ab6599dcb8d1','42649166-aac5-4b34-a4f5-e62be0becc32','e2206e84-998d-42e1-b992-72e557f44832','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '72ee2fe8-6635-475d-ba51-f9166423331e','42649166-aac5-4b34-a4f5-e62be0becc33','e2206e84-998d-42e1-b992-72e557f44833','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'b8328ab0-a7ef-49ee-94cd-2cd3760e7982','42649166-aac5-4b34-a4f5-e62be0becc34','e2206e84-998d-42e1-b992-72e557f44834','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '8075cb82-2f82-45b1-a988-64424da67f95','42649166-aac5-4b34-a4f5-e62be0becc35','e2206e84-998d-42e1-b992-72e557f44835','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'bb34ba3b-7b01-45e9-a63c-b360b95f64b9','42649166-aac5-4b34-a4f5-e62be0becc36','e2206e84-998d-42e1-b992-72e557f44836','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'b5d1f2a1-33bc-4bbf-91a8-b7be68fe006a','42649166-aac5-4b34-a4f5-e62be0becc37','e2206e84-998d-42e1-b992-72e557f44837','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '88ffcee5-749a-494a-a8d9-8d8d769c5cd7','42649166-aac5-4b34-a4f5-e62be0becc38','e2206e84-998d-42e1-b992-72e557f44838','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '3bbfb790-542d-45de-84c0-014d7f0a19b1','42649166-aac5-4b34-a4f5-e62be0becc39','e2206e84-998d-42e1-b992-72e557f44839','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fad0d475-5108-468c-8427-7a4f263f4434','42649166-aac5-4b34-a4f5-e62be0becc40','e2206e84-998d-42e1-b992-72e557f44840','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'add11a0d-e18b-42f3-b503-ea638d32b5ef','42649166-aac5-4b34-a4f5-e62be0becc41','e2206e84-998d-42e1-b992-72e557f44841','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '5a7847af-e694-4fef-857e-af4d58e5c774','42649166-aac5-4b34-a4f5-e62be0becc42','e2206e84-998d-42e1-b992-72e557f44842','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '4f6215ac-8efa-46d8-b86d-2fd27eba5d64','42649166-aac5-4b34-a4f5-e62be0becc43','e2206e84-998d-42e1-b992-72e557f44843','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '9948f025-774b-43e6-adc9-b45b2a4494e0','42649166-aac5-4b34-a4f5-e62be0becc44','e2206e84-998d-42e1-b992-72e557f44844','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '264bd7da-4652-4fc0-a05d-f4c1314b5c6f','42649166-aac5-4b34-a4f5-e62be0becc45','e2206e84-998d-42e1-b992-72e557f44845','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'd46d6ec3-399c-4df2-9549-824377452e70','42649166-aac5-4b34-a4f5-e62be0becc46','e2206e84-998d-42e1-b992-72e557f44846','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '276a8f09-2d41-42c0-84e8-128f0942533d','42649166-aac5-4b34-a4f5-e62be0becc47','e2206e84-998d-42e1-b992-72e557f44847','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '137f923b-3081-4678-8440-32af66b8e95b','42649166-aac5-4b34-a4f5-e62be0becc48','e2206e84-998d-42e1-b992-72e557f44848','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '1e421410-e9ee-411c-a446-4bdc72460cf0','42649166-aac5-4b34-a4f5-e62be0becc49','e2206e84-998d-42e1-b992-72e557f44849','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', '174cd652-121c-4a5d-b8ae-fe2b614830fe','42649166-aac5-4b34-a4f5-e62be0becc50','e2206e84-998d-42e1-b992-72e557f44850','closed', NOW(), NOW());


---------------------
-- LOS ANGELES AREAD
---------------------

-- Geo Locations
INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168701', 33.83631397, -117.69719125, (ST_SetSRID(ST_MakePoint(-117.69719125, 33.83631397), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168702', 34.06269991, -117.65229468, (ST_SetSRID(ST_MakePoint(-117.65229468, 34.06269991), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168703', 34.41097289, -117.02884738, (ST_SetSRID(ST_MakePoint(-117.02884738, 34.41097289), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168704', 34.05082190, -117.08416729, (ST_SetSRID(ST_MakePoint(-117.08416729, 34.05082190), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168705', 33.81563106, -117.60129815, (ST_SetSRID(ST_MakePoint(-117.60129815, 33.81563106), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168706', 34.21214435, -117.79739615, (ST_SetSRID(ST_MakePoint(-117.79739615, 34.21214435), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168707', 34.38616916, -117.05984140, (ST_SetSRID(ST_MakePoint(-117.05984140, 34.38616916), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168708', 33.95400180, -117.40237535, (ST_SetSRID(ST_MakePoint(-117.40237535, 33.95400180), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168709', 33.88560157, -117.28163326, (ST_SetSRID(ST_MakePoint(-117.28163326, 33.88560157), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168710', 34.04541382, -116.92718072, (ST_SetSRID(ST_MakePoint(-116.92718072, 34.04541382), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168711', 34.02856729, -117.46176689, (ST_SetSRID(ST_MakePoint(-117.46176689, 34.02856729), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168712', 33.97577353, -116.85541043, (ST_SetSRID(ST_MakePoint(-116.85541043, 33.97577353), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168713', 34.42261912, -116.98444110, (ST_SetSRID(ST_MakePoint(-116.98444110, 34.42261912), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168714', 34.10324141, -117.69161727, (ST_SetSRID(ST_MakePoint(-117.69161727, 34.10324141), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168715', 33.72387849, -117.16718622, (ST_SetSRID(ST_MakePoint(-117.16718622, 33.72387849), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168716', 33.75562412, -117.20084592, (ST_SetSRID(ST_MakePoint(-117.20084592, 33.75562412), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168717', 34.17936934, -117.01611145, (ST_SetSRID(ST_MakePoint(-117.01611145, 34.17936934), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168718', 34.01572681, -117.11078142, (ST_SetSRID(ST_MakePoint(-117.11078142, 34.01572681), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168719', 34.06822120, -116.93783881, (ST_SetSRID(ST_MakePoint(-116.93783881, 34.06822120), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168720', 34.01098817, -117.53859839, (ST_SetSRID(ST_MakePoint(-117.53859839, 34.01098817), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168721', 33.91600303, -117.75479814, (ST_SetSRID(ST_MakePoint(-117.75479814, 33.91600303), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location")
VALUES ('3678f3bc-b929-4d34-a328-00695c168722', 34.49178159, -117.14664708, (ST_SetSRID(ST_MakePoint(-117.14664708, 34.49178159), 4326)));


-- Offenders
INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1001', 'Lilian', 'Orrill', '1/18/2022', '6/25/2022', 'https://robohash.org/harumminimaquaerat.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1002', 'Vergil', 'Caudrelier', '1/2/2022', '5/12/2022', 'https://robohash.org/quibusdamcorruptialiquid.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1003', 'Lu', 'Petris', '4/8/2022', '10/3/2021', 'https://robohash.org/autquisad.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1004', 'Terrence', 'Hebditch', '3/14/2022', '1/13/2022', 'https://robohash.org/veritatisdebitiset.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1005', 'Juli', 'Gadesby', '7/2/2022', '3/15/2022', 'https://robohash.org/earumanimivel.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1006', 'Lyssa', 'Ruddin', '3/29/2022', '6/27/2022', 'https://robohash.org/quisedid.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1007', 'Issi', 'Magnay', '8/18/2021', '8/20/2021', 'https://robohash.org/quaequideleniti.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1008', 'Dania', 'Casse', '1/30/2022', '8/10/2021', 'https://robohash.org/minimavelut.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1009', 'Robinett', 'Stratiff', '1/3/2022', '7/28/2022', 'https://robohash.org/deseruntdoloresfugit.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1010', 'Marabel', 'Pillans', '12/31/2021', '5/12/2022', 'https://robohash.org/utfugiatodit.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1011', 'Tabby', 'Baldetti', '2/17/2022', '2/9/2022', 'https://robohash.org/quaseteius.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1012', 'Aggi', 'Windus', '2/14/2022', '2/15/2022', 'https://robohash.org/adipisciporrodeleniti.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1013', 'Loni', 'Straun', '1/29/2022', '3/31/2022', 'https://robohash.org/isteitaqueassumenda.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1014', 'Godfree', 'Izkovitch', '7/5/2022', '5/26/2022', 'https://robohash.org/nequeetsit.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1015', 'Paulina', 'Baszniak', '12/6/2021', '4/21/2022', 'https://robohash.org/autrecusandaeaut.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1016', 'Dianna', 'Kramer', '5/21/2022', '12/25/2021', 'https://robohash.org/pariaturadipisciquod.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1017', 'Monah', 'Donald', '6/16/2022', '5/12/2022', 'https://robohash.org/impeditcommodieveniet.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1018', 'Alford', 'Doyle', '4/14/2022', '1/12/2022', 'https://robohash.org/consequatursedtempora.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1019', 'Barbabas', 'Glayzer', '10/21/2021', '11/5/2021', 'https://robohash.org/blanditiisautemvoluptas.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1020', 'Jeannie', 'Crippell', '5/7/2022', '6/9/2022', 'https://robohash.org/avoluptatemiste.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1021', 'Palm', 'Duiged', '11/8/2021', '6/19/2022', 'https://robohash.org/etfugitut.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('fb3c968f-0fca-41db-ae6d-d0591e4e1022', 'Elisha', 'Gingle', '1/13/2022', '12/11/2021', 'https://robohash.org/quiarerumdolores.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');


-- Cases
INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1001','3678f3bc-b929-4d34-a328-00695c168701','886b0362-963f-49bd-882f-fc654f3bf001','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1002','3678f3bc-b929-4d34-a328-00695c168702','886b0362-963f-49bd-882f-fc654f3bf002','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1003','3678f3bc-b929-4d34-a328-00695c168703','886b0362-963f-49bd-882f-fc654f3bf003','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1004','3678f3bc-b929-4d34-a328-00695c168704','886b0362-963f-49bd-882f-fc654f3bf004','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1005','3678f3bc-b929-4d34-a328-00695c168705','886b0362-963f-49bd-882f-fc654f3bf005','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1006','3678f3bc-b929-4d34-a328-00695c168706','886b0362-963f-49bd-882f-fc654f3bf006','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1007','3678f3bc-b929-4d34-a328-00695c168707','886b0362-963f-49bd-882f-fc654f3bf007','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1008','3678f3bc-b929-4d34-a328-00695c168708','886b0362-963f-49bd-882f-fc654f3bf008','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1009','3678f3bc-b929-4d34-a328-00695c168709','886b0362-963f-49bd-882f-fc654f3bf009','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1010','3678f3bc-b929-4d34-a328-00695c168710','886b0362-963f-49bd-882f-fc654f3bf010','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1011','3678f3bc-b929-4d34-a328-00695c168711','886b0362-963f-49bd-882f-fc654f3bf011','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1012','3678f3bc-b929-4d34-a328-00695c168712','886b0362-963f-49bd-882f-fc654f3bf012','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1013','3678f3bc-b929-4d34-a328-00695c168713','886b0362-963f-49bd-882f-fc654f3bf013','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1014','3678f3bc-b929-4d34-a328-00695c168714','886b0362-963f-49bd-882f-fc654f3bf014','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1015','3678f3bc-b929-4d34-a328-00695c168715','886b0362-963f-49bd-882f-fc654f3bf015','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1016','3678f3bc-b929-4d34-a328-00695c168716','886b0362-963f-49bd-882f-fc654f3bf016','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1017','3678f3bc-b929-4d34-a328-00695c168717','886b0362-963f-49bd-882f-fc654f3bf017','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1018','3678f3bc-b929-4d34-a328-00695c168718','886b0362-963f-49bd-882f-fc654f3bf018','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1019','3678f3bc-b929-4d34-a328-00695c168719','886b0362-963f-49bd-882f-fc654f3bf019','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1020','3678f3bc-b929-4d34-a328-00695c168720','886b0362-963f-49bd-882f-fc654f3bf020','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1021','3678f3bc-b929-4d34-a328-00695c168721','886b0362-963f-49bd-882f-fc654f3bf021','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'fb3c968f-0fca-41db-ae6d-d0591e4e1022','3678f3bc-b929-4d34-a328-00695c168722','886b0362-963f-49bd-882f-fc654f3bf022','closed', NOW(), NOW());


-----------------------
-- ATLANTIC CITY NJ 
-----------------------

-- GEO LOCATIONS
INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214600', 39.31112716,-74.17019313, (ST_SetSRID(ST_MakePoint(-74.17019313,39.31112716), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214601', 39.36506385,-74.27219727, (ST_SetSRID(ST_MakePoint(-74.27219727,39.36506385), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214602', 39.54401433,-74.16847132, (ST_SetSRID(ST_MakePoint(-74.16847132,39.54401433), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214603', 39.60801123,-74.42074294, (ST_SetSRID(ST_MakePoint(-74.42074294,39.60801123), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214604', 39.25127777,-74.61918054, (ST_SetSRID(ST_MakePoint(-74.61918054,39.25127777), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214605', 39.23605843,-74.11572658, (ST_SetSRID(ST_MakePoint(-74.11572658,39.23605843), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214606', 39.49476606,-74.52245119, (ST_SetSRID(ST_MakePoint(-74.52245119,39.49476606), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214607', 39.58583779,-74.41628561, (ST_SetSRID(ST_MakePoint(-74.41628561,39.58583779), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214608', 39.17237178,-74.25451580, (ST_SetSRID(ST_MakePoint(-74.25451580,39.17237178), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214609', 39.24458613,-74.27169805, (ST_SetSRID(ST_MakePoint(-74.27169805,39.24458613), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214610', 39.55083318,-74.22937147, (ST_SetSRID(ST_MakePoint(-74.22937147,39.55083318), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214611', 39.46490401,-74.65901576, (ST_SetSRID(ST_MakePoint(-74.65901576,39.46490401), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214612', 39.53198836,-74.36205067, (ST_SetSRID(ST_MakePoint(-74.36205067,39.53198836), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214613', 39.24526456,-74.23545353, (ST_SetSRID(ST_MakePoint(-74.23545353,39.24526456), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214614', 39.25933962,-74.26958757, (ST_SetSRID(ST_MakePoint(-74.26958757,39.25933962), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214615', 39.17692446,-74.47090985, (ST_SetSRID(ST_MakePoint(-74.47090985,39.17692446), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214616', 39.44839322,-74.25732334, (ST_SetSRID(ST_MakePoint(-74.25732334,39.44839322), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214617', 39.22727135,-74.58746302, (ST_SetSRID(ST_MakePoint(-74.58746302,39.22727135), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214618', 39.33488410,-74.77465433, (ST_SetSRID(ST_MakePoint(-74.77465433,39.33488410), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214619', 39.17127924,-74.62676461, (ST_SetSRID(ST_MakePoint(-74.62676461,39.17127924), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214620', 39.54468205,-74.72139984, (ST_SetSRID(ST_MakePoint(-74.72139984,39.54468205), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214621', 39.22781264,-74.62693686, (ST_SetSRID(ST_MakePoint(-74.62693686,39.22781264), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214622', 39.27183377,-74.67891241, (ST_SetSRID(ST_MakePoint(-74.67891241,39.27183377), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214623', 39.59697493,-74.45002668, (ST_SetSRID(ST_MakePoint(-74.45002668,39.59697493), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214624', 39.14551277,-74.36964682, (ST_SetSRID(ST_MakePoint(-74.36964682,39.14551277), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214625', 39.34683159,-74.17998517, (ST_SetSRID(ST_MakePoint(-74.17998517,39.34683159), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214626', 39.61969637,-74.47422456, (ST_SetSRID(ST_MakePoint(-74.47422456,39.61969637), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214627', 39.40494722,-74.48117820, (ST_SetSRID(ST_MakePoint(-74.48117820,39.40494722), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214628', 39.32320527,-74.15408291, (ST_SetSRID(ST_MakePoint(-74.15408291,39.32320527), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214629', 39.33000535,-74.07829295, (ST_SetSRID(ST_MakePoint(-74.07829295,39.33000535), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214630', 39.18696763,-74.30924353, (ST_SetSRID(ST_MakePoint(-74.30924353,39.18696763), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214631', 39.35275378,-74.07691739, (ST_SetSRID(ST_MakePoint(-74.07691739,39.35275378), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214632', 39.50798557,-74.14215173, (ST_SetSRID(ST_MakePoint(-74.14215173,39.50798557), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214633', 39.36417630,-74.42369023, (ST_SetSRID(ST_MakePoint(-74.42369023,39.36417630), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214634', 39.54508380,-74.43781504, (ST_SetSRID(ST_MakePoint(-74.43781504,39.54508380), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214635', 39.40207661,-74.52222943, (ST_SetSRID(ST_MakePoint(-74.52222943,39.40207661), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214636', 39.36006313,-74.57092099, (ST_SetSRID(ST_MakePoint(-74.57092099,39.36006313), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214637', 39.30490058,-74.67492248, (ST_SetSRID(ST_MakePoint(-74.67492248,39.30490058), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214638', 39.46528834,-74.53970628, (ST_SetSRID(ST_MakePoint(-74.53970628,39.46528834), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214639', 39.46620175,-74.15309646, (ST_SetSRID(ST_MakePoint(-74.15309646,39.46620175), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214640', 39.42167318,-74.39077530, (ST_SetSRID(ST_MakePoint(-74.39077530,39.42167318), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214641', 39.23333677,-74.57910308, (ST_SetSRID(ST_MakePoint(-74.57910308,39.23333677), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214642', 39.38188425,-74.10254055, (ST_SetSRID(ST_MakePoint(-74.10254055,39.38188425), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214643', 39.11595107,-74.27552265, (ST_SetSRID(ST_MakePoint(-74.27552265,39.11595107), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214644', 39.38734541,-74.77672168, (ST_SetSRID(ST_MakePoint(-74.77672168,39.38734541), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214645', 39.08666862,-74.44871531, (ST_SetSRID(ST_MakePoint(-74.44871531,39.08666862), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214646', 39.27997877,-74.55334221, (ST_SetSRID(ST_MakePoint(-74.55334221,39.27997877), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214647', 39.22013211,-74.55627882, (ST_SetSRID(ST_MakePoint(-74.55627882,39.22013211), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214648', 39.55609971,-74.70251065, (ST_SetSRID(ST_MakePoint(-74.70251065,39.55609971), 4326)));

INSERT INTO geo_location (id, latitude, longitude, "location") 
VALUES ('d4580117-654d-445b-bf86-eedc0b214649', 39.15443341,-74.64536396, (ST_SetSRID(ST_MakePoint(-74.64536396,39.15443341), 4326)));


-- OFFENDERS
INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec700', 'Jodie', 'Bleything', '2/15/2022', '4/5/2022', 'https://robohash.org/voluptasquiaquaerat.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec701', 'Sean', 'Grigoroni', '11/27/2021', '7/17/2022', 'https://robohash.org/eligendicorruptihic.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec702', 'Dorie', 'Janzen', '5/16/2022', '12/15/2021', 'https://robohash.org/omnisinciduntpariatur.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec703', 'Daron', 'Shippey', '11/10/2021', '11/6/2021', 'https://robohash.org/quibusdamrerumfuga.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec704', 'Sonia', 'Rallinshaw', '1/29/2022', '6/10/2022', 'https://robohash.org/corruptiautemminima.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec705', 'Aldric', 'Fiske', '2/24/2022', '3/16/2022', 'https://robohash.org/occaecatifugarecusandae.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec706', 'Gordie', 'Malitrott', '2/6/2022', '11/23/2021', 'https://robohash.org/quaeessequod.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec707', 'Nestor', 'Binning', '4/4/2022', '6/6/2022', 'https://robohash.org/commodiquiaiste.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec708', 'Carroll', 'Sola', '3/3/2022', '8/4/2022', 'https://robohash.org/consequaturtotammodi.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec709', 'Phil', 'Plak', '4/8/2022', '7/27/2022', 'https://robohash.org/repellendusnemodistinctio.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec710', 'Ravi', 'Gooderick', '11/29/2021', '8/2/2022', 'https://robohash.org/aspernaturdictaquia.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec711', 'Shawnee', 'Venart', '8/26/2021', '1/13/2022', 'https://robohash.org/nihilestdicta.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec712', 'Cody', 'Malimoe', '10/2/2021', '11/2/2021', 'https://robohash.org/quisquamutsoluta.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec713', 'Ulberto', 'Ashmore', '6/25/2022', '1/9/2022', 'https://robohash.org/ainvoluptatibus.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec714', 'Gerry', 'De Gowe', '5/27/2022', '5/2/2022', 'https://robohash.org/architectovoluptatemlaborum.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec715', 'Chico', 'Sarra', '3/18/2022', '11/16/2021', 'https://robohash.org/necessitatibusquasipsum.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec716', 'Baldwin', 'Wogan', '3/28/2022', '9/2/2021', 'https://robohash.org/inciduntcumsuscipit.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec717', 'Ingrim', 'Wahlberg', '5/30/2022', '6/27/2022', 'https://robohash.org/sinteosiste.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec718', 'Maxy', 'Allkins', '6/1/2022', '6/4/2022', 'https://robohash.org/rerumquasiet.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec719', 'Sebastien', 'Karpinski', '11/12/2021', '7/8/2022', 'https://robohash.org/corruptirerumquo.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec720', 'Constancia', 'Wrankling', '7/3/2022', '12/22/2021', 'https://robohash.org/utcommodiillum.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec721', 'Ailey', 'Dawtry', '7/29/2022', '3/5/2022', 'https://robohash.org/pariatursintsaepe.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec722', 'Euphemia', 'Handforth', '8/4/2022', '6/11/2022', 'https://robohash.org/errorporrodelectus.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec723', 'Stanislaw', 'Walkey', '11/22/2021', '12/6/2021', 'https://robohash.org/quasipsamerror.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec724', 'Caye', 'Shipton', '6/22/2022', '4/5/2022', 'https://robohash.org/solutaconsecteturdolor.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec725', 'Glyn', 'Normanvill', '4/5/2022', '2/1/2022', 'https://robohash.org/beataeconsecteturet.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec726', 'Ricki', 'Coats', '3/14/2022', '2/20/2022', 'https://robohash.org/quisnatustenetur.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec727', 'Mallory', 'Jirsa', '11/6/2021', '10/26/2021', 'https://robohash.org/temporeisteeligendi.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec728', 'Ame', 'Chatelet', '5/8/2022', '7/1/2022', 'https://robohash.org/quiatemporadistinctio.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec729', 'Kassey', 'Chaplyn', '3/1/2022', '7/16/2022', 'https://robohash.org/fugitdoloresest.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec730', 'Jessee', 'Pembry', '5/27/2022', '5/26/2022', 'https://robohash.org/explicaboautaut.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec731', 'Imogen', 'Volcker', '7/3/2022', '7/26/2022', 'https://robohash.org/quaeautsed.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec732', 'Phillie', 'Wynrahame', '9/14/2021', '3/22/2022', 'https://robohash.org/quodetet.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec733', 'Ira', 'Vanichkov', '2/11/2022', '8/1/2022', 'https://robohash.org/corporissolutavoluptatem.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec734', 'Janot', 'Escreet', '5/26/2022', '8/15/2022', 'https://robohash.org/voluptatumcumanimi.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec735', 'Kane', 'Riseam', '10/13/2021', '7/30/2022', 'https://robohash.org/etsimiliquenesciunt.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec736', 'Lind', 'Meneux', '3/30/2022', '3/19/2022', 'https://robohash.org/doloribusperspiciatismagni.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec737', 'Phylis', 'Torricella', '6/3/2022', '7/16/2022', 'https://robohash.org/laborumblanditiisqui.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec738', 'Skell', 'Miguet', '10/17/2021', '1/1/2022', 'https://robohash.org/expeditatotammagni.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec739', 'Abner', 'Carrick', '6/20/2022', '10/27/2021', 'https://robohash.org/magnameumet.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec740', 'Nalani', 'Tumasian', '11/7/2021', '5/4/2022', 'https://robohash.org/corruptiutullam.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec741', 'Wilow', 'Le Bosse', '2/23/2022', '8/7/2022', 'https://robohash.org/innisidolor.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec742', 'Alyssa', 'Amsberger', '10/12/2021', '2/2/2022', 'https://robohash.org/reiciendisquidemnecessitatibus.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec743', 'Geralda', 'Kopta', '7/25/2022', '3/2/2022', 'https://robohash.org/quiducimusvelit.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec744', 'Kelsey', 'Boak', '7/27/2022', '3/16/2022', 'https://robohash.org/molestiasutvoluptatibus.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec745', 'Brandea', 'Peagrim', '8/3/2022', '12/11/2021', 'https://robohash.org/fugavoluptasnihil.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec746', 'Carlos', 'Dacke', '6/18/2022', '12/17/2021', 'https://robohash.org/eteumest.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec747', 'Chrystel', 'Mannin', '12/4/2021', '6/3/2022', 'https://robohash.org/similiqueenimquis.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec748', 'Leoine', 'Ventom', '7/11/2022', '5/28/2022', 'https://robohash.org/aliquidetet.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');

INSERT INTO offender (id, first_name, last_name, created_at, updated_at, avatar_url, summary) 
VALUES ('c100e4c4-afdf-4b61-a805-2685225ec749', 'Aldridge', 'Baudouin', '3/5/2022', '5/7/2022', 'https://robohash.org/explicabosapientemodi.png?size=50x50&set=set1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...');


-- CASES

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec700','d4580117-654d-445b-bf86-eedc0b214600','a38dfe60-265c-4ff2-8957-7d3b0bc4d700','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec701','d4580117-654d-445b-bf86-eedc0b214601','a38dfe60-265c-4ff2-8957-7d3b0bc4d701','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec702','d4580117-654d-445b-bf86-eedc0b214602','a38dfe60-265c-4ff2-8957-7d3b0bc4d702','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec703','d4580117-654d-445b-bf86-eedc0b214603','a38dfe60-265c-4ff2-8957-7d3b0bc4d703','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec704','d4580117-654d-445b-bf86-eedc0b214604','a38dfe60-265c-4ff2-8957-7d3b0bc4d704','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec705','d4580117-654d-445b-bf86-eedc0b214605','a38dfe60-265c-4ff2-8957-7d3b0bc4d705','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec706','d4580117-654d-445b-bf86-eedc0b214606','a38dfe60-265c-4ff2-8957-7d3b0bc4d706','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec707','d4580117-654d-445b-bf86-eedc0b214607','a38dfe60-265c-4ff2-8957-7d3b0bc4d707','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec708','d4580117-654d-445b-bf86-eedc0b214608','a38dfe60-265c-4ff2-8957-7d3b0bc4d708','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec709','d4580117-654d-445b-bf86-eedc0b214609','a38dfe60-265c-4ff2-8957-7d3b0bc4d709','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec710','d4580117-654d-445b-bf86-eedc0b214610','a38dfe60-265c-4ff2-8957-7d3b0bc4d710','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec711','d4580117-654d-445b-bf86-eedc0b214611','a38dfe60-265c-4ff2-8957-7d3b0bc4d711','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec712','d4580117-654d-445b-bf86-eedc0b214612','a38dfe60-265c-4ff2-8957-7d3b0bc4d712','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec713','d4580117-654d-445b-bf86-eedc0b214613','a38dfe60-265c-4ff2-8957-7d3b0bc4d713','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec714','d4580117-654d-445b-bf86-eedc0b214614','a38dfe60-265c-4ff2-8957-7d3b0bc4d714','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec715','d4580117-654d-445b-bf86-eedc0b214615','a38dfe60-265c-4ff2-8957-7d3b0bc4d715','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec716','d4580117-654d-445b-bf86-eedc0b214616','a38dfe60-265c-4ff2-8957-7d3b0bc4d716','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec717','d4580117-654d-445b-bf86-eedc0b214617','a38dfe60-265c-4ff2-8957-7d3b0bc4d717','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec718','d4580117-654d-445b-bf86-eedc0b214618','a38dfe60-265c-4ff2-8957-7d3b0bc4d718','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec719','d4580117-654d-445b-bf86-eedc0b214619','a38dfe60-265c-4ff2-8957-7d3b0bc4d719','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec720','d4580117-654d-445b-bf86-eedc0b214620','a38dfe60-265c-4ff2-8957-7d3b0bc4d720','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec721','d4580117-654d-445b-bf86-eedc0b214621','a38dfe60-265c-4ff2-8957-7d3b0bc4d721','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec722','d4580117-654d-445b-bf86-eedc0b214622','a38dfe60-265c-4ff2-8957-7d3b0bc4d722','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec723','d4580117-654d-445b-bf86-eedc0b214623','a38dfe60-265c-4ff2-8957-7d3b0bc4d723','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec724','d4580117-654d-445b-bf86-eedc0b214624','a38dfe60-265c-4ff2-8957-7d3b0bc4d724','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec725','d4580117-654d-445b-bf86-eedc0b214625','a38dfe60-265c-4ff2-8957-7d3b0bc4d725','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec726','d4580117-654d-445b-bf86-eedc0b214626','a38dfe60-265c-4ff2-8957-7d3b0bc4d726','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec727','d4580117-654d-445b-bf86-eedc0b214627','a38dfe60-265c-4ff2-8957-7d3b0bc4d727','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec728','d4580117-654d-445b-bf86-eedc0b214628','a38dfe60-265c-4ff2-8957-7d3b0bc4d728','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec729','d4580117-654d-445b-bf86-eedc0b214629','a38dfe60-265c-4ff2-8957-7d3b0bc4d729','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec730','d4580117-654d-445b-bf86-eedc0b214630','a38dfe60-265c-4ff2-8957-7d3b0bc4d730','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec731','d4580117-654d-445b-bf86-eedc0b214631','a38dfe60-265c-4ff2-8957-7d3b0bc4d731','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec732','d4580117-654d-445b-bf86-eedc0b214632','a38dfe60-265c-4ff2-8957-7d3b0bc4d732','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec733','d4580117-654d-445b-bf86-eedc0b214633','a38dfe60-265c-4ff2-8957-7d3b0bc4d733','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec734','d4580117-654d-445b-bf86-eedc0b214634','a38dfe60-265c-4ff2-8957-7d3b0bc4d734','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec735','d4580117-654d-445b-bf86-eedc0b214635','a38dfe60-265c-4ff2-8957-7d3b0bc4d735','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec736','d4580117-654d-445b-bf86-eedc0b214636','a38dfe60-265c-4ff2-8957-7d3b0bc4d736','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec737','d4580117-654d-445b-bf86-eedc0b214637','a38dfe60-265c-4ff2-8957-7d3b0bc4d737','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec738','d4580117-654d-445b-bf86-eedc0b214638','a38dfe60-265c-4ff2-8957-7d3b0bc4d738','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec739','d4580117-654d-445b-bf86-eedc0b214639','a38dfe60-265c-4ff2-8957-7d3b0bc4d739','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec740','d4580117-654d-445b-bf86-eedc0b214640','a38dfe60-265c-4ff2-8957-7d3b0bc4d740','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec741','d4580117-654d-445b-bf86-eedc0b214641','a38dfe60-265c-4ff2-8957-7d3b0bc4d741','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec742','d4580117-654d-445b-bf86-eedc0b214642','a38dfe60-265c-4ff2-8957-7d3b0bc4d742','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec743','d4580117-654d-445b-bf86-eedc0b214643','a38dfe60-265c-4ff2-8957-7d3b0bc4d743','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec744','d4580117-654d-445b-bf86-eedc0b214644','a38dfe60-265c-4ff2-8957-7d3b0bc4d744','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec745','d4580117-654d-445b-bf86-eedc0b214645','a38dfe60-265c-4ff2-8957-7d3b0bc4d745','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec746','d4580117-654d-445b-bf86-eedc0b214646','a38dfe60-265c-4ff2-8957-7d3b0bc4d746','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec747','d4580117-654d-445b-bf86-eedc0b214647','a38dfe60-265c-4ff2-8957-7d3b0bc4d747','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec748','d4580117-654d-445b-bf86-eedc0b214648','a38dfe60-265c-4ff2-8957-7d3b0bc4d748','closed', NOW(), NOW());

INSERT INTO "case" (created_by_id, tenant_id, offender_id, caught_at_id, id, status, created_at, updated_at) 
VALUES ('8ebdb4d2-d9c7-476e-a5bb-2a9dcbe9f1aa', '1b59da04-9cad-4455-9901-93027f464d67', 'c100e4c4-afdf-4b61-a805-2685225ec749','d4580117-654d-445b-bf86-eedc0b214649','a38dfe60-265c-4ff2-8957-7d3b0bc4d749','closed', NOW(), NOW());


COMMIT;
