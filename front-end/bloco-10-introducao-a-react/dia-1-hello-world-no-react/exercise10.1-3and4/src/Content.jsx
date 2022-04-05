import React from 'react'
import './App.css'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];
const mapContents = conteudos.map((content) => {
  return (
    <section className='item'>
      <p>O Conteúdo é: {content.conteudo}</p>
      <p>Status: {content.status}</p>
      <p>Bloco: {content.bloco}</p>
    </section>
  )
  })

class Content extends React.Component {
  render() {
    return (
      <div className='container'>
        {mapContents}
      </div>
    )
  }
}

export default Content
