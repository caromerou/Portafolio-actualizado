import React, { useState, useEffect } from "react";
import "./App.css";
//Todos estos import, son los componentes creados en la carpeta src, y llamados en la function app
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Sobremi from "./components/sobremi/Sobremi";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slides";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight}/>
      <Home/>
      <Sobremi/>
      <Slider/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;

//Esta es la Aplicacion principal donde se llaman todos los componentes.
//<Navbar />, <Cover />, <About />,<Slider />,<Info />,<Footer /> son los componentes propiamente creados en src
//e importados desde la linea 4 a la linea 9
