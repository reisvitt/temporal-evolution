import request from 'supertest'
import {performance} from 'perf_hooks'
import { app } from "../index"

describe('Should test endpoints perfomance', () => {
  const endpoints = [
    {
      name: 'By Period',
      path: '/api/dashboard/users-surveys-responses/period',
    },
    { 
      name: 'By Origin',
      path: '/api/dashboard/users-surveys-responses/origin'
    },
  ];

  endpoints.forEach(({ name, path }) => {
    test(`${name} should respond in time`, async () => {
      const start = performance.now();

      const res = await request(app).get(path);

      const durationMs = performance.now() - start;
      const durationSec = durationMs / 1000;
      console.log(`⏱️ ${name} respond in ${durationSec.toFixed(3)}s`);

      expect(res.status).toBe(200);
    }, 1000 * 60); // 1m timeout
  });
});
