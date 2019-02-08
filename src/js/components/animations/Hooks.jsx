//Hooks.jsx
import React from 'react';
import { animated } from 'react-spring';
import {useSpring} from 'react-spring/hooks';
const HookedComponent = () => {
    const props = useSpring(() => ({ opacity: 1,
      color: 'white',
      from: { opacity: 0 },
      delay: '2000' }))
        

    return <animated.div style={props}>This text Faded in Using hooks</animated.div>
}

export default HookedComponent;
