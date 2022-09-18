import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import * as React from 'react';
import { useCart } from '../Contex/CartContex'


const CartItem = ({compra})=> {
    const{removeItem}=useCart()
          


  return (
    
    <TableContainer maxWidth="fixed">
    
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Articulo</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell>Precio</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell ><img src={compra.img} alt={compra.name} className='imgCarrito'/></TableCell>
                    <TableCell>{compra.name}</TableCell>
                    <TableCell>{compra.quantity}</TableCell>
                    <TableCell>{compra.price}</TableCell>
                    <TableCell><button className='btn btn-dark' onClick={() =>removeItem(compra.id)}>Eliminar</button></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
   
  );
}

export default CartItem