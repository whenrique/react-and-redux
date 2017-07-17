import React from 'react'
import ReactDOM from 'react-dom'
import { First, Second } from './firstComponent'

ReactDOM.render(
    <div>
        <First />
        <Second />
    </div>,
    document.querySelector('#app')
)