import { Button } from "@mui/material";
import { NextPage } from "next"
import { MainLayouts } from "../layouts";
import { useClientes } from '../hooks/useClientes';
import { ClientesList } from '../components/clientes/clientesList';
import { Mundo } from '../components/Mundo';
 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
  const { clientes, isLoading } = useClientes ('/clientes');
  const respuesta = useClientes ('/clientes');
 console.log(respuesta);
  console.log(isLoading, "c=", clientes);
  return (
    <MainLayouts>
      {
        (isLoading )
          ? <ClientesList clientes={ clientes }  /> 
          : <Mundo />

      }
        
    </MainLayouts>
  )
}

export default indexPage