export default function(state=null, action){
	switch(action.type){
	case "PROFF_SELECTED":
		return action.payload;
	default:
		return state;
	}
}