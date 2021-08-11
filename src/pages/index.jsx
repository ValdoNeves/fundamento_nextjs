import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Inicio() {
  return (
    <div style={{
      //estilo interno
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Navegador destino="/estiloso" texto="Estiloso" cor="#9400d3"/>
      <Navegador destino="/exemplo" texto="exemplo"/>
      <Navegador destino="/jsx" texto="jsx" cor="crimson"/>
      <Navegador texto="Navegação" destino="/navegation"></Navegador>
      <Navegador texto="Navegação #01" destino="/cliente/123"></Navegador>
      <Navegador texto="Navegação #02" destino="/cliente/sp/123"></Navegador>
      <Navegador texto="Navegação #03" destino="/estado" cor="#9400d3"></Navegador>
      
    </div>
  )
}