import React from 'react'
import './Head.css'
import { useNavigate } from 'react-router-dom'


export default function Head() {
  const navigate = useNavigate();
  return (
    <header>
        <h1>Lista de Fornecedores</h1>
        <button onClick={()=>navigate('/add')}>Adicionar</button>
    </header>
  )
}
