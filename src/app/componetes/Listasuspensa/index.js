import './ListaSuspensa.css'

const ListaSuspensa = (props)=>{
    //map faz cada array te devolvendo algo, o forreach não devolve nada
    return(
        <div className='lista-suspensa'>
            <label>
                {props.label}
            </label>
            <select>
                {props.itens.map(item =><option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa