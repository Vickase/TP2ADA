const vendedoras = ["Fio", "Vick", "Hermenegilda", "Julia"];

const ventas = [
  [ 100000000, 4, 2, 2019, 'Vick', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000001, 1, 1, 2019, 'Hermenegilda', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000002, 2, 1, 2019, 'Fio', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'] ],
  [ 100000003, 10, 1, 2019, 'Vick', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'] ],
  [ 100000004, 12, 1, 2019, 'Julia', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200'] ],
  [ 100000005, 21, 3, 2019, 'Fio', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'] ]
]

const precios = [
  [ 'Monitor GPRS 3000', 200 ],
  [ 'Motherboard ASUS 1500', 120 ],
  [ 'Monitor ASC 543', 250 ],
  [ 'Motherboard ASUS 1200', 100 ],
  [ 'Motherboard MZI', 30 ],
  [ 'HDD Toyiva', 90 ],
  [ 'HDD Wezter Dishital', 75 ],
  [ 'RAM Quinston', 110 ],
  [ 'RAM Quinston Fury', 230 ]
];

const sucursales = ['Centro', 'Caballito'];

// ej 2

/**
cantidadVentasComponente(componente): recibe el nombre de un componente y 
devuelve la cantidad de veces que fue vendido. 
La lista de ventas no se pasa por parámetro, 
se asume que está identificada por la variable ventas.

console.log( cantidadVentasComponente("Monitor ASC 543") ); // 3
 */

const cantidadVentasComponente = componente  => {
  let cantidad = ventas.filter(venta => {
    let componentesDeVenta = venta[6];
    return componentesDeVenta.indexOf(componente) > -1;
  });
  return cantidad.length;
 }


 //* ej 4 

 /**
  * 
  * 
componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo históricamente.
 El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

console.log( componenteMasVendido() ); // Monitor GPRS 3000
*/

const componenteMasVendido = () => {
  let componenteMasVendido;
  let cantidadMax = 0;
  for (let precio of precios){
    const ventaComponente = cantidadVentasComponente(precio[0]);
    if (cantidadMax < ventaComponente){
      componenteMasVendido = precio[0];
      cantidadMax = ventaComponente;
    }
  }
  return componenteMasVendido;
};
   

module.exports = {
  ventas,
  precios,
  vendedoras,
  sucursales,
  cantidadVentasComponente,
  componenteMasVendido,


}

