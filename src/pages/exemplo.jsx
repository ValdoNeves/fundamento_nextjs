import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
  return (

    <Layout titulo="Exemplo usando componentes">
      <div>
        <Cabecalho titulo="Next.Js & React" />
        <Cabecalho titulo="Aprendendo na pratica" />
      </div>
    </Layout>

  )

}