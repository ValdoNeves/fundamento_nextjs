import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

  const [codigo, setCodigo] = useState(1)
  const [cliente, setCliente] = useState({})

  function obterCliente() {
    fetch(`http://localhost:3000/api/clientes/${codigo}`)
      .then(resp => resp.json())
      .then(dados => setCliente(dados))
  }

  async function obterClienteAsync() {
    const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
    const dados = await resp.json()
    setCliente(dados)
  }

  return (
    <Layout titulo="Implementando com API">
      <ul>
        <li>codigo: {cliente.id} </li>
        <li>Nome: {cliente.nome}</li>
        <li>email: {cliente.email} </li>
      </ul>
      <div>
        <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)} />
        <div>
          <button onClick={obterCliente}>Obter cliente</button>
        </div>
        <div>
          <button onClick={obterClienteAsync}>Obter cliente asyncrono</button>
        </div>
      </div>

    </Layout>
  )
}