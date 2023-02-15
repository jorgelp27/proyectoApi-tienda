import { IProducto } from "@/interfaces/productos";
import { Grid } from "@mui/material";
import { FC } from "react"
import { ProductoCard } from "./ProductoCard";



interface Props {
    productos: IProducto[]
}


export const ProductosCardList:FC<Props> = ({ productos }) => {
  return (
    <Grid container spacing={4}>
      {
        productos.map( (producto ) => (
          <ProductoCard 
          producto = { producto }
            key = { producto.id }
          />
        ))
      }

    </Grid>
  )
}