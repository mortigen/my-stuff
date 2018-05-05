import createHistory from 'history/createHashHistory'
import { applyMiddleware, createStore, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from './reducers'

export const history = createHistory()
const middleware = [ routerMiddleware(history) ]

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware)
        )
    )
}