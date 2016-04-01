import { AsyncStorage } from 'react-native';
import reduxPersistImmutable from 'redux-persist-immutable';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';
import { persistStore, autoRehydrate } from 'redux-persist';

export default function configureStore() {
  const reducer = combineReducers({ ...reducers });
  const store = compose(autoRehydrate(), applyMiddleware(thunkMiddleware))(createStore)(reducer);
  persistStore(store, {
    transforms: [reduxPersistImmutable],
    storage: AsyncStorage
  });

  return store;
}
