import { combineReducers } from 'redux';
import tabletBoxOne from './classes/tabletBoxOne';
import tabletBoxTwo from './classes/tabletBoxTwo';
import tabletAlliance from './races/tabletAlliance';
import tabletHorde from './races/tabletHorde';
import _proff from './professions/_proff';
import _proff_action from './professions/_proff-action';
import _classes_action from './classes/_classes_action';
import mountGuideReducers from './mountGuide/mountGuideReducers';


const allReducers = combineReducers({
	tabletOne: tabletBoxOne,
	tabletTwo: tabletBoxTwo,
	tabletAlliance: tabletAlliance,
	tabletHorde: tabletHorde,

	_proff: _proff,
	action: _proff_action,

	_classes_action: _classes_action,

	mount: mountGuideReducers
});

export default allReducers;