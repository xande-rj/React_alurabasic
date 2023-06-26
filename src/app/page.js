'use client';

import { useState } from 'react'
import Banner from './componetes/Banner'
import Formulario from './componetes/Formulario/Formulario'

export default function Home() {
  const [colaboradores, Setcolaboradores] =useState([])

  const NovoColaboradorAdicionado =(colaborador)=>{
    console.log(colaborador)
    Setcolaboradores([...colaboradores, colaborador])
  }
  return (
    <div>
    <Banner/>
    <Formulario ColaboradorCadastrado = {colaborador =>NovoColaboradorAdicionado(colaborador)}/>
    </div>
  )
}
