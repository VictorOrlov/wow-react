import { combineReducers } from 'redux';
import tabletBoxContent from './classes/tabletBoxContent';
import tabletRaces from './races/tabletRaces';
import _proff from './professions/_proff';
import _proff_action from './professions/_proff-action';
import _classesContent from './classes/classesContent';
import _racesContent from './races/racesContent';
import _guides from './guides/guidesContent';
import mountGuideReducers from './mountGuide/mountGuideReducers';
import _addons from './addons/_addons';


const allReducers = combineReducers({
  tabletClass: tabletBoxContent,
  tabletRaces: tabletRaces,

  _proff: _proff,
  action: _proff_action,

  cont_class: _classesContent,

  cont_race: _racesContent,

  cont_guide: _guides,

  mount: mountGuideReducers,

  addon: _addons
});

export default allReducers;