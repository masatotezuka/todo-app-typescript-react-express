import { MigrationInterface, QueryRunner } from "typeorm";

export class init1655776092601 implements MigrationInterface {
    name = 'init1655776092601'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "deadline" character varying, "completedAt" TIMESTAMP WITH TIME ZONE, "archivedAt" TIMESTAMP WITH TIME ZONE, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying, "lastName" character varying, "email" character varying NOT NULL, "password" character varying NOT NULL, "verificationToken" character varying, "verificationTokenExpiredAt" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_638bac731294171648258260ff2" UNIQUE ("password"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
