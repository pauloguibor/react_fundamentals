import React from "react";
import produtos from "../../data/produtos"
import "./ListaProduto.css"

export default props => {
    const produtosLista = produtos.map((produto, i) => {
        return (   
            <tr className={i%2 === 0 ? 'Par': 'Impar'} key={produto.id}>
                	<td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.valor}</td>
            </tr>
        );
    });
    return (
        <div className="TabelaProduto">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                
                <tbody>
                    {produtosLista}
                </tbody>
            </table>
        </div>
    )
}