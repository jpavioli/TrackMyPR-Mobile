import { combineReducers } from 'redux';
import userReducer from './userReducer';
import workoutsReducer from './workoutsReducer';
import scoreReducer from './scoreReducer'

const rootReducer = combineReducers({
  user: userReducer,
  workouts: workoutsReducer,
  score: scoreReducer
});

export default rootReducer
