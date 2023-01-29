import { Mundo } from '@/components';
import { CategoriasList } from '@/components/categorias/categoriasList';
import { useCategorias } from '@/hooks/usecategorias';

import { NextPage } from 'next';
import React from 'react'
import { MainLayouts } from '../../layouts'

const categoriaPage: NextPage = () => {
  const { categorias, isLoading } = useCategorias ('/categoria');
  const respuesta = useCategorias ('/categoria');
 console.log(respuesta);
  console.log(isLoading, "c=", categorias);
  return (
    <MainLayouts>
      {
        (isLoading )
          ? <CategoriasList categorias={ categorias }  /> 
          : <Mundo />

      }
        
    </MainLayouts>
  )
}


export default categoriaPage