'use client';

import { useState } from 'react'
import Banner from './componetes/Banner'
import Formulario from './componetes/Formulario/Formulario'
import Times from './componetes/Times';

export default function Home() {

  const times = [
    {
      nome:'Programação',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9',
    },
    {
      nome:'Front-End',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF',
    },
    {
      nome:'Data science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2',
    },
    {
      nome:'Devops',
      corPrimaria:'#E06B69',
      corSecundaria:'#FDE7E8',
    },
    {
      nome:'UX e Design',
      corPrimaria:'#D86EBF',
      corSecundaria:'#FAE5F5',
    },
    {
      nome:'Mobile',
      corPrimaria:'#FEBA05',
      corSecundaria:'#FFF5D9',
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF',
    },
  ]

  const [colaboradores, Setcolaboradores] =useState([])

  const NovoColaboradorAdicionado =(colaborador)=>{
    console.log(colaborador)
    Setcolaboradores([...colaboradores, colaborador])
  }
  return (
    <div>
    <Banner/>
    <Formulario times= {times.map(time => time.nome)} ColaboradorCadastrado = {colaborador =>NovoColaboradorAdicionado(colaborador)}/>
    {times.map(time => 
    <Times 
    key={time.nome} 
    nome={time.nome} 
    corPrimaria={time.corPrimaria} 
    corSecundaria={time.corSecundaria}
    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
    />)}
    </div>
  );
}
