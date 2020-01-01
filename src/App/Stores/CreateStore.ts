import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  /**
   * Blacklist state that we do not need/want to persist
   */
  blacklist: [
    // 'auth',
  ],
};

export default (rootReducer: any) => {
  const middleware = [];
  const enhancers = [];

  // Connect the thunk to the redux store
  middleware.push(thunk);

  enhancers.push(applyMiddleware(...middleware));

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, composeWithDevTools(compose(...enhancers)));
  const persistor = persistStore(store);

  return { store, persistor };
};
