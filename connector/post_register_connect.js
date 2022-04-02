const supertest = require('supertest');
const { baseUrl, path } = require('../helpers/path');

const api = supertest(baseUrl);

function connect(payload) {
	return api.post(path.register)
		.set('Content-Type', 'application/json')
		.send(payload);
}

module.exports = { connect };