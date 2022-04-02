const { path } = require('../helpers/path');
const { response } = require('../helpers/response/delete_users_response');

const testcases = {
	description: '@Delete @DeleteUser Delete User',
	method: 'DELETE',
	path: `${path.getUser.main}`,
	positive: {
		tag: '@Positive @Positive-DeleteUser',
		success: `Should get HTTP Status: ${response.positive.httpStatus}`
	}
};

module.exports = { testcases };