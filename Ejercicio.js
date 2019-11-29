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



const precioMaquina = componentes => {
  let valor = 0;
  for (let componente of componentes) {
    precios.forEach(precio => {
      if (precio[0] == componente) {
        valor += precio[1];
      }
    });
  }
  return valor;
};

// ventaPromedio(): Debe retornar el importe promedio por venta, 
// como un número entero sin decimales redondeado siempre para abajo.


ventaPromedio = () => {
  valor = 0;
  let preciosComponentes = ventas.map(venta => {
    return precioMaquina(venta[6]);
  })
  let total = preciosComponentes.reduce((acumulador, venta) =>{
    return acumulador + venta
  });
  let resultado = total/ventas.length;
    return Math.floor(resultado)
}

//obtenerIdVenta(): Tiene que retornar un número aleatorio
//entre 100000000 y 999999999

obtenerIdVenta = () => {
  let min = 100000000;
  let max = 999999999;
  let venta = Math.round(Math.random() * (max +1) - min) + min;
  return venta;
}

//agregarVenta(dia, mes, anio, vendedora, sucursal, componentes): 
//recibe por parámetro todos los datos de una venta, 
//y los agrega en el array de ventas. 
//Al igual que las ventas que ya están previamente creadas, 
//además de estos datos necesitamos agregar el primer dato 
//que es un identificador de la venta. Para agregar este dato, 
//tenemos que usar la función desarrollada en el punto 
//anterior obtenerIdVenta

agregarVenta = (dia, mes, año, nombreVendedora, sucursal, componente) => {
  let id = obtenerIdVenta()
  return ventas.push([id, dia, mes, año, nombreVendedora, sucursal, componente]);
}


module.exports = {
  vendedoras,
  ventas,
  precios, 
  sucursales,
  ventaPromedio,
  obtenerIdVenta,
  agregarVenta
}