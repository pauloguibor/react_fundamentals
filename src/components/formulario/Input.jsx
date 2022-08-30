import React, {useState} from "react";
import "./Input.css"
export default props =>{
    const[valor, setValor] = useState('Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return (
        <div className="Input" style={{
            display: "flex",
            flexDirection: "column"
            }}>
            <input value={valor} onChange={quandoMudar}></input>
            <span>{valor}</span>
        </div>
        
    )
}