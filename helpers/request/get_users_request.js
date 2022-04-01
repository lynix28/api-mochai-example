const request = {
	getUserList: {
		page: 2,	
	},
	getUser: {
		id: {
			valid: 7,
			notFound: 999999
		}
	}
};

module.exports = { request };