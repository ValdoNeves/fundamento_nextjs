import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

export default function ClientePorCodigo() {

  const router = useRouter()

  return (
    <Layout titulo="Navegação dinâmica">
      <span>
        <h3>código</h3>
        filial: {router.query.filial}, <br/>
        cliente: {router.query.codigo}
      </span>
    </Layout>
  )
}