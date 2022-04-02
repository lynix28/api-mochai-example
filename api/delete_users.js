const chai = require('chai');
const { connect } = require('../connector/delete_users_connect');
const { request } = require('../helpers/request/delete_users_request');
const { response } = require('../helpers/response/delete_users_response');
const { testcases } = require('../testcases/delete_users_cases');
const expect = chai.expect;

describe(`${testcases.description}`, function () {
	describe(`${testcases.method} | ${testcases.positive.tag} | ${testcases.path}`, function () {
		it(`${testcases.positive.success}`, async function () {
			const result = await connect(request.positive.id);
			expect(result.status).to.equal(response.positive.httpStatus);
		});
	});
});