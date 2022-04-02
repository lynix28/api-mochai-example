const supertest = require('supertest');
const { baseUrl, path } = require('../helpers/path');

const api = supertest(baseUrl);

function connect(id) {
	return api.put(`${path.getUser.main}/${id}`)
		.set('Content-Type', 'application/json')
		.send({
			'name': 'morpheus',
			'job': 'zion resident'
		});
}

module.exports = { connect };