import { Mundo } from '@/components';
import { CestasList } from '@/components/cestas/cestasList';
import { useCesta } from '@/hooks/useCestas';
import { NextPage } from 'next';
import React from 'react'
import { MainLayouts } from '../../layouts'


const CestaPage: NextPage = () => {
  const { cestas, isLoading } = useCesta ('/cesta');
  const respuesta = useCesta ('/cesta');
 console.log(respuesta);
  console.log(isLoading, "c=", cestas);
  return (
    <MainLayouts>
      {
        (isLoading )
          ? <CestasList cestas={ cestas }  /> 
          : <Mundo />

      }
        
    </MainLayouts>
  )
}


export default CestaPage