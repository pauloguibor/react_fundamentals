import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {

    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const geraNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function(e){
                    props.quandoClicar("joao", gerarIdade(), geraNerd())
                }
            }>
                fornecer informacoes
            </button>
        </div>
    )
}