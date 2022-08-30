import React from "react";
import ParOuImpar from "./components/condicional/ParOuImpar";
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProduto from "./components/repeticao/ListaProduto";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import "./App.css"


export default _ => 
    (
    <div className="App">
        <h1>Fundamentos react</h1>
        <div className="Cards">
        <Card titulo="#12 - Contador" color="#1B702B">
            <Contador numeroInicial={10}/>
        </Card>
        <Card titulo="#11 - componente controlado" color="#C0C01A">
            <Input/>
        </Card>
        <Card titulo="#10 - comu indireta" color="#C14242">
            <IndiretaPai/>
        </Card>
        <Card titulo="#9 - comu direta" color="#1AC0C0">
            <DiretaPai/>
        </Card>
        <Card titulo="#8 - condicional" color="#BF3F7D">
            <ParOuImpar/>
            <UsuarioInfo usuario={{nome:'Pv'}}/>
            <UsuarioInfo/>
        </Card>
        <Card titulo="#7 - tabela" color="#813FBF">
            <ListaProduto/>
        </Card>
        <Card titulo="#6 - Repetiçao" color="#3F7FBF">
            <ListaAlunos/>
        </Card>
        <Card titulo="#5 - Aleatorio" color="#D2691E">
            <Familia sobrenome="Guibor">
                <FamiliaMembro nome="Paulo"></FamiliaMembro>
                <FamiliaMembro nome="Maria"></FamiliaMembro>
            </Familia>
        </Card>
        <Card titulo="#4 - Aleatorio" color="#5F9EA0">
            <Aleatorio min ={1} max={60}/>
        </Card>
        <Card titulo="#3 - Fragmento" color="#7FFFD4">
            <Fragmento/>
        </Card>
        <Card titulo="#2 - Props" color="#A52A2A">
        <   ComParametro titulo="situ aluno" nome="Maria" nota={10}/> 
        </Card>
        <Card titulo="#1 - Primeiro componente" color="#0000FF">
            <Primeiro></Primeiro>
        </Card>
        </div>
        {/* <strong>Olá react</strong> */}
        {/* {tag} */}
    </div>
    )
