export default function Jsx(){

  const obj = {nome: "Eu", idade: 31}
  return(
    <div>
      <h1>JSX é um conceito central</h1>
      
      {"teste".toLocaleUpperCase()}<br/>
      <p>
        {JSON.stringify({nome: "Eu", idade: 31})}
        {JSON.stringify(obj)}
      </p>
    </div>
  )
}