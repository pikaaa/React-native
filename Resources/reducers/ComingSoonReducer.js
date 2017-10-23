export default (state = { total: 0, data: 'NA' }, action) => {
	switch (action.type) {
		case 'load_movies':
			return { ...state, total: action.total, data: action.payload };
		case 'navigation':
		console.log('====Reducer==');
		console.log(action.payload);
			return { ...state, navigation: action.payload };
		default:
			return state;
	}
};
