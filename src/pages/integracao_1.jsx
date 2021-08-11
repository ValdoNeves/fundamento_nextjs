import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

  const [cliente, setCliente] = useState({})

  function obterCliente(){
    fetch('http://localhost:3000/api/clientes/123')
      .then(resp => resp.json())
      .then(dados => setCliente(dados))
  }

  return (
    <Layout titulo="Implementando com API">
      <ul>
        <li>codigo: {cliente.id} </li>
        <li>Nome: {cliente.nome}</li>
        <li>email: {cliente.email} </li>
      </ul>
      <div>
      <input type="number"  />
      <button onClick={obterCliente}>Obter cliente</button>
      </div>

    </Layout>
  )
}