import React from "react";
import Todos from "./todo";

function TodoListe({todoListe}) {
    return ( 
        <div>
{todoListe.map((el)=>(<Todos todoListe={el} key={el.id} />))}
        </div>
     );
}

export default TodoListe;