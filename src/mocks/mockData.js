    const Products =[
      {  id:'1', 
        name:"Amazfit GTR 2", 
        price: 54.995,
        category: 'Amazfit',
        describe:'El Amazfit GTR 2, es un nuevo clásico esencial. Este es un reloj espectacular que te permite controlar el tiempo con total seguridad. ',
        img:'https://stylewatch.vtexassets.com/arquivos/ids/194039/Smartwatch_Amazfit_AZA1952CLBK_01.jpg?v=637565313724730000',
        stock: 5,
        
    },
    {
        id:'2', 
        name:"Amazfiz GTS 3", 
        price: 68.795,
        category: 'Amazfit',
        describe:'El nuevo Smartwatch Amazfit GTS 3 encenderá tu pasión por la moda con sus tres colores naturalmente hermosos para elegir. ',
        img:"https://stylewatch.vtexassets.com/arquivos/ids/213545/Smartwatch_Amazfit_AZAAMAGTS3TR_01.jpg?v=637886731026170000",
        stock: 5,
    },
        {id:'3',
        name:"Garmin Vune Negro", 
        price: 122.995,
        category: 'Garmin',
        describe:'Reloj Garmin Venu, es hermoso. Pasá más tiempo haciendo las actividades que te gustan y en sintonía con tu cuerpo con este brillante reloj inteligente. ',
        img:'https://stylewatch.vtexassets.com/arquivos/ids/174759/GA100217332_00.jpg?v=637285544145830000',
        stock: 5,
        
    },
    {
        id:'4',
        name:"Garmin Venu 2S Blanco", 
        price: 139.995,
        category: 'Garmin',
        describe:'Garmin Venu 2S Cuando llevas una vida sana, vives mejor. Este smartwatch con GPS cuenta con funciones de control de la salud y de ejercicio avanzadas.',
        img:"https://stylewatch.vtexassets.com/arquivos/ids/196829/Smartwatch-Garmin-Venu-2S-Blanco-rose-GA100242913_01.jpg?v=637668985246300000",
        stock: 5,
        
    },
    {
      id:'5',
      name:"Xiaomi Mi Watch Negro", 
      price: 52.995,
      category: 'Xiaomi',
      describe:'Con un diseño delgado y ligero, luce radiante durante todo el día sin ni siquiera notarlo.Te olvidarás de que llevas un reloj.',
      img:"https://stylewatch.vtexassets.com/arquivos/ids/199383/smartwatch-xiaomi-mi-watch-negro_XIWATCHBK_1.jpg?v=637687188967630000",
      stock: 5,
      
  },
  {
    id:'6',
    name:"Xiaomi Watch S1 Active GL Moon White", 
    price: 73.995,
    category: 'Xiaomi',
    describe:'Garmin Venu 2S Cuando llevas una vida sana, vives mejor. Este smartwatch con GPS cuenta con funciones de control de la salud y de ejercicio avanzadas.',
    img:"https://stylewatch.vtexassets.com/arquivos/ids/213564/Smartwatch-Xiaomi-XIWS1ACW_01.jpg?v=637886734608870000",
    stock: 5,
    
},
{
  id:'7',
  name:"Amazfit GTS Negro", 
  price: 41295,
  category: 'Amazfit',
  describe:'La elegante pantalla cuadrada personalizada de 1,65" ofrece un área de visualización más grande que la pantalla redonda, ya que muestra mayor contenido por lo que puede incluir más información.',
  img:"https://stylewatch.vtexassets.com/arquivos/ids/190687/Smartwatch_Amazfit_GTS_AZA1914OBK_01.jpg?v=637527074156800000",
  stock: 5,
  
},
{
id:'8',
name:"Garmin Forerunner 745", 
price: 152.999,
category: 'Garmin',
describe:'Es nuestro reloj inteligente multifuncional más pequeño y ligero para corredores y triatletas. Disfruta de las aplicaciones deportivas. Podés sincronizar tu música favorita con el reloj.',
img:"https://stylewatch.vtexassets.com/arquivos/ids/186663/GA100244511--1-.jpg?v=637442453761570000",
stock: 5,

},

];
  
export const data = new Promise((resolve, reject) => {
  
  let condition = true
  setTimeout(()=> {
    if (condition){
      resolve(Products)
    }else{
      reject('No hay stock')
    }
  },3000)
})


