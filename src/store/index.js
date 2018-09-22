import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const reducer = (state = {name: 'zzw'}, action) => {
    return state
}

const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))

}

export default getStore