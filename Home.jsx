import React from "react";
import "./Home.css";
import matrixVideo from "../../media/matrixVideo.mp4";


const Home = () => {
  return (
    <div className="home-container">
      <video className="video" src={matrixVideo} autoPlay loop muted />
      <h1>caromero</h1>
      <p>Desarrolladora|Frontend  </p>
    </div>
  );
};

export default Home;


/*Dentro del source van todas las carpetas con los componentes y con
los archivos multimedia o imágenes, aunque estas se pueden crear como componentes
e importarlas desde una url, para no cargar mucho el proyecto*/