const response = {
	getUserList: {
		httpStatus: 200,
		totalPage: 2,
		totalData: 12,	
	},
	getUser: {
		success: {
			httpStatus: 200,
			firstName: 'Michael',
			lastName: 'Lawson',
			email: 'michael.lawson@reqres.in'
		},
		notFound: {
			httpStatus: 404
		}
		
	}
};

module.exports = { response };