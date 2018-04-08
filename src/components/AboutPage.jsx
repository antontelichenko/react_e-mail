import React from 'react';

var createReactClass = require('create-react-class');

const AboutPage = createReactClass({
    render() {
        return (
            <div className='AboutPage'>
                <h2 className='title'>
                    This is messages application
                </h2>

                <div className='text'>
                    <p>adsfsa sfasdfasfa sdfskldj sklj kslf jskldf jsfdkl jsdkjf </p>

                    <p>adsfsads skldj sklj kslf jskldf jsfdkl jsdkjf </p>

                    <p>asdfa sfasdfskldj sklj df jsfdkl jsdkjf </p>

                    <p>adsfsasfasdf jsfdkl jsdkjf </p>

                    <p>asdfsa dl kj f sld;kfldf jsfdkl jsdkjf </p>
                </div>
            </div>
        );
    }
});
export default AboutPage;