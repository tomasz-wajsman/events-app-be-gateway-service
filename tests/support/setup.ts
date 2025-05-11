import MockOrm from '@src/repos/MockOrm';
import app from '@src/server';
import supertest, { Test } from 'supertest';
import TestAgent from 'supertest/lib/agent';
import { beforeAll } from 'vitest';

/******************************************************************************
                                    Run
******************************************************************************/

let agent: TestAgent<Test>;

beforeAll(async () => {
  agent = supertest.agent(app);
  await MockOrm.cleanDb();
});

/******************************************************************************
                                    Export
******************************************************************************/

export { agent };
