import request from 'supertest';
import {describe, it} from '@jest/globals';
import {app} from "../app";

describe('api', () => {
    it('returns 200 OK response', async () => {

        await request(app)
            .get('/')
            .expect(200);
    });
});