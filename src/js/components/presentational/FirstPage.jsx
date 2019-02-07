import React from "react";
import PropTypes from "prop-types";
import { animated, Spring } from 'react-spring';
import Counter from '../animations/Counter.jsx';
import HookedComponent from '../animations/Hooks.jsx';
// import '../../../css/pageTransition.scss';
const FirstPage = ({styleTransition, smut}) => (
            // Add animated.div to access animated properties {...styleTransition}
            <Spring from={{ opacity: 0, marginTop: -1000 }} to={{ opacity: 1, marginTop: 0 }}>
            { props  => (

                <div className="section glitch" id="section0" style={props}>
                    <div className="triangle glitch"></div>
                    <div className="content-wrapper">
                    <h1>Lorem Ipsum!
                        </h1>
                    <p>Lorem Ipsum golorem ar</p>
                    </div>
                    <Counter />
                    <HookedComponent />
                </div>   
                
                
            )
            
            
            }
            
            </Spring>
            

);

export default FirstPage;