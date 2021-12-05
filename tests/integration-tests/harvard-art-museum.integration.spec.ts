import 'jest';
import * as express from 'express';
import * as request from 'supertest';
import {
    StatusCodes,
} from 'http-status-codes';
import IntegrationHelpers from '../helpers/Integration-helpers';

describe('harvard art museum integration tests', () => {
    let app: express.Application;

    beforeAll(async() => {
        app = await IntegrationHelpers.getApp();
    });

    it('can get prints', async () => {
        await request(app)
            .get('/api/harvard-art-museum/prints/')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect((res: request.Response) => {
                // eslint-disable-next-line no-console
                console.log(res.text);
            })
            .expect(StatusCodes.OK);
    });

    it('can get object', async () => {
        await request(app)
            .get('/api/harvard-art-museum/print/340477')
            .set('Accept', 'application/json')
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(StatusCodes.OK);
    });
});
