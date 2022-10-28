import {useState} from "react";
export const  useContador = () =>{
const [data, setData] = useState(0)
const aumentar = () => {
    setData(data + 1)
}
const reset = () => {
    setData(0)
}
const disminuir = () => {
    if(data==0){
        alert("Ya no puedes disminuir menos de cero")
    }else{
        setData(data - 1)
    }
}
return{
    aumentar,disminuir,reset,data,setData
    }
}