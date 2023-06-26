'use client';

import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../Listasuspensa"
import "./Formulario.css"
function Formulario (props){

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.ColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }
    

    const[nome,Setnome] = useState('')
    const[cargo,Setcargo] = useState('')
    const[imagem,Setimagem] = useState('')
    const[time,Settime] = useState('')

    return(
        
        <section className="Formulario"> 
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto 
            obrigatorio ={true} 
            label="Nome" 
            placeholder="Digite seu Nome" 
            valor={nome}
            aoAlterado={valor => Setnome(valor)} />
            <CampoTexto 
            obrigatorio ={true} 
            label="Cargo" 
            placeholder="Digite seu Cargo"
            valor={cargo}
            aoAlterado={valor => Setcargo(valor)} />
            <CampoTexto 
            label="Imagem" 
            placeholder="Digite o endereço da Imagem"
            valor={imagem}
            aoAlterado={valor => Setimagem(valor)} />
            <ListaSuspensa 
            obrigatorio ={true} 
            label="Times" 
            itens={props.times}   
            valor={time}
            aoAlterado={valor => Settime(valor)} 
            />
            <Botao>
                Criar Card
            </Botao>
            </form> 
        </section>
    )
}

export default Formulario