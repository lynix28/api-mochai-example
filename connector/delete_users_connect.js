const supertest = require('supertest');
const { baseUrl, path } = require('../helpers/path');

const api = supertest(baseUrl);

function connect(id) {
	return api.delete(`${path.getUser.main}/${id}`);
}

module.exports = { connect };