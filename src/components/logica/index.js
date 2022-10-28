import React from 'react'
import { useContador } from '../Hooks/useContador';
import {Contador} from "../contador/index";
export const Logica = () => {
const {aumentar, disminuir, reset, data} = useContador();
return(
<div> 
<Contador Contador ={data} />
  <button onClick={()=>aumentar()}>aumentar</button>
  <button onClick={()=>reset()}>reset</button>
  <button onClick={()=>disminuir()}>disminuir</button>
</div>
)
}