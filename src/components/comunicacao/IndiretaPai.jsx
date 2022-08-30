import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

    const [nome, setNome] = useState("?")
    const [nerd, setNerd] = useState(false)
    const [idade, setIdade] = useState(21)

    function fornecerInformacoes(nomeParam, idadeParam, nerdParam){
        setIdade(idadeParam)
        setNerd(nerdParam)
        setNome(nomeParam)
    }

    return (
        <div>
            <div>Pai</div>
            <span>{nome} </span>
            <span>{idade} </span>
            <span>{nerd ? 'Verdadeiro': "Falso"}</span>
           <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}