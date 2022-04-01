const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-json-schema'));
const { connect } = require('../connector/post_register_connect');
const { request } = require('../helpers/request/post_register_request');
const { response } = require('../helpers/response/post_register_response');
const { testcases } = require('../testcases/post_register_cases');
const schemaSuccess = require('../helpers/response/schema/post_register_success_schema.json');
const schemaFailed = require('../helpers/response/schema/post_register_failed_schema.json');

describe(`${testcases.description}`, function () {
	describe(`${testcases.method} | ${testcases.positive.tag} | ${testcases.path}`, function () {
		it(`${testcases.positive.success}`, async function () {
			const result = await connect(request.success);
			expect(result.status).to.equal(response.success.httpStatus);
			expect(result.body).to.be.jsonSchema(schemaSuccess, JSON.stringify(result.body));
			expect(result.body.token).to.equal(response.success.token, JSON.stringify(result.body));
		});
	}),
	describe(`${testcases.method} | ${testcases.negative.tag} | ${testcases.path}`, function () {
		it(`${testcases.negative.failed}`, async function () {
			const result = await connect(request.failed);
			expect(result.status).to.equal(response.failed.httpStatus);
			expect(result.body).to.be.jsonSchema(schemaFailed, JSON.stringify(result.body));
			expect(result.body.error).to.equal(response.failed.message, JSON.stringify(result.body));
		});
	});
});