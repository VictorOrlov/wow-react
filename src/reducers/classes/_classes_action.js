

export default function(state = null, action){
	switch(action.type){
	case "CLASS_SELECTED":
		return action.payload;
	default:
		return state;
	}
}