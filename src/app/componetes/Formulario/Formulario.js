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

    return(
        
        <section className="Formulario"> 
            <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="Digite seu Nome"/>
            <CampoTexto label="Cargo" placeholder="Digite seu Cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem"/>
            <ListaSuspensa label="Times" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario