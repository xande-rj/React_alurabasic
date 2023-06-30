import './colaborador.css'
import {TiDelete} from 'react-icons/ti'

const Colaborador = ({ colaborador, corDeFundo,AoDeletar }) => {
    return (
    <div className="colaborador">
        <TiDelete  size={25}onClick={AoDeletar} className='deletar'/>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador