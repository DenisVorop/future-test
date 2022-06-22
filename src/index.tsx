import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import { setupStore } from './store/store'

import './style/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const store = setupStore()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
