import { describe, expect, test } from '@jest/globals';
import * as request from 'supertest'

// const url = 'http://localhost:3000'
const url = 'https://lab.fullsnacktester.com/api'

describe('Snacks', () => {
    test('GET /snacks should return OK', (done) => {
        request(url)
            .get('/snacks')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
});