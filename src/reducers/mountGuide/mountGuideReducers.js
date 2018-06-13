import { combineReducers } from 'redux';
import _mountsReputation from './_mountsReputation';
import _mountsPvP from './_mountsPvP';
import _mountsProff from './_mountsProff';
import _mountsPvE from './_mountsPvE';
import _mountsQuest from './_mountsQuest';
import _mountsSilverTournament from './_mountsSilverTournament';
import _mountsGameEvents from './_mountsGameEvents';
import _mountsPersonalCabinet from './_mountsPersonalCabinet';


const mountGuideReducers = combineReducers({
  reputation: _mountsReputation,
  pvp: _mountsPvP,
  pro_mount: _mountsProff,
  pve: _mountsPvE,
  quest: _mountsQuest,
  silver: _mountsSilverTournament,
  game_event: _mountsGameEvents,
  personal_cabinet: _mountsPersonalCabinet
});

export default mountGuideReducers;