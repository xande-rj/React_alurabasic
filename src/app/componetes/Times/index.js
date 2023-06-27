import Colaboradores from "../Colaboradores"
import "./Time.css"

const Times = (props) => {

    const css ={borderColor: props.corPrimaria}
    const CountColaboradores = props.colaboradores.length

    
    return(
        CountColaboradores &&
        <section className="times" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={css}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaboradores nome ={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
        
    )
}

export default Times