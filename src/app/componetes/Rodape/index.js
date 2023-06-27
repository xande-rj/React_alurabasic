import "./Rodape.css"

const Rodape =()=>{
    return(
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank"/> 
                        <img src="/Imagens/fb.png"/>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank"/> 
                        <img src="/Imagens/tw.png"/>
                    </li>
                    <li>
                        <a href="instragram.com" target="_blank"/> 
                        <img src="/Imagens/ig.png"/>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/Imagens/logo.png"/> 
            </section>
            <section>
                <p>
                    Desenvolvido por Alura.
                </p>
            </section>
        </footer>
    )
}

export default Rodape