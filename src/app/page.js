import Banner from './componetes/Banner'
import CampoTexto from './componetes/CampoTexto'

export default function Home() {
  return (
    <div>
    <Banner/>
    <CampoTexto label="Nome" placeholder="Digite seu Nome"/>
    <CampoTexto label="Cargo" placeholder="Digite seu Cargo"/>
    <CampoTexto label="Imagem" placeholder="Digite o endereço da Imagem"/>
    </div>
  )
}
