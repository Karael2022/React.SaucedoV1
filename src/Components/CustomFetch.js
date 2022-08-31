import Productos from "./Productos";
import React, {useEffect, useState } from 'react'
import ItemList from './ItemList'


export const CustomFetch = (ListProductos) => {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve(ListProductos)
    },3000)
    
         
    })
}