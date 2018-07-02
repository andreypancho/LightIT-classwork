import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header'

const Hello = function({name, number}) {
        return (
            <div>
                <Header></Header>
                <h2>{name}</h2>
                <p>{number}</p>
            </div>
        );
};


Hello.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
};
Hello.defaultProps = {
    name: 'Hi'
};


export default Hello;