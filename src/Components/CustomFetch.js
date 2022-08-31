import Productos from "./Productos";
import React, {useEffect, useState } from 'react'
import ItemList from './ItemList'


export const CustomFetch = (Productos) => {
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve(Productos)
    },3000)
    
         
    })
}