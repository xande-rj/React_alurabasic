import "./Campotexto.css"
// funciona a mesma coisa que o banner, a escolha e sua.
export const CampoTexto = (props)=>{
    // react trabalha com props que recebe do da page, que nesse caso e a label
    // O props e um variavel que significa propriedade e pode ser qualquer coisa 

    const propsModificado = `${props.placeholder}...`
   return(
   <div className="campo-texto">
        <label>
            {props.label}
        </label>
        <input required={props.obrigatorio} placeholder = {propsModificado}/>
    </div>
   )
}

