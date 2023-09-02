import React from "react";


function Select(){
 

    return(
        /** 
          <fieldset className="mb-5 border">
                <div className="mb-5">
                <legend className="font-bold">¿Desea añadir otro ingrediente?</legend>
                </div>
                <div className="mb-5 ml-5">
                    <input type="check" id="si" name="options" value="si" className="" 
                    checked={selectedOption === "si"}onChange={handleOptionChange}/>
                    <label for="huey" className="ml-1 text-black-400">Sí</label>
                    <input type="radio" id="no" name="options" value="no" className="ml-2" 
                    checked={selectedOption === "no"}onChange={handleOptionChange}/>
                    <label for="dewey" className="ml-1">No</label>
                 </div>
          </fieldset>
      */
      
        <div className="mb-5 ">
        <select name="select" className="rounded-lg">
            <option value="salami_picante">Salami Picante</option>
            <option value="jamom">Jamón</option>
            <option value="aceitunas">Aceitunas</option>
            <option value="tomate">Tomate</option>
            <option value="tomate">Queso</option>
        </select>  
        </div>
      
    );
}
export default Select;



