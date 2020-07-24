const counterReducer = (state = 0, action) => {
	let number = action.payload ? action.payload : 1
	switch(action.type) {
		case 'INCREMENT':
			return state + number
		case 'DECREMENT':
			return state - number
		default:
			return state
	}
}

export default counterReducer;
