import Colaboradores from "../Colaboradores"
import "./Time.css"

const Times = (props) =>{

    const css ={borderColor: props.corPrimaria}

    return(
        <section className="times" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={css}>{props.nome}</h3>
            <Colaboradores/>
            <Colaboradores/>

        </section>
    )
}

export default Times