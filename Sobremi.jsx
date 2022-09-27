import React from "react";
import "./Sobremi.css";
import fotoPerfil from "../../media/fotoPerfil.webp";

const Sobremi = () => {
  return (
    <div className="sobremi-container">
      <div className="sobremi-desc">
        <h3>Sobre mi</h3>
    <p>
        Hola!!! bienvenido 

        Mi nombre es Carolina Romero 
        soy bogotana, tengo 34 años.

        ¿Desde cuando me dedico al desarrollo? 
        soy Junior en la profesión y actualmente realizo mis pasantias con una gran empresa de tecnología “Indra-Minsait” Lo que me hace sentir que nunca es tarde para soñar.

        ¿por que escogíeste camino?
        la verdad yo no lo escogi, este me escogio a mi y termine enamorandome porque tiene demasiadas alternativas para crecer a nivel personal y para la sociedad en si misma. Ademas es un reto continuo, nunca paras de aprender. 


      </p>

      </div>
      <div className="sobremi-img">
        <img
          src={fotoPerfil}
          alt="sobremi"
        />
      </div>
    </div>
  );
};

export default Sobremi;


//modelo clasico de un componente, acá estamos usando archivos ".jsx", que son una mezcla 
// de archivos javascript y html.
//la parte de javascript es "const About", y la de html, es lo que hay debajo del return.
//Todos los componentes deben ser llamados con la letra Inicial en mayúscula.
// como la palabra "class", es reservada de javascript, en react se utiliza: "className", para hacer llamado a las clases desde el css 
//y poder aplicar los estilos.
//Aplica para todos los componentes.
//En este caso la imagen se trajo desde una web.