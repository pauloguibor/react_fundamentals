import React from "react"

export default function ComParametro(props){

    const status = props.nota >= 7 ? "Aprovado" : "reprovado"
    return (
        <div>
            <h2>{props.titulo}</h2>
            
            <p>Nome: {props.nome}
              Nota: {props.nota}
            status: {status}</p>
        </div>
    )
}