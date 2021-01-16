import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

import AppEntry from '../src/components/appEntry';
import rootReducer from './services/appState/'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({ reducer: persistedReducer })

const persisistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persisistor}>
            <AppEntry />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)
