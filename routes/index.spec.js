const should = require('should');
const request = require('supertest');
const app = require('../app');

describe('GET /getFactorPercent', () => {

    it('should return 200 status code', (done) => {
        request(app)
            .get('/api/elec')
            .expect(200)
            .end((err, res) => {
                if (err) throw err;
                done();
            })
    });
});