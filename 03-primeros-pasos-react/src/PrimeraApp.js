import React from "react";
import PropTypes from 'prop-types';

export const App = ({tecnologia, rango}) => {
    const nombre = "Benja Carías";

    return(
        <div>
            <h1>Soy {nombre}</h1>
            <p>{rango} Developer</p>
            <p>{tecnologia} Developer</p>
        </div>
    )
}

// Para que la propiedad tecnologia sea obligatoria
App.propTypes = {
    tecnologia: PropTypes.string.isRequired,
    rango: PropTypes.string.isRequired
}

// Properties por default
App.defaultProps = {
    tecnologia: 'Angular',
    rango: 'Backend'
}