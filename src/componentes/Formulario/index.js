import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({aoCadastrar, times, CadastraTime}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [NomeTime, setNomeTime] = useState('')
    const [CorTime, setCorTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    type='text'
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo
                    type='text'
                    obrigatorio={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <Campo 
                    type='text'
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto='Criar card' />
            </form>

            <form className="formulario" onSubmit={(evento)=>{
                evento.preventDefault()
                CadastraTime({nome: NomeTime, cor:CorTime})
            }}>
                <h2>Preencha os dados para criar Um novo Time</h2>
                <Campo
                    obrigatorio
                    type='text'
                    label='Nome'
                    placeholder='Digite o Novo Time '
                    valor={NomeTime}
                    aoAlterado={valor => setNomeTime(valor)}/>
                <Campo
                    obrigatorio
                    type='color'
                    label='Cor' 
                    placeholder='Escolha a Cor'
                    valor={CorTime}
                    aoAlterado={valor => setCorTime(valor)}/>
                <Botao texto='Criar Novo Time' />
            </form>
        </section>
    )
}

export default Formulario