const { path } = require('../helpers/path');
const { response } = require('../helpers/response/put_users_response');

const testcases = {
	description: '@Put @UpdateUser Update User',
	method: 'PUT',
	path: `${path.getUser.main}`,
	positive: {
		tag: '@Positive @Positive-UpdateUser',
		success: `Should get HTTP Status: ${response.positive.httpStatus}`
	}
};

module.exports = { testcases };