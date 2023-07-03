import './colaborador.css'
import {TiDelete} from 'react-icons/ti'
import {AiFillHeart,AiOutlineHeart } from 'react-icons/ai'

const Colaborador = ({ colaborador, corDeFundo, AoDeletar,aoFavoritar }) => {
    
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }
    
    return (
    <div className="colaborador">
        <TiDelete  size={25} onClick={()=>AoDeletar(colaborador.id)} className='deletar'/>
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favorito'>
                {colaborador.favorito ? 
                <AiFillHeart {...propsfavorito} color='#ff0000'/> : 
                <AiOutlineHeart {...propsfavorito}/>}
            </div>
        </div>
    </div>)
}

export default Colaborador