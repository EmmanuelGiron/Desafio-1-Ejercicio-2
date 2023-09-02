import React from "react";


function Select(){
 

    return(
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



