import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import getStore from '../store'
const App = () => {
    return (
        <Provider store = {getStore()}>
            <BrowserRouter>{Routes}</BrowserRouter>
        </Provider>
    )
}
ReactDom.hydrate(<App></App>, document.getElementById('root'))