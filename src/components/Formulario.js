import React from "react";
import Select from "./Select";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";


     function Formulario(prop){
  const cantidad = 0;
  //Variables de estado
  const [selectedOption, setSelectedOption] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [tipo, setTipo] = useState(undefined);
  const [total, setTotal] =useState(null);
  //La idea es que el total sea la suma del total inicual + el total adicional
  const [totalInicial, setTotalInicial] =useState(0);
  const [totalAdicional, setTotalAdicional] =useState(0);
  const [count, setCount] =useState(0);
  //Verifica el cambio del radiobutton
  /** 
   * const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    if(event.target.value==="si" && !isVisible)
    {
        setIsVisible(!isVisible);
    }else if(isVisible === true){
        setIsVisible(false);
    }
  };
  */
  const handleSizeChange = (event) =>{
    console.log(event)
    setIsVisible(true)
    setSelectedOption(event.target.value)
    if(event.target.value === "personal" )
    {       setTotalInicial(7);
            setTipo("personal")
    }else if(event.target.value ==="mediana"){
            setTotalInicial(10);
            setTipo("mediana")
    }else if(event.target.value ==="grande"){
            setTotalInicial(12);
            setTipo("grande")
    }
  }
  const handleCount = (checkID) =>{
     if (document.getElementById(checkID).checked) {
        setCount(count + 1);
      } else {
        setCount(count - 1);
      } 
  }
const handleAdicional= ()=>{
    if(tipo === "personal"){
        if(count===3){
            setTotalAdicional(1)
            setTotal(7+1)
        }else if(count ===4){
            setTotalAdicional(0.75*2)
            setTotal(7+0.75*2)
        }else if(count===5){
            setTotalAdicional(0.5*3)
            setTotal(7+0.5*3)
        }else if(count>5){
            setTotalAdicional(0.25*4)
            setTotal(7+0.25*4)
        }

    }else if(tipo==="mediana"){
        if(count===3){
            setTotalAdicional(2)
            setTotal(10+2)
        }else if(count ===4){
            setTotalAdicional(1*2)
            setTotal(10+1*2)
        }else if(count===5){
            setTotalAdicional(0.75*3)
            setTotal(10+0.75*3)
        }else if(count>5){
            setTotalAdicional(0.5*4)
            setTotal(10+0.5*4)
        }

    }else if(tipo==="grande"){
        if(count===3){
            setTotalAdicional(2.5)
            setTotal(12+2.5)
        }else if(count ===4){
            setTotalAdicional(2*2)
            setTotal(12+2*2)
        }else if(count===5){
            setTotalAdicional(1*3)
            setTotal(12+1*3)
        }else if(count>5){
            setTotalAdicional(0.75*4)
            setTotal(12+0.75*4)
        }
    }
  
  }
  useEffect(() => {
    handleAdicional();
  }, [tipo, count]);

  {/**
    // Genera un arreglo de datos para usar en los componentes Item
    const data = Array.from({ length: cantidad }, (_, index) => ({
    name: `Elemento ${index + 1}`,
  }));
  */}
  
  
    return(
        <div>
        <Nav/>
        <div className="md:flex mt-10 bg-rose-600 md:justify-center md:gap-10 md:items-center" > 
            <div className="md:w-4/12 p-5 ">
                <img src={require('../img/pizza2.png')} class="w-400"/>
            </div>
            <div className="md:w-4/12 p-6 rounded-lg shadow-xl bg-amber-400">
            <div className="mb-5">
                  <legend className="font-bold uppercase ml-1 mb-1 text-center font-serif underline">Creación de Pizza</legend>
                  <p className="font-serif p-1 text-center">Arma tu pizza a tu manera</p>
              </div>
                <form>
                    <div className="mb-5">
                        <label id="name" className="mb-2 block uppercase  font-bold">
                        Nombre del cliente 
                        </label>
                        <input id="name"name="name"type="text"placeholder="El nombre del cliente"className="border p-3 w-full rounded-lg"/>
                    </div>
                    <fieldset className="mb-5 border">
                      <div className="mb-5">
                      <legend className="font-bold uppercase ml-1">Tamaño</legend>
                      </div>
                    <div className="mb-5 ml-5">
                          <input type="radio" id="personal" name="options" value="personal" className="" 
                          checked={selectedOption === "personal"} onChange={handleSizeChange}/>
                          <label for="huey" className="ml-1 text-black-400">Personal</label>
                          <input type="radio" id="mediana" name="options" value="mediana" className="ml-2" 
                          checked={selectedOption === "mediana"} onChange={handleSizeChange}/>
                          <label for="dewey" className="ml-1">Mediana</label>
                          <input type="radio" id="grande" name="options" value="grande" className="ml-2" 
                          checked={selectedOption === "grande"} onChange={handleSizeChange}/>
                          <label for="dewey" className="ml-1">Grande</label>
                    </div>
                    </fieldset>
                    {/**Nota: falta crear un componente para los ingredientes */}
                    {isVisible &&(
                        <div className="mb-5">
                        <fieldset className="mb-5 border">
                        <div className="mb-5 flex md:justify-between">
                        <legend className="font-bold ml-1">SELECCIÓN DE INGREDIENTES </legend>
                        <legend className="font-bold mr-5">Total: {count}</legend>
                        </div>
                        <div className="mb-5 ml-5">

                            <input type="checkbox" id="jamonID" name="jamon" value="jamon" className="mr-2" 
                            onChange={() => {
                                           handleCount('jamonID');
                                           handleAdicional(); 
                                           }}/>
                            <label for="huey" className="ml-1 text-black-400">Jamón</label>

                            <input type="checkbox" id="salamiID" name="salami" value="salami" className="ml-2"
                            onChange={() => {
                                            handleCount('salamiID');
                                            handleAdicional(); 
                                            }}/>
                            <label for="dewey" className="ml-1">Salami</label>
                            <input type="checkbox" id="pinaID" name="pina" value="pina" className="ml-2" 
                            onChange={() => {
                                            handleCount('pinaID');
                                            handleAdicional(); 
                                            }}/>
                            <label for="huey" className="ml-1 text-black-400">Piña</label>
                            
                            <input type="checkbox" id="salchichaID" name="salchicha" value="salchicha" className="ml-2"
                            onChange={() => {
                                            handleCount('salchichaID');
                                            handleAdicional(); 
                                            }}/>
                            <label for="dewey" className="ml-1">Salchicha</label>
                            
                            <input type="checkbox" id="carneID" name="carne" value="carne" className="ml-2"
                            onChange={() => {
                                            handleCount('carneID');
                                            handleAdicional(); 
                                            }}/>
                            <label for="dewey" className="ml-1">Carne</label>

                            <input type="checkbox" id="tocinoID" name="tocino" value="tocino" className="ml-2"
                            onChange={() => {
                                            handleCount('tocinoID');
                                            handleAdicional(); 
                                            }}/>
                            <label for="dewey" className="ml-1">Tocino</label>
                            {/**
                            <div className="md:w-1/4 mr-5 ml-3">
                                <Select/>
                            </div>
                            <div className="md:w-1/4">
                                <Select/>
                            </div>
                            {data.map((item, index) => (
                            <Select key={index} name={item.name} />
                            ))}
                             */}
                        </div>
                        </fieldset>
                        <fieldset className="mb-5 border">
                        <div className="mb-2 flex">
                            <legend className="font-bold uppercase mr-2 ml-1">Total:</legend>
                            <h1 className="font-bold">${totalInicial+totalAdicional}</h1>
                        </div>
                        </fieldset>
                    </div>
                    )}
                    {
                        /** 
                         * <fieldset className="mb-5 border">
                            <div className="mb-5">
                            <legend className="font-bold">¿Desea añadir otro ingrediente?</legend>
                            </div>
                            <div className="mb-5 ml-5">
                                <input type="radio" id="si" name="options" value="si" className="" 
                                checked={selectedOption === "si"}onChange={handleOptionChange}/>
                                <label for="huey" className="ml-1 text-black-400">Sí</label>
                                <input type="radio" id="no" name="options" value="no" className="ml-2" 
                                checked={selectedOption === "no"}onChange={handleOptionChange}/>
                                <label for="dewey" className="ml-1">No</label>
                            </div>
                            </fieldset>
                        */
                    }
                        
                    {  /**isVisible &&(
                      
                        <fieldset className="mb-5 border">
                        <div className="mb-5">
                        <legend className="font-bold uppercase">Ingredientes adicionales</legend>
                        </div>
                        <div className="mb-5 ml-5">
                        </div>
                        </fieldset>
                        <div className="mb-5">
                                <label id="name" className="mb-2 block uppercase text-black-300 font-bold">
                                ¿Cuál es la cantidad de ingredientes que desea agregar?
                                </label>
                                <input id="name"name="name"type="number" min="1" max="10"placeholder="Cantidad de ingredientes"className="border p-3 w-full rounded-lg"/>
                        </div>
                        
                    )*/}            
                    <input type="submit" value="Enviar" className="bg-sky-600 hover:bg-amber-600 transition-colors cursor-pointer
                    uppercase font-bold w-full p-3 text-white rounded-lg"/>
                </form>
               
            </div>
        </div>
        <Footer/>
        </div>
    );
};
export default Formulario;