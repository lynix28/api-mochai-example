const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-json-schema'));
const { connect } = require('../connector/get_users_connect.js');
const { request } = require('../helpers/request/get_users_request.js');
const { response } = require('../helpers/response/get_users_response.js');
const { testcases } = require('../testcases/get_users_cases.js');
const schema = require('../helpers/response/schema/get_users_schema.json');

describe(`${testcases.description}`, function () {
	describe(`${testcases.method} | ${testcases.positive.tag} | ${testcases.path}`, function () {
		it(`${testcases.positive.success.list}`, async function () {
			const result = await connect('list', request.getUserList.page);
			expect(result.status).to.equal(response.getUserList.httpStatus);
			expect(result.body).to.be.jsonSchema(schema, JSON.stringify(result.body));
			expect(result.body.total_pages).to.equal(response.getUserList.totalPage, JSON.stringify(result.body));
			expect(result.body.total).to.equal(response.getUserList.totalData, JSON.stringify(result.body));
		});
		it(`${testcases.positive.success.detail}`, async function () {
			const result = await connect('id', request.getUser.id.valid);
			expect(result.status).to.equal(response.getUser.success.httpStatus);
			expect(result.body.data.first_name).to.equal(response.getUser.success.firstName, JSON.stringify(result.body));
			expect(result.body.data.last_name).to.equal(response.getUser.success.lastName, JSON.stringify(result.body));
			expect(result.body.data.email).to.equal(response.getUser.success.email, JSON.stringify(result.body));
		});
	});

	describe(`${testcases.method} | ${testcases.negative.tag} | ${testcases.path}`, function () {
		it(`${testcases.negative.notFound}`, async function () {
			const result = await connect('id', request.getUser.id.notFound);
			expect(result.status).to.equal(response.getUser.notFound.httpStatus);
		});
	});
});