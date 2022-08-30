import React from "react";

export default (props) => {

    const aleatorio= parseInt(Math.random() * (props.max - props.min)) + props.min

    const {min, max} = props;
    return (
        <div>
        <h2>Valor Aleatorio</h2>
        <p><strong>Valor min:</strong>  {props.min}</p>
        <p><strong>Valor max:</strong>  {props.max}</p>
        <p><strong>Valor aleatorio:</strong>  {aleatorio}</p>
    </div>
    )
}
    
