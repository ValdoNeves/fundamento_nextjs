import Layout from "../components/Layout";

export default function Estado() {
  let numero = 3
  return (
    <Layout titulo="Componente com Estado">
      <span>{numero}</span>
    </Layout>
  )
}