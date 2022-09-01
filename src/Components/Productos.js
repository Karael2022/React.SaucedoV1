import React, {useState, useEffect} from 'react'
import ItemListConteiner from './ItemListConteiner';

const Productos = [
    
    {
        
    }, 
    {id:1, 
        nombre:"Amazfit GTR 2", 
        precio: "54.995",
        describe:'El Amazfit GTR 2, es un nuevo clásico esencial. Este es un reloj espectacular que te permite controlar el tiempo con total seguridad. La pantalla siempre visible te permite consultar la hora incluso cuando las otras funciones del reloj están inactivas, así no te perderás ningún momento importante de tu vida',
        img:'https://stylewatch.vtexassets.com/arquivos/ids/194039/Smartwatch_Amazfit_AZA1952CLBK_01.jpg?v=637565313724730000',
        
    },
    {
        id:2, 
        nombre:"Smartwatch Amafiz GTS 3", 
        precio: "68.795",
        describe:'El nuevo Smartwatch Amazfit GTS 3 encenderá tu pasión por la moda con sus tres colores naturalmente hermosos para elegir. El cuerpo del reloj superelegante de 8,8 mm está fabricado con una aleación de aluminio de calidad aeronáutica, ligera pero duradera, y pesa solo 24,4 g, mientras que la pantalla de cristal curvo similar al océano se asimila al diseño sin bisel.1, para una inmersión total en su pantalla',
        img:"https://stylewatch.vtexassets.com/arquivos/ids/213545/Smartwatch_Amazfit_AZAAMAGTS3TR_01.jpg?v=637886731026170000",
    },
        {id:3,
        nombre:"Smartwactch Garmin Vune Negro", 
        precio: "122.995",
        describe:'Reloj Garmin Venu, es hermoso. Pasá más tiempo haciendo las actividades que te gustan y en sintonía con tu cuerpo con este brillante reloj inteligente. Es seguro para nadar y para ducharse. La duración de la batería es de hasta 5 días. Contiene la posibilidad de descargar hasta 500 canciones, y almacenarlas en tu dispositivo. También podés conectar los auriculares a través de Bluetooth®. Venu™ tiene la función Garmin Pay™ con la cual puedes realizar pagos sin contactos.',
        img:"https://stylewatch.vtexassets.com/arquivos/ids/174759/GA100217332_00.jpg?v=637285544145830000", 
        
    },
    {
        id:4,
        nombre:"Smartwatch Garmin Venu 2S Blanco", 
        precio: "139.995",
        describe:'Garmin Venu 2S Cuando llevas una vida sana, vives mejor. Este smartwatch con GPS cuenta con funciones de control de la salud y de ejercicio avanzadas para ayudarte a entender mejor lo que sucede dentro de tu cuerpo. Puedes realizar un seguimiento de más estadísticas de salud y obtener más detalles de lo que sucede dentro de tu cuerpo. Con 25 aplicaciones deportivas preinstaladas.',
        img:"https://stylewatch.vtexassets.com/arquivos/ids/196829/Smartwatch-Garmin-Venu-2S-Blanco-rose-GA100242913_01.jpg?v=637668985246300000",
        
    },
    
];
export default Productos;