import { livros  } from './dadosUltimosLancamentos'
import { Titulo  } from '../Titulo'
import { livros2 } from './dadosUltimosLancamentos'
import CardRecomenda from '../../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png'

import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    `

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    
`

function UltimosLancamentos () {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            cor="#000" 
            tamanhoFonte="36px" 
            alinhamento="center"
            >ULTIMOS LANÇAMENTOS
            </Titulo>
                <NovosLivrosContainer>

                    {livros.map( livro => (
                        <img src={livro.src} />
                        ))}

                        {livros2.map( livro11 => (
                            <img src={livro11.src} />
                            ))} 
                                     
            </NovosLivrosContainer>
            <CardRecomenda 
                 titulo="Talvez você se interesse por"
                 subtitulo="Angular 11"
                 descricao="Construindo uma aplicação com a plataforma Google"
                 img={imagemLivro}
            />
        </UltimosLancamentosContainer>
       
    )
}

export default UltimosLancamentos