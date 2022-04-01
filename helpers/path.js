const baseUrl = 'https://reqres.in';
const path = {
	getUser: {
		main: '/api/users',
		param: '?page='
	},
	register: '/api/register'
};

module.exports = { baseUrl, path };