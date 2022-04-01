const supertest = require('supertest');
const { baseUrl, path } = require('../helpers/path');

const api = supertest(baseUrl);

function connect(type, id) {
	if (type == 'list') {
		return api.get(`${path.getUser.main}${path.getUser.param}${id}`);
	} else if (type == 'id') {
		return api.get(`${path.getUser.main}/${id}`);
	}
}

module.exports = { connect };