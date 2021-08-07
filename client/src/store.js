// Importing createStore from redux library in order to create a store for the reducer
import { createStore } from 'redux'
import { reducer } from './utils/reducers'

export const store = createStore(reducer);