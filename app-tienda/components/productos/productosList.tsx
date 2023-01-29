import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC } from 'react';
import { IProducto } from "@/interfaces/productos"


interface Props {
    productos: IProducto[]
}
export const ProductosList:FC<Props> = ({ productos }) => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="right">Modelo</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Fabricante</TableCell>
                <TableCell align="right">Descripcion</TableCell>
                <TableCell align="right">idCliente</TableCell>
                <TableCell align="right">idCategoria</TableCell>
                <TableCell align="right">idProveedor</TableCell>
                
            </TableRow>
        </TableHead>

        <TableBody>
                { 
                    productos.map((producto: IProducto) => (
                        <TableRow key= { producto.id } 
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                { producto.id }
                            </TableCell>
                            <TableCell align="right">{producto.modelo}</TableCell>
                            <TableCell align="right">{producto.precio}</TableCell>
                            <TableCell align="right">{producto.fabricante}</TableCell>
                            <TableCell align="right">{producto.descripcion}</TableCell>
                            <TableCell align="right">{producto.idCliente}</TableCell>
                            <TableCell align="right">{producto.idCategoria}</TableCell>
                            <TableCell align="right">{producto.idProveedor}</TableCell>

                        </TableRow>
                    )
                )}
                
            </TableBody>
        </Table>
    </TableContainer>
  )
}