const { path } = require('../helpers/path.js');
const { request } = require('../helpers/request/get_users_request.js');
const { response } = require('../helpers/response/get_users_response.js');

const testcases = {
	description: '@Get @GetUser Get User List',
	method: 'GET',
	path: `${path.getUser.main}`,
	positive: {
		tag: '@Positive',
		success: {
			list: `Should get HTTP Status: ${response.getUserList.httpStatus} and Total Users: ${response.getUserList.totalData}`,
			detail: `Should get HTTP Status: ${response.getUser.success.httpStatus} and Get User Detail with ID: ${request.getUser.id.valid}`,
		}
	},
	negative: {
		tag: '@Negative',
		notFound: `Should get HTTP Status: ${response.getUser.notFound.httpStatus} and no data found`
	}
};

module.exports = { testcases };