import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba';



const Time = ({ time, colaboradores, Deletar,mudarcor }) => {
    return (
        
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input onChange={evento => mudarcor(evento.target.value,time.id)} value={time.cor} type='color' className='input-color'/>
            <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} AoDeletar={Deletar} />)}
            </div>
        </section>

    )
}

export default Time