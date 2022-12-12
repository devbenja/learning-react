import React, { useState } from "react";
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [ counter = value, setCounter ] = useState();

    // Sumar el contador
    const handleAdd = () => {
        setCounter( counter + 1);
    }

    // Restar el contador
    const handleSud = () => {
        setCounter( counter - 1);
    }

    // Resetear contador 
    const handleRes = () => {
        setCounter( value );
    }

    return(
        <div className="counter-app">
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>Sumar</button>
            <button onClick={ handleRes }>Reset</button>
            <button onClick={ handleSud }>Restar</button>
        </div>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}