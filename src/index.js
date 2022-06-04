import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './redux/store'



// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(

    <App />

)