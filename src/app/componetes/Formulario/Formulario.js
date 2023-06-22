import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../Listasuspensa"
import "./Formulario.css"
function Formulario (){

    const times = [
        'Programação',
        'Data science',
        'Devoups',
        'UX e Design',
        'Programação',
        'Inovação',
        'Front-End',
    ]
    const Salvarao =(event)=>{
        event.preventDefault()
        console.log('Formulario enviado')
    }



    return(
        
        <section className="Formulario"> 
            <form onSubmit={Salvarao}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio ={true} label="Nome" placeholder="Digite seu Nome"/>
            <CampoTexto obrigatorio ={true} label="Cargo" placeholder="Digite seu Cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem"/>
            <ListaSuspensa obrigatorio ={true} label="Times" itens={times}/>
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario