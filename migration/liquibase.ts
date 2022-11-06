import { LiquibaseConfig, Liquibase, POSTGRESQL_DEFAULT_CONFIG } from 'liquibase';

const CONFIG: LiquibaseConfig = {
  ...POSTGRESQL_DEFAULT_CONFIG,
  changeLogFile: './migration/resources/changelog-v1.0-cumulative.xml',
  url: process.env.DB_URL || '',
  username: process.env.DB_USER || '',
  password: process.env.DB_PASSWORLD || '',
};

const instance = new Liquibase(CONFIG);

async function doEet() {
  await instance.status();
  // await instance.update();
}

doEet();
