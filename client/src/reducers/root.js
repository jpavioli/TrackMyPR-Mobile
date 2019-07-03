import { combineReducers } from 'redux';
import userReducer from './userReducer';
import workoutsReducer from './workoutsReducer';
import scoreReducer from './scoreReducer'
import environmentReducer from './environmentReducer'

const rootReducer = combineReducers({
  user: userReducer,
  workouts: workoutsReducer,
  score: scoreReducer,
  environment: environmentReducer
});

export default rootReducer
