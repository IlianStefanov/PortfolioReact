import React from 'react';
import { Spring, config } from'react-spring/';
import HookedComponent from '../animations/Hooks.jsx';
const Counter = () => (
    <div>
        <Spring
            from={{ number: 0 }}
            to={{ number: 30 }}
            delay= '1000'
            config = { config.molasses }>
            {props => <div>{props.number.toFixed()}</div>}
        </Spring>

    </div>
)

export default Counter;