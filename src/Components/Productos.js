import React, {useState, useEffect} from 'react'
import ItemListConteiner from './ItemListConteiner';

const Productos = [
    
    {
        id: 1,
        Title: 'Caperucita Roja',
        description: 'el lobo se come a la abuela',
        price: '100',
        pricture: 'https://static.wikia.nocookie.net/biblioteca-virtual-de-literatura/images/1/1e/Caperucita_Roja.jpg/revision/latest/scale-to-width-down/1200?cb=20180628205842&path-prefix=es'
    

    },
    {   id: 2,
        Title: 'Blancanieves',
        description: 'El principe la besa y viven felices por siempre',
        price: '150',
        pricture: 'http://mientrasleemosaprendemos.blogspot.com/2015/09/blancanieves-y-los-siete-enanitos.html'

    }, 
    {id:1, 
        nombre:"Xiaomi Band 6", 
        precio: "5.123",
        img:"https://stylewatch.vtexassets.com/arquivos/ids/174852-800-auto?width=800&height=auto&aspect=true",
        
    },
    {
        id:2, 
        nombre:"Smartwatch Colmi Sky 5", 
        precio: "14.795",
        img:"https://stylewatch.vtexassets.com/arquivos/ids/214078-800-auto?width=800&height=auto&aspect=true", 
        
    },
        {id:3,
        nombre:"Smartwactch Garmin Rose", 
        precio: "234.295",
        img:"https://stylewatch.vtexassets.com/arquivos/ids/214962-800-auto?width=800&height=auto&aspect=true", 
        
    },
    {
        id:4,
        nombre:"Smartwatch Colmi P28 Plus", 
        precio: "15.095",
        img:"https://stylewatch.vtexassets.com/arquivos/ids/209935-800-auto?width=800&height=auto&aspect=true",
        
    },
    
];
export default Productos;