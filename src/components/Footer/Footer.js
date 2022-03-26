import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <h1>Question And Answer:</h1>
            <h3>Q1: How React Works</h3>
            <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. You can use it to help build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.React works in declarative code.A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML.
            </p>
            <h3>Q2: Difference Between Props Vs State</h3>
            <p>Props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
                ----------
                State: The Data is passed within the component only.It is Mutable (can be modified).State can be used only with the state components/class component.State is both read and write.
            </p>
        </div>
    );
};

export default Footer;