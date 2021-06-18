import React from 'react'
import { useEffect, useState } from 'react'
import { Form, Container } from './styles'
import api from '../../services/api'
import { useRouteMatch, Link } from 'react-router-dom'

interface SeleçõesParametros {
  id: string
}

interface Cadastro {
  id: string;
  ano: string;
  sede: string;
  campeao: string;
}

const Dashboard: React.FC = () => {
  const { params } = useRouteMatch<SeleçõesParametros>()

  const [campeoes, setCampeoes] = useState<Cadastro[]>([])
  const [id, setID] = useState('')
  const [ano, setAno] = useState('')
  const [sede, setSede] = useState('')
  const [campeao, setCampeao] = useState('')

  useEffect(() => {
    async function loadData() {
      const dados = await api.get(`/worldcup/${params.id}`).then(response => response.data)
      console.log(dados)
      if (dados) {
        setID(dados.id)
        setAno(dados.ano)
        setSede(dados.sede)
        setCampeao(dados.campeao)
        const idD = dados.id
      } else {
        setCampeoes([])
      }
    }
    loadData()
  }, [])

  async function AddCampeoes(event: any) {
    event.preventDefault()

    const { target: form } = event

    const newCadastro = {
      id: form.id.value,
      ano: form.ano.value,
      sede: form.sede.value,
      campeao: form.campeao.value,
    }

    if (id) {
      await api.put(`/worldcup/${id}`, newCadastro)
      alert('Dados Alterados com sucesso !!')
    } else {
      await api.post('/worldcup', newCadastro)
      alert('Dados incluidos com sucesso !!')
    }

    setCampeoes([...campeoes, newCadastro])
    setAno('')
    setSede('')
    setCampeao('')
  }
//
  useEffect(() => {
    api.get('/worldcup').then(response => setCampeoes(response.data))
  }, [])
  console.log(campeoes)
  
  async function DeleteClient(id: string) {
    await api.delete(`/worldcup/${id}`)
    alert('Dados excluidos com sucesso!!')
    setCampeoes(campeoes.filter(champ => champ.id !== id))
  }
  
  useEffect(() => {
    ListarClientes()
  }, [])
  
  async function ListarClientes() {
    const ListCampeoes = await api.get('/worldcup')
    setCampeoes(ListCampeoes.data)
  }

  return (
    <Container>
    <Form onSubmit={AddCampeoes}>
      <input type='text' name='ano' value={ano}
        onChange={e => setAno(e.target.value)} placeholder='Ano' />
      <input type='text' name='sede' value={sede}
        onChange={e => setSede(e.target.value)} placeholder='Sede' />
      <input type='text' name='campeao' value={campeao}
        onChange={e => setCampeao(e.target.value)} placeholder='Campeao' />
      <button type='submit'>Salvar</button>
      <ul>
        {campeoes.map((champ, index) =>
          <li key={index.toString()}>
            <h3>{champ.campeao} - {champ.ano}</h3>
            <Link to={`/detalhes/${champ.id}`}><button type="button">Detalhes</button></Link>
            <a href='/'><button type="button" onClick={() => DeleteClient(champ.id)}>Excluir</button></a>
          </li>
        )}
      </ul>
    </Form>
    </Container>
  )
}

export default Dashboard