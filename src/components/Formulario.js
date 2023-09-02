import React from "react";
import Select from "./Select";
import { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Formulario(){
  const cantidad = 0;
  //Variables de estado
  const [selectedOption, setSelectedOption] = useState(null);
  //Verifica el cambio del radiobutton
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Genera un arreglo de datos para usar en los componentes Item
  const data = Array.from({ length: cantidad }, (_, index) => ({
    name: `Elemento ${index + 1}`,
  }));
  
    return(
        <div>
        <Nav/>
        <div className="md:flex mt-10 bg-amber-600 md:justify-center md:gap-10 md:items-center" > 
            <div className="md:w-4/12 p-5 ">
                <img src={require('../img/pizza2.png')} class="w-400"/>
            </div>
            <div className="md:w-4/12 p-6 rounded-lg shadow-xl bg-lime-400">
                <form>
                    <div className="mb-5">
                        <label id="name" className="mb-2 block uppercase text-black-500 font-bold">
                        Nombre del cliente 
                        </label>
                        <input id="name"name="name"type="text"placeholder="El nombre del cliente"className="border p-3 w-full rounded-lg"/>
                    </div>
                    {/**Aqui se deberia crear un componente para los ingredientes */}
                    <div className="border mb-5">
                        <div className="mb-5">
                            <label id="name" className="mb-2 block text-black-500 font-bold uppercase">
                            Selección de ingredientes 
                            </label>
                        </div>
                        <div className="flex">
                            <div className="md:w-1/4 mr-5 ml-3">
                                <Select/>
                            </div>
                            <div className="md:w-1/4">
                                <Select/>
                            </div>
                            {data.map((item, index) => (
                            <Select key={index} name={item.name} />
                    ))}
                        </div>
                    </div>
                    <fieldset className="mb-5 border">
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

                    <div className="mb-5">
                        <label id="name" className="mb-2 block uppercase text-black-300 font-bold">
                        ¿Cuál es la cantidad de ingredientes que desea agregar?
                        </label>
                        <input id="name"name="name"type="number" min="1" max="10"placeholder="Cantidad de ingredientes"className="border p-3 w-full rounded-lg"/>
                    </div>
                    <input type="submit" value="Enviar" className="bg-sky-600 hover:bg-sky-700 transition-colors cursor-pointer
                    uppercase font-bold w-full p-3 text-white rounded-lg"/>
                </form>
               
            </div>
        </div>
        <Footer/>
        </div>
    );
}
export default Formulario;