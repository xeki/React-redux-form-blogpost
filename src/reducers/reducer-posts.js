import { FETCH_POSTS, FETCH_POST, DELTE_POST }  from '../actions';


import _ from 'lodash';

export default function(state={},action){
	switch(action.type){
		case DELTE_POST:
			return _.omit(state,action.payload);
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data,"id");
		case FETCH_POST:
			return {...state,[action.payload.data.id]:action.payload.data};
		default:
			return state;
	}
}
