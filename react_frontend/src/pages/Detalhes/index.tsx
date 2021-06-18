// import React, { useState, useEffect } from 'react'
// import { useRouteMatch } from 'react-router-dom'
// import api from '../../services/api'
// import { Container, Dados } from './styles'

// interface CampeoesParametros {
//   campeao: string;
// }

// interface Cadastro {
//     ano: string;
//     sede: string;
//     campeao: string;
// }

// const Detalhes: React.FC = () => {
//   const { params } = useRouteMatch<CampeoesParametros>()

//   const [campeoes, setCampeoes] = useState<Cadastro[]>([])

//   useEffect(() => {
//     api.get('/worldcup').then(response => setCampeoes(response.data))
//   }, [])


//   let detalhesCampeoes = []
//   detalhesCampeoes = campeoes.filter(champ => champ.campeao === params.campeao)
//   console.log(detalhesCampeoes)

//   return (
//     <Container>
//       <Dados>
//         <ul>
//           {detalhesCampeoes.map((champ, index) =>
//             <li key={index}>
//               <span>Campeao: {champ.campeao}</span>
//               <span>Ano: {champ.ano}</span>
//               <span>Sede: {champ.sede}</span>
//             </li>
//           )}
//         </ul>
//       </Dados>
//     </Container>
//   )
// }

// export default Detalhes

import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import api from '../../services/api'
import { Container, Dados } from './styles'

interface CampeoesParametros {
  id: string
}

interface Cadastro {
    id: string;
    ano: string;
    sede: string;
    campeao: string;
}

const Detalhes: React.FC = () => {
  const { params } = useRouteMatch<CampeoesParametros>()
  const [campeoes, setCampeoes] = useState<Cadastro[]>([])

  useEffect(() => {
    api.get('/worldcup').then(response => setCampeoes(response.data))
  }, [])


  let detalhesCampeoes = []
  detalhesCampeoes = campeoes.filter(champ => champ.id === params.id)
  console.log(detalhesCampeoes)
  return (
    <Container>
      <Dados>
        <ul>
          {detalhesCampeoes.map((champ, index) =>
            <li key={index}>
              <span>Campeao: {champ.campeao}</span>
              <span>Ano: {champ.ano}</span>
              <span>Sede: {champ.sede}</span>
            </li>
          )}
        </ul>
      </Dados>
    </Container>
  )
}

export default Detalhes

