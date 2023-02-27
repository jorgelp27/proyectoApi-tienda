
import { ProductoDetail } from "@/components/productos/LibroDetail";
import { useProductos } from "@/hooks/useProductos";
import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts, PublicLayouts } from "../../layouts";

interface Props {
  isbn: string
}

const ProductoPage = () => {
  const router = useRouter();
  console.log(router);
 
  const isbn = router.query;
  // renombrando la variable libros por libro
  const { productos:producto, isLoading } = useProductos(`/productos/${isbn.id}`);
  console.log(producto)
return (
  <PublicLayouts> 
     <h2>detalle del producto {`${router.query.id}`} </h2>
      <ProductoDetail producto={producto} />
      
  </PublicLayouts>
  
)
}


export default ProductoPage