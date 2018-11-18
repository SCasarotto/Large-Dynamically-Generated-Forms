import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

// import DynamicForm from './DynamicForm'
// import DynamicFormOrganized from './DynamicFormOrganized'
import DynamicFormOrganizedWithContext from './DynamicFormOrganizedWithContext'

import * as serviceWorker from './serviceWorker'

// ReactDOM.render(<DynamicForm />, document.getElementById('root'))
// ReactDOM.render(<DynamicFormOrganized />, document.getElementById('root'))
ReactDOM.render(<DynamicFormOrganizedWithContext />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
