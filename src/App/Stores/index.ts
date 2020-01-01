import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import { reducer as ExampleReducer } from './Example/Reducers';

export default () => {
  const rootReducer = combineReducers({
    example: ExampleReducer,
  });

  return configureStore(rootReducer);
};
