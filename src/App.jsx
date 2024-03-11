
import './App.css'
import CardImg from "./componentes/CardImg"
import mujer from './assets/imagenes/mujer.jpg'
import man from './assets/imagenes/man.jpg'
import woman from './assets/imagenes/woman.jpg'
function App() {
  return (
    <div className="container">
    <h1>Esta es mi galería de imágenes</h1>
    <div className="cards">
      <CardImg
     img={mujer}
     name="Laura Rosales Cordero"
     descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit error ipsum esse, cumque alias blanditiis consectetur repellat ipsam excepturi recusandae dolorum tenetur corrupti neque quasi suscipit corporis harum? Exercitationem, totam."
     />
     <CardImg
     img={man}
     name="Juan Bananas Montiel"
     descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit error ipsum esse, cumque alias blanditiis consectetur repellat ipsam excepturi recusandae dolorum tenetur corrupti neque quasi suscipit corporis harum? Exercitationem, totam."
     />
         <CardImg
     img={woman}
     name="Claudia Ramos Huerta"
     descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit error ipsum esse, cumque alias blanditiis consectetur repellat ipsam excepturi recusandae dolorum tenetur corrupti neque quasi suscipit corporis harum? Exercitationem, totam."
     /><CardImg
     img={mujer}
     name="Laura Rosales Cordero"
     descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit error ipsum esse, cumque alias blanditiis consectetur repellat ipsam excepturi recusandae dolorum tenetur corrupti neque quasi suscipit corporis harum? Exercitationem, totam."
     />
     <CardImg
     img={man}
     name="Juan Bananas Montiel"
     descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit error ipsum esse, cumque alias blanditiis consectetur repellat ipsam excepturi recusandae dolorum tenetur corrupti neque quasi suscipit corporis harum? Exercitationem, totam."
     />
         <CardImg
     img={woman}
     name="Claudia Ramos Huerta"
     descripcion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit error ipsum esse, cumque alias blanditiis consectetur repellat ipsam excepturi recusandae dolorum tenetur corrupti neque quasi suscipit corporis harum? Exercitationem, totam."
     />
    </div>
     
    </div>
    
  )
}
export default App
