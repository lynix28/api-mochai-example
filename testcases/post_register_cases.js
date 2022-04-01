const { path } = require('../helpers/path.js');
const { request } = require('../helpers/request/post_register_request.js');
const { response } = require('../helpers/response/post_register_response.js');

const testcases = {
	description: '@Post @Register Register New User',
	method: 'POST',
	path: `${path.register}`,
	positive: {
		tag: '@Positive @Positive-Register',
		success: `Should get HTTP Status: ${response.success.httpStatus} and able to register with email ${request.success.email}`
	},
	negative: {
		tag: '@Negative @Negative-Register',
		failed: `Should get HTTP Status: ${response.failed.httpStatus} and got response message: ${response.failed.message}`
	}
};

module.exports = { testcases };