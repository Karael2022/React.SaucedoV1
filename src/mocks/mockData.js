    const Products =[
      {  id:1, 
        name:"Amazfit GTR 2", 
        price: 54.995,
        category: 'Amazfit',
        describe:'El Amazfit GTR 2, es un nuevo clásico esencial. Este es un reloj espectacular que te permite controlar el tiempo con total seguridad. ',
        img:'https://stylewatch.vtexassets.com/arquivos/ids/194039/Smartwatch_Amazfit_AZA1952CLBK_01.jpg?v=637565313724730000',
        stock: 5,
        
    },
    {
        id:2, 
        name:"Amazfiz GTS 3", 
        price: 68.795,
        category: 'Amazfit',
        describe:'El nuevo Smartwatch Amazfit GTS 3 encenderá tu pasión por la moda con sus tres colores naturalmente hermosos para elegir. ',
        img:"https://stylewatch.vtexassets.com/arquivos/ids/213545/Smartwatch_Amazfit_AZAAMAGTS3TR_01.jpg?v=637886731026170000",
        stock: 5,
    },
        {id:3,
        name:"Garmin Vune Negro", 
        price: 122.995,
        category: 'Garmin',
        describe:'Reloj Garmin Venu, es hermoso. Pasá más tiempo haciendo las actividades que te gustan y en sintonía con tu cuerpo con este brillante reloj inteligente. ',
        img:'https://stylewatch.vtexassets.com/arquivos/ids/174759/GA100217332_00.jpg?v=637285544145830000',
        stock: 5,
        
    },
    {
        id:4,
        name:"Garmin Venu 2S Blanco", 
        price: 139.995,
        category: 'Garmin',
        describe:'Garmin Venu 2S Cuando llevas una vida sana, vives mejor. Este smartwatch con GPS cuenta con funciones de control de la salud y de ejercicio avanzadas.',
        img:"https://stylewatch.vtexassets.com/arquivos/ids/196829/Smartwatch-Garmin-Venu-2S-Blanco-rose-GA100242913_01.jpg?v=637668985246300000",
        stock: 5,
        
    },
    
];
  
export const data = new Promise((resolve, reject) => {
  //acciones
  let condition = true
  setTimeout(()=> {
    if (condition){
      resolve(Products)
    }else{
      reject('No hay stock')
    }
  },3000)
})


