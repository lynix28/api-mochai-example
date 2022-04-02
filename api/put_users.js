const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-json-schema'));
const { connect } = require('../connector/put_users_connect');
const { request } = require('../helpers/request/put_users_request');
const { response } = require('../helpers/response/put_users_response');
const { testcases } = require('../testcases/put_users_cases');
const schema = require('../helpers/response/schema/put_users_schema.json');

describe(`${testcases.description}`, function () {
	describe(`${testcases.method} | ${testcases.positive.tag} | ${testcases.path}`, function () {
		it(`${testcases.positive.success}`, async function () {
			const result = await connect(request.positive.id);
			expect(result.status).to.equal(response.positive.httpStatus);
			expect(result.body).to.be.jsonSchema(schema, JSON.stringify(result.body));
			expect(result.body).to.have.property('updatedAt');
		});
	});
});